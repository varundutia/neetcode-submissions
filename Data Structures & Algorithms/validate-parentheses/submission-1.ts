class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    openBrackets(s: string): boolean {
        if (s === '(' || s === '{' || s === '[') {
            return true;
        }
        return false;
    }
    closedBrackets(s: string): boolean {
        if (s === ')' || s === '}' || s === ']') {
            return true;
        }
        return false;
    }
    compareBrackets(s1: string, s2: string) {
        if (s1 === '(' && s2 === ')') {
            return true;
        }
        else if (s1 === '[' && s2 === ']') {
            return true;
        }
        else if (s1 === '{' && s2 === '}') {
            return true;
        }
        return false;
    }
    isValid(s: string): boolean {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (this.openBrackets(s[i])) {
                stack.push(s[i]);
            }
            else if (this.closedBrackets(s[i])) {
                if (this.compareBrackets(stack[stack.length - 1], s[i])) {
                    stack.pop();
                }
                else{
                    stack.push(s[i]);
                }
            }
        }
        return stack.length === 0;
    }
}
