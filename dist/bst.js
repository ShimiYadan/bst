"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bst = void 0;
const node_1 = require("./node");
class Bst {
    constructor() {
        this.root = null;
    }
    // Help to create a new node
    insert(data) {
        const newNode = new node_1.Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
        return this.root;
    }
    // Insert node into the right position
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // Preorder method with forEach functionality
    inorderForEach(node, callback) {
        if (node !== null) {
            this.inorderForEach(node.left, callback);
            callback(node.data);
            this.inorderForEach(node.right, callback);
        }
    }
    // Preorder method with forEach functionality
    preorderForEach(node, callback) {
        if (node !== null) {
            callback(node.data);
            this.preorderForEach(node.left, callback);
            this.preorderForEach(node.right, callback);
        }
    }
    // forEach method for inorder traversal
    forEachPreorder(callback) {
        this.preorderForEach(this.root, callback);
    }
    // forEach method for inorder traversal
    forEachInorder(callback) {
        this.inorderForEach(this.root, callback);
    }
    // Get root node
    getRootNode() {
        return this.root;
    }
    // Remove node from BST
    remove(data) {
        this.root = this.removeNode(data);
    }
    // Remove data node from the tree and return new root
    removeNode(data) {
        this.removeNodeP(this.root, data);
    }
    // Remove data node from the tree and return new root
    removeNodeP(node, data) {
        if (node === null)
            return null;
        if (data < node.data) {
            node.left = this.removeNodeP(node.left, data);
        }
        else if (data > node.data) {
            node.right = this.removeNodeP(node.right, data);
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            const aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNodeP(node.right, aux.data);
            return node;
        }
        return node;
    }
    // Find minimum node in tree
    findMinNode(node) {
        if (node.left === null)
            return node;
        return this.findMinNode(node.left);
    }
}
exports.Bst = Bst;
