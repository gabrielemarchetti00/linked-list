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
        else if(this.tail == null){
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
        else if(this.head == null){
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

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index){

    }

    pop(){

    }

    contains(value){

    }

    find(value){

    }

    toString(){

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
list.append(7);
// 4 5 6 7

console.log(list.head);
console.log(list.tail);