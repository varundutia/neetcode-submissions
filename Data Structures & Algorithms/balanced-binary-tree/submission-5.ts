/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    heightTree(root: TreeNode | null): number {
        if(root === null){
            return 0;
        }
        return Math.max(this.heightTree(root.left), this.heightTree(root.right)) + 1;
    }
    isBalanced(root: TreeNode | null): boolean {
        if(root === null || (root.left === null && root.right === null)){
            return true;
        }
        const lH = this.heightTree(root.left);
        const rH = this.heightTree(root.right);
        console.log(lH, rH);
        if(Math.abs(lH - rH) > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
