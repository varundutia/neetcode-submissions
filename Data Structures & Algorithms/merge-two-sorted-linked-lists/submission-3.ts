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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let retList = new ListNode();
        if(list1 === null) return list2;
        if(list2 === null) return list1;
        if(list1.val <= list2.val){
            retList = list1;
            list1 = list1.next;
        }
        else{
            retList = list2;
            list2 = list2.next;
        }
        let p = retList;
        while(list1 != null && list2 != null){
            if(list1.val <= list2.val){
                retList.next = list1;
                retList = retList.next;
                list1 = list1.next;
            }
            else {
                retList.next = list2;
                retList = retList.next;
                list2 = list2.next;
            }
        }
        while(list1 != null){
           retList.next = list1;
           retList = retList.next;
           list1 = list1.next;
        }
        while(list2 != null){
           retList.next = list2;
           retList = retList.next;
           list2 = list2.next;
        }

        return p;
    }
}
