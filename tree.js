class Node {
    value;
    left;
    right;

    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }

    add(value, node) {
        node = node || this;

        if(node.value === null){
            node.value = value;
            return;
        }

        if(node.value > value){
            if(node.left === null){
                node.left = new Node();
            }
            return this.add(value, node.left);
        }

        if(node.right === null){
            node.right = new Node();
        }
        return this.add(value, node.right);
    }
    search(value, node){
        node = node || this;

        if(value < node.value) {
            return this.search(value, node.left);
        }

        if(value > node.value) {
            return this.search(value, node.right);
        }

        return node;
    }

    minNode(node) {

        if (node.left === null){
            return node;
        }
        return this.minNode(node.left);
    }

    delite(value, node) {

        node = node || this;
        if(node.value === value){

            if(node.right === null && node.left === null){
                node = null;
                return node;
            }

            if(node.right === null){
                node = node.left;
                return node;
            } else if(node.left === null){
                node = node.right;
                return node;
            }
            let newNode = this.minNode(node.right);
            node.value = newNode.value;
            node.right = this.delite(newNode.value, node.right,);
            return node;

        }

        if(value < node.value) {
            node.left = this.delite(value, node.left);
            return node;
        }
        node.right = this.delite(value, node.right);
        return node;

    }


}

let binaryTree = new Node();
binaryTree.add(12);
binaryTree.add(10);
binaryTree.add(13);
binaryTree.add(15);
binaryTree.add(9);
binaryTree.add(8);
binaryTree.add(4);
binaryTree.add(19);
binaryTree.add(18);
binaryTree.add(14);


//

Array.prototype.customSort = function sort(func) {
    let value;
    for(let j = 0; j < this.length; j++) {
        let counter = 0;
        for (let i = 0; i < this.length - 1; i++) {
            if (func(this[i], this[i + 1])) {
                value = this[i];
                this[i] = this[i + 1];
                this[i + 1] = value;
                counter++;
            }
        }
        if(counter === 0){
            break;
        }
    }
    return this;
}

///

Array.prototype.customSort = function sort(func) {
     for (let i = 1; i < this.length; i++) {
    let currentValue = this[i];
        let j = i;
        while (j > 0 && func(this[j - 1], currentValue)) {
            this[j] = this[j - 1];
            j--;
        }
        this[j] = currentValue;
    }
    return this;
 }
