# Binary-Search-Tree
In computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is a rooted binary tree data structure with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree. The time complexity of operations on the binary search tree is directly proportional to the height of the tree.

# installation
install node -v 14+

# run the command
npm install

# microsevice config example package.json
{
  "name": "[micro service name]",
  "version": "1.0.0",
  "description": "import the binary-search-tree library",
  "main": "[the server path]",
  "keywords": [],
  "author": "Shimi Yadan",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^17.0.21",
    "bst": "git+https://github.com/ShimiYadan/bst.git#1.0.0",
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "typescript": "file:typescript"
  }
}

# usage example
import { Bst } from 'bst'

const bst = new Bst()
bst.insert(5)
bst.insert(3)
bst.insert(7)

/*
  print all node data by inorder
  and preorder search

          5 
        /   \
      3       7
*/
bst.forEachInorder((element: any) => {
  console.log(element)
})
// output: 3 5 7 

bst.forEachPreorder((element: any) => {
  console.log(element)
})
// output: 5 3 7 
