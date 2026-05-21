class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x: number, n: number): number {
        if(n < 0){
            return this.myPow(1/x, -n);
        }
        if(n === 0){
            return 1;
        }

        const halfPow = this.myPow(x, Math.floor(n/2));

        if(n % 2 === 0){
            return halfPow * halfPow;
        }
        else{
            return halfPow * halfPow * x;
        }
    }
}
