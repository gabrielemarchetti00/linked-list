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
        let count = 0; 
        let node = this.head;
        while (node) {
            if(index == count){
                return node;
            }
            count++;
            node = node.next
        }
        return 'invalid index';
    }

    pop(){
        let node = this.head;
        while (node.next) {
            if(node.next.next == null){
                this.tail = node;
                node.next = null;
            }
            else{
                node = node.next;
            }
        }
    }

    contains(value){
        let node = this.head;
        while (node) {
            if(value == node.value){
                return true;
            }
            node = node.next
        }
        return false;
    }

    find(value){
        let index = 0; 
        let node = this.head;
        while (node) {
            if(value == node.value){
                return index;
            }
            index++;
            node = node.next
        }
        return null;
    }

    toString(){
        let index = 0;
        let str = '';
        let node = this.head;
        while (node) {
            str = str + '( ' + node.value + ' ) -> ';
            if(node.next == null){
                str = str + 'null';
            }
            node = node.next;
            index++;
        }      
        console.log(str); 
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let list = new LinkedList;


list.prepend(2)
list.prepend(50)
list.append(1)

list.toString();
console.log(list.size());