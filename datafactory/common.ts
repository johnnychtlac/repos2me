import { mkdir } from 'node:fs/promises';

/**
 * @summary 获取分支。
 * @description 通过查询是否传入 datefrom 和 dateto 参数判断是更新数据还是生成数据。
 * @function
 * @param {string} datefrom - 开始日期，由脚本参数提供。
 * @param {string} dateto - 结束日期，由脚本参数提供。
 * @returns {'branchGeneration' | 'branchUpdate'} 参数为空则返回 branchGeneration，否则返回 branchUpdate。
 * @example
 * // 返回数据更新分支
 * const branch = getBranch('2026-01-01', '2026-10-10');
 * @example
 * // 返回数据生辰分支
 * const branch = getBranch();
 */
function getBranch(datefrom: string, dateto: string): 'branchGeneration' | 'branchUpdate' {
    if (datefrom == null && dateto == null) {
        return 'branchGeneration';
    } else {
        return 'branchUpdate';
    }
}

/**
 * @summary 读取本地文件内容。
 * @description 根据参数设置决定返回类型。
 * @async
 * @function
 * @param {string} localPath - 本地文件路径。
 * @param {boolean} isRaw - 指示是否读取原始内容，false 则读取为每行数组，true 则为原始内容。
 * @returns {Promise<string> | Promise<string[]>} 原始内容或每行数组。
 */
async function readAsync(localPath: string, isRaw: boolean = false): Promise<string> | Promise<string[]> {
    const file = Bun.file(localPath);
    const text = await file.text();
    return isRaw ? text : text.split(/\r?\n/).filter(line => line.length > 0).map(line => line.replace(/\s/g, ''));
}

/**
 * @summary 检查、下载文件。
 * @description 检查本地是否存在目标文件，不存在则下载该文件。
 * @async
 * @function
 * @param {string} localPath - 本地文件路径。
 * @param {string} remotePath - 远程文件路径。
 * @returns {void} 无。
 */
async function checkNDownloadAsync(localPath:string, remotePath: string): void {
    if (!await Bun.file(localPath).exists()) {
        const dir = localPath.substring(0, localPath.lastIndexOf('/'));
        if (dir) {
            await mkdir(dir, { recursive: true });
        }
        const response = await fetch(remotePath);
        const file = Bun.file(localPath);
        await file.write(response);
    }
}

/**
 * @summary 写入文件。
 * @description 如果本地存在该文件，则删除文件后写入。
 * @async
 * @function
 * @param {string} localPath - 本地文件路径。
 * @param {any} data - 文件内容。
 * @return {void}
 */
async function saveFileAsync(localPath: string, data): void {
    if (await Bun.file(localPath).exists()) {
        await Bun.file(localPath).delete();
    }
    await Bun.write(localPath, data);
}


export { checkNDownloadAsync, getBranch, readAsync, saveFileAsync };

