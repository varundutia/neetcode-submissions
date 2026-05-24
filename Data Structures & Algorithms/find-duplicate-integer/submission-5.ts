class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        for(let i=0;i<nums.length;i++){
            const value = Math.abs(nums[i]);
            const index = value - 1;
            if(nums[index] < 0){
                return value;
            }
            nums[index] = -nums[index]; 
        }
    }
}
