class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map<string, string[]>();
        for(const str of strs){
            const sorted = str.split("").sort().join("");
            if(map.has(sorted)) {
                let l = map.get(sorted);
                l.push(str);
                map.set(sorted, l);
            }
            else{
                map.set(sorted, [str]);
            }
        }
        let retList = [];
        for(const key of map.keys()){
            retList.push(map.get(key));
        }
        return retList;
    }
}
