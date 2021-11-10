
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

    delite(value, node) {

        node = node || this;
        if(node.value === value){
            console.log(node);
            console.log(node.value);
            if(node.right === null && node.left === null){
                this.node = null;
               return this.node;
            }
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

function sort(argument, i, j, counter) {
    i = i || 0;
    j = j || i + 1;
    counter = counter || 0;
    let value = 0;
        if(i < argument.length - 1 && j < argument.length){
            if(argument[i] > argument[j]) {
                value = argument[i];
                argument[i] = argument[j];
                argument[j] = value;
                counter++
                return sort(argument, i + 1, j + 1, counter);
            }
            return sort(argument, i + 1, j + 1, counter);
        }
       if(counter === 0) {
        return argument;
        }
        
        return sort(argument);
}

///

function sort (argument){
    for (let i = 1; i < argument.length; i++) {
        let currentValue = argument[i];
        let j = i;
        while (j > 0 && argument[j - 1] > currentValue) {
            argument[j] = argument[j - 1];
            j--;
        }
        argument[j] = currentValue;
    }
    return argument;
}
