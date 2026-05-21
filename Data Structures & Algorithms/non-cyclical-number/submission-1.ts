class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    computeSumSquares(n: number): number {
        let sum = 0;
        while(n > 0){
            const a = n % 10;
            sum += a * a;
            n = Math.floor(n/10);
        }
        return sum;
    }
    isHappy(n: number): boolean {
        const set = new Set<number>();
        set.add(n);
        while(n !== 1){
            const sumSquares = this.computeSumSquares(n);
            if(set.has(sumSquares)){
                return false;
            }
            set.add(sumSquares);
            n = sumSquares;
        }
        return true;
    }
}
