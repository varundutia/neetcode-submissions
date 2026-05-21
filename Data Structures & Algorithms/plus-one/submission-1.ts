class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        const sum = digits[digits.length-1] + 1;
        let carry = 0;
        if(sum > 9){
            digits[digits.length-1] = sum%10;
            carry = 1;
            for(let i=digits.length-2;i>=0;i--){
                if(digits[i] + carry > 9){
                    digits[i] = (digits[i]+carry)%10;
                }
                else{
                    digits[i]++;
                    carry = 0;
                    break;
                }
            }
            if(carry != 0){
                digits.unshift(1);
            }
            return digits;
        }
        digits[digits.length-1]++;
        return digits;
    }
}
