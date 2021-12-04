interface Obj{
    value: number | null;
    left: null | Obj;
    right: null | Obj;
}

class Node {
    value: number | null;
    left: null | Obj;
    right: null | Obj;

    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }

    add(value: number | null, node: Obj | any): any {
        node = node || this;

        if(node.value === null){
            node.value = value;
            return;
        }else {
        if(node.value !== null && value !== null){
            if(node.value > value){
                if(node.left === null){
                    node.left = new Node();
                }
                return this.add(value, node.left);
            }
        }
}
        if(node.right === null){
            node.right = new Node();
        }
        return this.add(value, node.right);
    }
    search(value: number | null, node: Obj | any): any {
        node = node || this;
        if(node.value !== null && value !== null){
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

    minNode(node: Obj | any): any {

        if (node.left === null){
            return node;
        }
        return this.minNode(node.left);
    }

    delite(value: number | null, node: Obj | any): any {

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
        if(value !== null){
            if(value < node.value) {
                node.left = this.delite(value, node.left);
                return node;
            }
            node.right = this.delite(value, node.right);
            return node;
        }
    }


}
