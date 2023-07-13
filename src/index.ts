import { Node } from './node'

export class Bst {

  private root: any | null

  constructor() {
    this.root = null;
  }

  // Help to create a new node
  insert(data: any): void {
    const newNode: Node = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    return this.root
  }

  // Insert node into the right position
  private insertNode(node: Node, newNode: Node): void {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Preorder method with forEach functionality
  private inorderForEach(node: Node | null, callback: (data: any) => void): void {
    if (node !== null) {
      this.inorderForEach(node.left, callback);
      callback(node.data);
      this.inorderForEach(node.right, callback);
    }
  }

  // Preorder method with forEach functionality
  private preorderForEach(node: Node | null, callback: (data: any) => void): void {
    if (node !== null) {
      callback(node.data);
      this.preorderForEach(node.left, callback);
      this.preorderForEach(node.right, callback);
    }
  }

  // forEach method for inorder traversal
  public forEachPreorder(callback: (data: any) => void): void {
    this.preorderForEach(this.root, callback);
  }

  // forEach method for inorder traversal
  public forEachInorder(callback: (data: any) => void): void {
    this.inorderForEach(this.root, callback);
  }

  // Get root node
  getRootNode(): Node | null {
    return this.root;
  }

  // Remove node from BST
  remove(data: any): void {
    this.root = this.removeNode(data);
  }

  // Remove data node from the tree and return new root
  private removeNode(data: any): void {
    this.removeNodeP(this.root, data)
  }

  // Remove data node from the tree and return new root
  private removeNodeP(node: Node | null, data: any): Node | null {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNodeP(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNodeP(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
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
  private findMinNode(node: Node): Node {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }
}