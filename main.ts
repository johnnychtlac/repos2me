import { parseArgs } from 'util';
import { YAML } from 'bun';

import { checkNDownloadAsync, getBranch, readAsync, saveFileAsync } from './datafactory/common';

const { values, _ } = parseArgs({
    args: Bun.argv,
    options: {
        datefrom: {
            type: 'string',
        },
        dateto: {
            type: 'string',
        },
    },
    strict: true,
    allowPositionals: true,
});

const rootLocation = 'datafactory/';
const fileLocation = 'data/';
const tempoLocation = 'tempo/';
const siteLocation = 'https://mirrors.aliyun.com/CTAN/';

const dataLocation = {
    local: {
        blacklist: `./${rootLocation}${fileLocation}blacklist.txt`,
        ctanbib: `./${rootLocation}${tempoLocation}ctanbib.txt`,
        ctanjson: './public/assets/ctan.json',
        filesbyname: `./${rootLocation}${tempoLocation}filesbyname.txt`,
        pkgs: `./${rootLocation}${fileLocation}pkgs.txt`,
        pkgsplus: `./${rootLocation}${fileLocation}pkgsplus.txt`,
        report: `./${rootLocation}${tempoLocation}report.txt`,
    },
    remote: {
        ctanbib: `${siteLocation}biblio/ctan-bibdata/ctan.bib`,
        filesbyname: `${siteLocation}FILES.byname`,
    },
};

const pkgs = YAML.parse(await readAsync(dataLocation.local.pkgs, true));
await checkNDownloadAsync(dataLocation.local.filesbyname, dataLocation.remote.filesbyname);
const filesbyname = new Set(await readAsync(dataLocation.local.filesbyname));

const branch = getBranch(values.datefrom, values.dateto);
if (branch == 'branchUpdate') {
    const mod = await import('./datafactory/update');
    const dates = mod.getDates(values.datefrom, values.dateto);
    const blacklist = new Set(await readAsync(dataLocation.local.blacklist));
    let output = mod.filterData(filesbyname, dates, 'verticalbar');
    output = mod.filterData(output, blacklist, 'slash', true);
    output = mod.filterData(output, new Set(Object.keys(pkgs)), 'all', true);
    await saveFileAsync(dataLocation.local.report, [...output].join('\n'));
} else if (branch == 'branchGeneration') {
    const mod = await import('./datafactory/generation');
    await mod.checkDetailsAsync(pkgs);
    const pkgsplus = mod.convertFromBib(await readAsync(dataLocation.local.pkgsplus, true));
    await checkNDownloadAsync(dataLocation.local.ctanbib, dataLocation.remote.ctanbib);
    const ctanbib = mod.convertFromBib(await readAsync(dataLocation.local.ctanbib, true));
    const ctanTotall = mod.amend(ctanbib, pkgsplus, filesbyname);
    const ctanJsonData = mod.getJsonData(pkgs, ctanTotall, siteLocation);
    await saveFileAsync(dataLocation.local.ctanjson, JSON.stringify(ctanJsonData));
} else {
    throw new Error('分支错误！');
    process.exit(1);
}

