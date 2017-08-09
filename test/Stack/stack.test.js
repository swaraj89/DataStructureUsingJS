import chai from 'chai';
import Stack from '../../src/Stack/index';

const assert = chai.assert;
let stack = null;

describe('Stack', function() {

    before(function() {
        stack = new Stack();
    });

    it('should be able to create a stack object.', function() {
        assert.instanceOf(stack, Stack, "stack has been instantiated.")
    });

    it('should have 2 properties. top and length', function() {
        assert.property(stack, 'top');
        assert.property(stack, 'length');
    });

    it('should say if stack is empty', function() {
        assert.isTrue(stack.isEmpty(), "stack has no data");
    });

    it('should be able to push', function() {
        stack.push(1);
        assert.equal(stack.top.data, 1, "1 should be at top");
        assert.equal(stack.top.next, null, "1 should be at top");
        assert.equal(stack.length, 1, "length should be 1");

        stack.push(2);
        assert.equal(stack.top.data, 2, "2 should be at top");
        assert.equal(stack.top.next.data, 1, "2 should be at top");
        assert.equal(stack.length, 2, "length should be 2");
    });

    it('should be able to peek', function() {
        assert.equal(stack.peek(), 2, "2 should be at top.");
    });

    it('should say determine if it is empty', function() {
        assert.isFalse(stack.isEmpty(), "stack has some data");
    });

    it('should be able to pop', function() {
        let popped = stack.pop();

        assert.equal(popped.data, 2, "the top most element has not been removed");
        assert.equal(stack.size, 1, "length of stack has not reduced");
        assert.isFalse(stack.isEmpty(), "stack has some data");
    });

    it('should be able to clear all elements', function() {
        stack.clear();

        assert.isTrue(stack.isEmpty(), "stack should have no elements");
    });

    it('should be able to convert the instance as an array', function() {
        for (var index = 0; index < 5; index++) {
            stack.push(index);
        };

        let stringified = stack.toString();

        assert.equal(stack.length, 5, "5 elements should be available");
        assert.equal(stack.peek(), 4, "top most elements must be last element added");

        assert.isArray(stringified, "stack should be available as a array");
        assert.deepEqual(stringified, [4, 3, 2, 1, 0], "stack should be displayed as array.");
    });

})