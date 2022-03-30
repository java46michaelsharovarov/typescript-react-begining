// function intersection(set1: Set<number>, set2: Set<number>): number[] {
//     // TODO write function returning array of common numbers between two sets
//     // that is the numbers existing in both sets
//     const ar1 = Array.from(set1);
//     return ar1.filter(e => set2.has(e));
// }
// function sbtract(set1: Set<number>, set2: Set<number>): number[] {
//     // TODO write function returning array of common numbers between two sets
//     // that is the numbers existing in both sets
//     const ar1 = Array.from(set1);
//     return ar1.filter(e => !set2.has(e));
// }
function getSortedOccurrences(array) {
    //TODO
    //write function returning array of occurrences 
    //each occurrency contains a string from the given array and how many times it occures in the array
    // a result array should be sorted in the descending order of the occurrences and ascending order of the strings
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result: [{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count:1}, {str: 'ab', count:1}]
    //implementation notes: to use Map<string, number>
    let res = array.reduce((acc, e) => ((acc[e] ? acc[e] += 1 : acc[e] = 1), acc), {});
    const arraySort = Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0], 'en') : res;
    });
    let mapStrings = new Map([]);
    mapStrings = arraySort.map((e) => {
        return {
            str: e[0],
            count: e[1]
        };
    });
    return mapStrings;
}
const array = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
console.log(getSortedOccurrences(array));
