import chai from 'chai';
import Queue from '../../src/Queue/index';

const assert = chai.assert;
let queue = null;

describe('Queue', function() {
    before(function() {
        queue = new Queue();
    });

    afterEach(function () {
        queue.clear();
    });

    it('should be able to create a instance of Queue', function() {
        assert.instanceOf(queue, Queue, "Queue has been instantiated.")
    });

    it('should be able to enqueue', function () {
        queue.enQueue(1);

        assert.equal(queue.peekAt(0), 1);
        assert.equal(queue.getHead(), 1);
        assert.equal(queue.size, 1);

    });

    it('should be able to peek at any location', function () {
        queue.enQueue(1);
        assert.equal(queue.peekAt(0), 1);

        queue.enQueue(2);
        assert.equal(queue.peekAt(1), 2);

        assert.equal(queue.peekAt(3), -1);
    });

    it('should be able to get the head', function () {
        queue.enQueue(4);

        assert.equal(queue.getHead(), 4);

    });

    it('should be able to get all the elements by toString() as csv', function () {
        assert.equal(queue.toString(), "");
        
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);
        queue.enQueue(4);
        queue.enQueue(5);

        assert.equal(queue.toString(), "1,2,3,4,5");

    });

    it('should be able to get all the elements by toArray() as an array', function () {
        assert.equal(queue.toArray(), null);
        
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);
        queue.enQueue(4);
        queue.enQueue(5);

        assert.deepEqual(queue.toArray(), [1,2,3,4,5]);
    });

    it('should be able to remove elements using dequeue method', function () {
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);

        assert.equal(queue.size, 3);
        assert.equal(queue.deQueue(), 1);
        assert.equal(queue.size, 2);

        assert.equal(queue.size, 2);
        assert.equal(queue.deQueue(), 2);
        assert.equal(queue.size, 1);
    });
});