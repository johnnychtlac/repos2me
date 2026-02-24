import { Temporal } from '@js-temporal/polyfill';

/**
 * @summary 获取日期。
 * @description 获取两个日期内所有日期的数组，包含边界。
 * @function
 * @param {string} datefrom - 开始日期，格式为 YYYY/MM/DD。
 * @param {string} dateto - 结束日期，格式为 YYYY/MM/DD。
 * @returns {Set} 包含所用日期的一个 Set。
 * @throws {Error} 当只有一个参数，或结束日期小于开始日期时，抛出错误。
 */
function getDates(datefrom: string, dateto: string): Set {
    if (datefrom && dateto) {
        const df = Temporal.PlainDate.from(datefrom.replace(/\//g, '-'));
        const dt = Temporal.PlainDate.from(dateto.replace(/\//g, '-'));
        if (Temporal.PlainDate.compare(df, dt) == 1) {
            throw new Error('开始日期不能大于结束日期！');
            process.exit(1);
        }
        const totalDays = Math.floor(df.until(dt, { largestUnit: 'days' }).days || 0);
        const dates: Set = new Set();
        for (let i = 0; i <= totalDays; i++) {
            dates.add(df.add({ days: i }).toString().replace(/\-/g, '/'));
        }
        return dates;
    } else {
        throw new Error('缺少日期参数:throw！');
        process.exit(1);
    }
}

/**
 * @summary 过滤数据。
 * @description 根据需要过滤数据。
 * @function
 * @param {Set} source - 等待过滤的数据。
 * @param {Set} sieve - 用于过滤数据的数据。
 * @param {'verticalbar' | 'slash' | 'all'} separator - 指示分隔符类型，verticalbar 为“|”，slash 为“/”，all 为“|/.”。
 * @param {boolean} isReverse - 如果为 false 过滤的数据与用于过滤的数据具有交集，如果为 true 过滤的属于与用于过滤的数据无交集。
 * @return {Set} 过滤后的数据。
 */
function filterData(source: Set, sieve: Set, separator: 'verticalbar' | 'slash' | 'all', isReverse: boolean = false): Set {
    const output: Set = new Set();
    let nomatter: Set = new Set();
    for (const el of source) {
        if (separator == 'verticalbar') {
            el.split(/\|/).forEach(item => nomatter.add(item));
        } else if (separator == 'slash') {
            el.split('/').forEach(item => nomatter.add(item));
        } else if (separator == 'all') {
            el.split(/[|/.]/).forEach(item => nomatter.add(item));
        } else {
            throw new Error('分隔符错误！');
            process.exit(1);
        }
        if (isReverse) {
            if ((nomatter.intersection(sieve)).size == 0) {
                output.add(el);
            }
        } else {
            if ((nomatter.intersection(sieve)).size > 0) {
                output.add(el);
            }
        }
        nomatter.clear();
    }
    return output;
}

export { filterData, getDates };

