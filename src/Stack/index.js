export default class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    get size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(data) {
        let node = {
            data: data,
            next: null
        };

        node.next = this.top;
        this.top = node;
        this.length++;
    }

    peek() {
        return this.top === null ?
            null : this.top.data;
    }

    pop() {
        if (this.top === null) return null;

        let outelem = this.top;

        this.top = {
            data: outelem.data,
            next: outelem.next
        };

        --this.length;

        return outelem;
    }

    clear() {
        this.top = null;
        this.length = 0;
    }

    toString() {
        let arr = [];
        let current = this.top;

        for (let index = 0; index < this.length; index++) {
            let element = current.data;

            arr[index] = element;
            current = current.next;
        }

        return arr;
    }
};