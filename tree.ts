function dataHash(value){
    let hash = 0;
    if (value.length === 0) return hash;
    for (let i = 0; i < value.length; i++) {
        let char = value.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}

class Tree {
    value: any;
    left: null | Tree;
    right: null | Tree;

    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }

    add(value: any, node: Tree): Tree {
        value = dataHash(value);
        node = node || this;

        if(node.value === null){
            node.value = value;
            return;
        }else {
                if(node.value > value){
                    if(node.left === null){
                        node.left = new Tree();
                    }
                    return this.add(value, node.left);
                }

        }
        if(node.right === null){
            node.right = new Tree();
        }
        return this.add(value, node.right);
    }
    search(value: number, node: Tree): Tree {
        node = node || this;
        if(node.value !== null){
            if(value < node.value) {
                return this.search(value, node.left);
            } else{

                if(value > node.value) {
                    return this.search(value, node.right);
                }
            }
        }
        return node;
    }

    minNode(node: Tree): Tree {

        if (node.left === null){
            return node;
        }
        return this.minNode(node.left);
    }

    delite(value: number | null, node: Tree): Tree {
        node = node || this;
        if(node.value === value){
            if(node.right === null && node.left === null){
                node = null;
                return;
            }
            if(node.right === null){
                node = node.left;
                return;
            } else if(node.left === null){
                node = node.right;
                return;
            }
            let newNode = this.minNode(node.right);
            node.value = newNode.value;
            node.right = this.delite(newNode.value, node.right,);
            return;
        }
        if(value !== null){
            if(value < node.value) {
                node.left = this.delite(value, node.left);
                return;
            }
            node.right = this.delite(value, node.right);
            return;
        }
    }
}



interface Array<T> {
    customSort(sort: T): Array<T>;
}

Array.prototype.customSort = function (func) {
    let value: number;
    for(let j = 0; j < this.length; j++) {
        let counter: number = 0;
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



Array.prototype.customSort = function (func) {
    for (let i: number = 1; i < this.length; i++) {
        let currentValue: number = this[i];
        let j: number = i;
        while (j > 0 && func(this[j - 1], currentValue)) {
            this[j] = this[j - 1];
            j--;
        }
        this[j] = currentValue;
    }
    return this;
}
