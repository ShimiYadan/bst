const bst = new Bst();
bst.insert(5);
bst.insert(3);
bst.insert(6);

var root = bst.getRootNode();
document.write("Inorder: " + '<br>');
bst.inorder(root);
document.write('<br>' + "Preorder: " + '<br>');
bst.preorder(root);

document.write('<br>' + "deliting node: " + '<br>');
bst.remove(3);
bst.inorder(root);
