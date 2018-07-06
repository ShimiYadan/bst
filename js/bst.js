/*
 Author: Shimi Yadan
 Last update: 7.5.2018
 */
function Bst() {
    this.root = null;

    // help to create a new node
    this.insert = function(data) {
        // create a new node
        var newNode = new Node(data);

        // if root is null then root will
        // be with this node
        if(this.root == null) {
            this.root = newNode;

        } else {
            // insert as BST method into tree
            this.insertNode(this.root, newNode);
        }
    }

    // insert node into right position
    this.insertNode = function(node, newNode) {
        // if data less then node value
        // go left
        if(newNode.data < node.data) {
            // if left is null put it here
            if(node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // if right is null insert node here
            if(node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // inorder method
    this.inorder = function(node) {
        if(node != null) {
            this.inorder(node.left);
            document.write(node.data + ' ');
            this.inorder(node.right);
        }
    }

    // post order
    this.preorder = function(node) {
        if(node != null) {
            document.write(node.data + ' ');
            this.preorder(node.left);
            this.preorder(node.right);
        }
     }

    // get root node
    this.getRootNode = function() {
        return this.root;
    }

    // remove node from bst
    this.remove = function(data) {
        // return new root without node data
        this.root = this.removeNode(this.root, data);
    }

    // remove data node from the tree and return
    // new root
    this.removeNode = function(node, data) {
        // if tree is empty
        if(node === null) return null;

        // if data small than node data
        // go left sub tree
        if(data < node.data) {
            node.left = this.removeNode(node.left, data);
        }
        // if data grater than node data
        // go to right sub tree
         else if(data > node.data) {
            node.right = this.removeNode(node.right, data);
        }
        // if data equal to node.data
        // than delete the node
        else {
            // CASE 1: node without children
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // CASE 2: node with one children
            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            // CASE 3: node with two children
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // find minimum node in tree
    this.findMinNode = function(node) {
        if(node === null) return node;
        else return this.findMinNode(node.left);
    }
}




