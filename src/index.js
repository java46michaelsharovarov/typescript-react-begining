function intersection(set1, set2) {
    const ar = [];
    set1.forEach(e => set2.has(e) && ar.push(e));
    return ar;
}
function sbtract(set1, set2) {
    return [...set1].filter(e => !set2.has(e));
}
function getSortedOccurrences(array) {
    const resMap = new Map();
    array.forEach(str => resMap.set(str, resMap.has(str) ? resMap.get(str) + 1 : 1));
    const resAr = [];
    resMap.forEach((vol, key) => resAr.push({ str: key, count: vol }));
    resAr.sort((a, b) => b.count - a.count || a.str.localeCompare(b.str, 'en'));
    return resAr;
}
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const array = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
console.log(intersection(set1, set2));
console.log(sbtract(set1, set2));
console.log(getSortedOccurrences(array));
