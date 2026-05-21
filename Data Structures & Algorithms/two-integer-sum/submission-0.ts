class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map<number, number>();
        for(let i=0;i<nums.length;i++){
            const t = target-nums[i];
            if(map.has(t) && map.get(t) != i){
                return [i, map.get(t)];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
