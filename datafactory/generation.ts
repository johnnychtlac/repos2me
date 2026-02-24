import { parse } from '@retorquere/bibtex-parser';

interface ICtan {
    id: string;
    subtitle: string;
    date?: string;
    labels: strng[];
    mirror?: string;
}

/**
 * @summary 检查 details 文件中数量。
 * @description pkgs 中键值不为 null 的 key 都应对应存在一个 detail 中的文件。
 * @async
 * @function
 * @param {object} pkgs - 被测试的包。
 * @returns {void}
 * @throws {Error} 键值与文件需要一一对应。
 */
async function checkDetailsAsync(pkgs): never | void {
    const ids = Object.keys(pkgs).filter(key => pkgs[key]);
    for (const id of ids) {
        if (!await Bun.file(`./public/assets/details/${id}.txt`).exists()) {
            throw new Error(`缺少${id}详细文件！`);
            process.exit(1);
        }
    }
}

/**
 * @summary 解析 bib 文件。
 * @description 将 bib 格式文件解析为 js 对象。
 * @function
 * @param {string} localPath - 待解析的 bib 格式文件。
 * @return {Set<ICtan>} 返回一个 ICtan 格式的 Set。
 */
function convertFromBib(localPath: string): Set<ICtan> {
    const data = new Set();
    const entries = new Set(parse(localPath).entries);
    for (const el of entries) {
        const nomatter = el.fields.mirror?.substring(24) ?? '';
        data.add({
            id: el.key,
            subtitle: el.fields.subtitle,
            date: el.fields.date,
            mirror: nomatter.includes('.') ? `${nomatter.substring(0, nomatter.lastIndexOf('/'))}/` : `${nomatter}/`,
        });
    }
    return data;
}

/**
 * @summary 修正数据。
 * @description 使用 filesbyname 文件修正 pkgsplus 文件中的 date 数据。进而修正 ctanbib 文件数据。
 * @function
 * @param {Set<ICtan>} ctanbib - ctanbib 数据。
 * @param {Set<ICtan>} pkgsplus - pkgsplus 数据。
 * @param {Set<string>} filesbyname - filesbyname 数据。
 * @return {Set<ICtan>} 修正后的数据。
 */
function amend(ctanbib: Set<ICtan>, pkgsplus: Set<ICtan>, filesbyname: Set<string>): Set<ICtan> {
    const pkgsplusFormat = new Set();
    const pkgsplusKeys = new Set();
    for (const el of pkgsplus) {
        pkgsplusKeys.add(el.id);
        let nomatter = `${el.mirror}${el.date}`;
        for (const line of filesbyname) {
            if (line.endsWith(nomatter)) {
                pkgsplusFormat.add({
                    id: el.id,
                    subtitle: el.subtitle,
                    date: line.split('|')[0].replaceAll('/', '-'),
                    mirror: el.mirror,
                });
                break;
            }
        }
    }
    const output = new Set();
    for (const el of ctanbib) {
        if (!pkgsplusKeys.has(el.id)) {
            output.add(el);
        }
    }
    return [...output, ...pkgsplusFormat];
}

/**
 * @summary 生成 json 数据内容。
 * @description 将数据进行处理为 json 格式。
 * @function
 * @param {any} pkgs - pkgs 数据。
 * @param {Set<ICtan>} ctandata - ctandata 数据。
 * @param {string} site - 网络镜像。
 * @return {any} 返回数据内容。
 */
function getJsonData(pkgs, ctandata: Set<ICtan>, site: string) {
    const pkgsKeys = Object.keys(pkgs);
    const output = new Set();
    for (const pk of pkgsKeys) {
        if (!pkgs[pk]) {
            console.warn(`跳过无效包配置: ${pk}`);
            continue;
        }
        for (const el of ctandata) {
            if (`ctan-${pk}` == el.id) {
                output.add({
                    id: pk,
                    subtitle: el.subtitle.includes('\\') ? el.subtitle.replace(/\\/g, '') : el.subtitle,
                    date: el.date,
                    labels: pkgs[pk].labels,
                    docpaths: pkgs[pk].docpaths.map(x => `${el.mirror}${x}`),
                    // mirror: el.mirror,
                });
                break;
            }
        }
    }
    return {
        site: site,
        pkgs: [...output],
    };
}

export { amend, checkDetailsAsync, convertFromBib, getJsonData };

