class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let xor = 0;
        for(let i=0;i<nums.length+1;i++){
            xor^=i;
        }
        for(let i=0;i<nums.length;i++){
            xor^=nums[i];
        }
        return xor;
    }
}
