// Node class/object
export class Node {

    data: any | null
    left: Node | null
    right: Node | null

    constructor(data: any | null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}