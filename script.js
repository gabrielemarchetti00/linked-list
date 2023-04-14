class LinkedList {
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
    }

    append(value){
        if(this.head == null && this.tail == null){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
        }

        if(this.tail == null){
            let node = new Node(value);
            this.tail = node;
        }
        else{
            let node = new Node(value);
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(value){
        if(this.head == null && this.tail == null){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
        }
        
        if(this.head == null){
            let node = new Node(value);
            this.head = node;
        }
        else{
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let list = new LinkedList;

list.prepend(5);
list.prepend(4);
list.append(6);

// 4 5 6

console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.tail.value);
console.log(list.head.next.next.value);

/*
let size = list.size();
//console.log(size);

list.prepend(4);
size = list.size();
console.log(size);

list.prepend(5);
size = list.size();
console.log(size);
*/