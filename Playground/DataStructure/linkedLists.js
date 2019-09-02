class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }


    //add to the end of the list / tail
    append(value) {

        //if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        }
        else {
            let old = this.tail;
            this.tail = new Node(value);
            old.next = this.tail;
            this.tail.previous = old;
        }

    }

    //adds to the head
    prepand(value) {
        //if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value);
        }
        else {
            let old = this.head;
            this.head = new Node(value);
            old.prev = this.head;
            this.head.next = old;
        }
    }

    deleteHeadEl() {

        //if list is empty
        if (!this.head) {
            return null;
        }
        else {
            let old = this.head;
            //if only 1 item in the list
            if (this.head === this.tail) {
                this.value = this.tail = null;
            }
            else {
                this.head = old.next;
                this.head.prev = null;
            }
            return old.value;
        }

    }

    deleteTailEl() {

        //if list is empty
        if (!this.tail) {
            return null;
        }
        else {
            let old = this.tail;
            //if only 1 item in the list
            if (this.head === this.tail) {
                this.value = this.tail = null;
            }
            else {
                this.tail = old.previous;
                this.tail.next = null;
            }
            return old.value;
        }

    }

    searchEl(value) {
        let count = this.head

        while (count) {
            if (count.value === value) {

                return count;
            }
            count = count.next
        }

        return null;
    }

    removeEl(value) {

        if (!this.tail) {
            return null;
        }

        let count = this.head
        while (count) {

            if (this.head === this.tail === value) {
                this.head = this.tail = null
                return count;
            }

            else {
                if (count.value === value) {
                    let old = count;
                    
                    count.previous.next = old.next;
                    count.next.prev = old.prev;
                    old.prev = old.next = null
                    return old.value;
                }
                count = count.next
            }
        }

        return null;

    }

}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

printList = (lst) => {
    let count = lst.head

    while(count) {
        (console.log(count.value))
        count = count.next;
}
}

//TESTS

let lst = new LinkedList();
lst.append("cat");
lst.append("dog");
lst.append("pig");
lst.append("duck");
lst.append("lion");
lst.append("elephant");
lst.append("bear");
lst.append("fox");
lst.append("wolf");

lst.prepand("horse");
lst.prepand("bat");

printList (lst);

lst.deleteTailEl()
console.log("========================")
printList (lst);


lst.deleteHeadEl()
console.log("========================")
printList (lst);

lst.removeEl("dog")
console.log("========================")
printList (lst);

let cat = lst.searchEl("cat")
console.log("animal: " + cat.value);
console.log(cat.value ? "cats allowed" : "no cats")

cat = lst.searchEl("kitten")
console.log("animal: " + cat);


console.log("========================")
printList (lst);
