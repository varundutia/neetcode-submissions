/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    modAndCarry(a: number, b: number) {
        if(a+b >9){
            return [(a + b) % 10, 1];
        }
        return [a + b, 0];  
    }
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let carry = 0;
        let mod = 0;
        let p = l1;
        let prev = l1;
        while(l1 != null && l2 != null){
            const a = l1.val;
            const b = l2.val;
            let val = this.modAndCarry(a,b+carry)[0];
            carry = this.modAndCarry(a,b+carry)[1];
            l1.val = val;

            prev = l1;
            l1 = l1.next;
            l2 = l2.next;
            console.log(p);
        }
        if(l1 !== null){
            while(l1 != null){
                let val = this.modAndCarry(l1.val, carry)[0];
                carry = this.modAndCarry(l1.val, carry)[1];
                l1.val = val;
                prev = l1;
                l1 = l1.next;
            }
        }

        if(l2 !== null){
            while(l2 != null){
                let val = this.modAndCarry(l2.val, carry)[0];
                carry = this.modAndCarry(l2.val, carry)[1];
                prev.next = new ListNode(val);
                prev = prev.next;
                l2 = l2.next;
            }
        }

        if(carry === 1){
            prev.next = new ListNode(carry);
        }

        return p;
    }
}
