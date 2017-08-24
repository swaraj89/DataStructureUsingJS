/**
 * A Queue (/ˈkjuː/ KYEW) is a particular kind of abstract data type or collection in which the 
 * entities in the collection are kept in order and the principal (or only) operations on the 
 * collection are the addition of entities to the rear terminal position, 
 * known as enqueue, and removal of entities from the front terminal position, known as dequeue.
 */

export default class Queue {
    constructor(){
        this.rear = null;
        this.front = null;
        this.size = 0;
    }

    clear(){
        this.rear = null;
        this.front = null;
        this.size = 0;
    }

    isEmpty(){
        return (this.rear === null);
    }

    getHead(){
        return this.front ? this.front.data : null;
    }

    peekAt(loc = 0 ){
        if(loc < this.size){
            let crnt = this.front;
            for (let index = 0; index < loc; index++) {
                crnt = crnt.next;
            }

            return crnt.data;
        }

        return -1;
    }

    enQueue(data){

        let node = {
            data: data,
            next: null
        };

        if(this.front === null){
            this.front = this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }

        this.size++;
    }

    deQueue(){
        let data = null;

        if(this.front){
            data = this.front.data;

            this.front = this.front.next;

            if(this.front == null){
                this.rear = null;
            }
            this.size--;
        }
    
        return data;
    }

    *[Symbol.iterator](){
        let current = this.front;

        while(current){
            yield current.data;
            current = current.next;
        }
    }

    forEach(iterator) {
        if (typeof iterator !== 'function')
            throw new Error('iterator should be function');

        let current = this.front;
        while (current) {
            if (iterator(current.data)) break;
            current = current.next;
        }
    }

    toArray(){
        if(this.front === null){
            return null;
        }

        let arr = [];
        let current = this.front;

        this.forEach(function(data){
            arr.push(data);
        });

        return arr;
    }

    toString(){
        let arr = this.toArray();

        if(arr){
            return arr.join(",");
        }

        return "";
    }

};