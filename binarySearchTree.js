class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

class binarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;
        let newNode = new Node(value)

        const searchTree = node => {

            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                }
                else {
                    searchTree(node.left)
                }

            }

            else if (value > node.value) {

                if (!node.right) {
                    node.right = newNode
                }
                else {
                    searchTree(node.right)
                }

            }
        }

        searchTree(this.root)
    }

    min() {
        let tempNode = this.root;

        while (tempNode.left) {
            tempNode = tempNode.left;
        }
        return tempNode.value
    }

    max() {
        let tempNode = this.root;

        while (tempNode.right) {
            tempNode = tempNode.right;
        }
        return tempNode.value
    }

    contains(value) {
        let tempNode = this.root;

        while (tempNode) {
            if (value === tempNode.value) {
                return true
            }

            if (value < tempNode.value) {
                tempNode = tempNode.left;
            }
            else {
                tempNode = tempNode.right;
            }
        }
        return false;
    }
    //depth search
    //in-order
    inOrderSearch() {
        let result = [];

        const temp = node => {
            if(node.left){
                temp(node.left)
            }
            result.push(node.value)

            if(node.right){
                temp(node.right)
            }
            
        }

        temp(this.root);
        return result;
    }

    //pre-order

    preSearch() {
        let result = [];

        const temp = node => {

            result.push(node.value)

            if(node.left){
                temp(node.left)
            }
            if(node.right){
                temp(node.right)
            }    
        }

        temp(this.root);
        return result;
    }
    //post-order
    postSearch() {

        let result = [];

        const temp = node => {

            if(node.left){
                temp(node.left)
            }
            if(node.right){
                temp(node.right)
            } 
            
            result.push(node.value)

            
        }
        temp(this.root);
        return result;
    }

    bfsSearch() {
        let result = [];

        let q = [];

        q.push(this.root);

        while (q.length){
            let tempNode = q.shift()
            result.push(tempNode.value);

            if (tempNode.left){
                q.push(tempNode.left)
            }
            if (tempNode.right){
                q.push(tempNode.right)
            }
        }

        return result;
    }

}

printList = (lst, searchMethod = 1) => {
    let arr = []
    if (searchMethod === 1){
        arr = lst.inOrderSearch();
    }
    else if (searchMethod === 2){
        arr = lst.preSearch();
    }
    else {
        arr = lst.bfsSearch();
    }
     
    let i = 0
    while (arr.length > i) {
        (console.log(arr[i]))
        i++;
    }
}

//TESTS

const testValue = new binarySearchTree(15);
testValue.insert(3);
testValue.insert(36);
testValue.insert(2);
testValue.insert(12);
testValue.insert(28);
testValue.insert(39);

// printList(testValue, 1);
// console.log("=================")
// printList(testValue, 2);
// console.log("=================")
// printList(testValue, 3);
// console.log("=================")
// printList(testValue, 6);
console.log("=================")
console.log(testValue.max());
console.log(testValue.min());

console.log("=================")
console.log(testValue.size());

console.log("=================")
console.log(testValue.contains(12));
console.log(testValue.contains(18));
