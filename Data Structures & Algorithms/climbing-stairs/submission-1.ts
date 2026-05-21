class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    memo: Map<number, number>
    constructor(){
        this.memo = new Map<number, number>();
    }

    climbStairs(n: number): number {
        if(n <= 2){
            return n;
        }
        if(this.memo.has(n)){
            return this.memo.get(n);
        }

        const ways =  this.climbStairs(n-1) + this.climbStairs(n-2);
        this.memo.set(n, ways);
        
        return ways;
    }
}
