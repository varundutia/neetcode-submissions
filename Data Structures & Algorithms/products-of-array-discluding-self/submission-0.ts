class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefNum = [1];
        const suffNum = new Array(nums.length);

        for(let i=1;i<nums.length;i++){
            prefNum.push(prefNum[i-1]*nums[i-1]);
        }
        suffNum[nums.length-1] = 1;
        for(let i=nums.length-2;i>=0;i--){
            suffNum[i] = (suffNum[i+1]*nums[i+1]);
        }

        const retList = [];
        for(let i=0;i<nums.length;i++){
            retList.push(prefNum[i]*suffNum[i]);
        }
        return retList;

        // pref = [1,1,2,8]; suff = [48,24,6,1]
    }
}
