function intersection(set1: Set<number>, set2: Set<number>): number[] {
    const ar: number[] = [];
    set1.forEach(e => set2.has(e) && ar.push(e));
    return ar;
}
function sbtract(set1: Set<number>, set2: Set<number>): number[] {
    return [...set1].filter(e => !set2.has(e));
}
type Occurrency = {
    str: string;
    count: number;
}
function getSortedOccurrences(array: string[]): Occurrency[] { 
    const resMap = new Map<string, number>();
    array.forEach(str => resMap.set(str, resMap.has(str) ? resMap.get(str) + 1 : 1));
    const resAr: Occurrency[] = [];
    resMap.forEach((vol, key) => resAr.push({str: key, count: vol}));
    resAr.sort((a, b) => b.count - a.count || a.str.localeCompare(b.str, 'en'));
    return resAr;
}

const set1 = new Set<number>([1, 2, 3, 4]);
const set2 = new Set<number>([3, 4, 5, 6]);
const array: string[] = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
console.log(intersection(set1, set2));
console.log(sbtract(set1, set2));
console.log(getSortedOccurrences(array));