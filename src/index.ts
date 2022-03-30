function intersection(set1: Set<number>, set2: Set<number>): number[] {
    // TODO write function returning array of common numbers between two sets
    // that is the numbers existing in both sets
    const ar1 = Array.from(set1);
    return ar1.filter(e => set2.has(e));
}
function sbtract(set1: Set<number>, set2: Set<number>): number[] {
    // TODO write function returning array of common numbers between two sets
    // that is the numbers existing in both sets
    const ar1 = Array.from(set1);
    return ar1.filter(e => !set2.has(e));
}
type Occurrency = {
    str: string;
    count: number;
}
function getSortedOccurrences(array: string[]): Occurrency[] {
    //TODO
    //write function returning array of occurrences 
    //each occurrency contains a string from the given array and how many times it occures in the array
    // a result array should be sorted in the descending order of the occurrences and ascending order of the strings
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result: [{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count:1}, {str: 'ab', count:1}]
    //implementation notes: to use Map<string, number>
    const res = array.reduce((acc, e) => ((acc[e]? acc[e] +=1 : acc[e] = 1), acc), {});
    const arraySort = Object.entries(res).sort((e1: any, e2: any) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0], 'en') : res;
    })    
    const mapStrings: Occurrency[] = arraySort.map((e) => {
        return {
            str: e[0],
            count: e[1]
        }
    });
    return mapStrings;
}

const set1 = new Set<number>([1, 2, 3, 4]);
const set2 = new Set<number>([3, 4, 5, 6]);
const array: string[] = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
console.log(intersection(set1, set2));
console.log(sbtract(set1, set2));
console.log(getSortedOccurrences(array));