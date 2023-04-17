/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    
    const paths = [];
    const stack = [[root, root.val.toString()]];
    
    while (stack.length) {
        const [node, path] = stack.pop();
        
        if (!node.left && !node.right) {
            paths.push(path);
        }
        
        if (node.left) {
            stack.push([node.left, path + '->' + node.left.val.toString()]);
        }
        
        if (node.right) {
            stack.push([node.right, path + '->' + node.right.val.toString()]);
        }
    }
    
    return paths;
    
};
