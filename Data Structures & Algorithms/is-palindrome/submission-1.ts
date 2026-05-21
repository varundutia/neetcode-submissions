class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(s: string): boolean {
        if((s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57) || 
        (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) ||
        (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122)){
            return true;
        }
        return false;
    }
    isPalindrome(s: string): boolean {
        let l = 0, r = s.length-1;
        while(l <= r){
            if(!this.isAlphaNumeric(s[l])){
                l++;
                continue;
            }
            else if(!this.isAlphaNumeric(s[r])){
                r--;
                continue;
            }
            else{
                const lc = s[l].toLowerCase();
                const rc = s[r].toLowerCase();

                if(lc !== rc){
                    return false;
                }
            }
            l++;
            r--;
        }
        return true;
    }
}
