class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set<string>();
        let l = 0,r = 0;
        let maxW = 0;

        while(r < s.length){
            while(set.has(s[r])){
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            maxW = Math.max(maxW, r-l+1);
            r++;
        }

        return maxW;
    }
}
