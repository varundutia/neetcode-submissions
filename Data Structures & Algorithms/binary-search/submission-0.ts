class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length-1;
        while(l <= r){
            let mid = Math.floor(l + (r-l)/2);
            if(target === nums[mid]){
                return mid;
            }
            else if(nums[mid] < target){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
        return -1;
    }
}
