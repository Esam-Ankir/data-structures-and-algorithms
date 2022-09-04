'use strict';

const Graph = require('../graph');
const Vertex = require('../vertex');

let test = new Graph();

let one = new Vertex('one');
let two = new Vertex('two');
let three = new Vertex('three');
let four = new Vertex('four');
let five = new Vertex('five');
let six = new Vertex('six');

let hundred = new Vertex('hundred');

test.addVertex(one);
test.addVertex(two);
test.addVertex(three);
test.addVertex(four);
test.addVertex(five);
test.addVertex(six);

test.addDirectedEdge(one, three);
test.addDirectedEdge(two, four);
test.addDirectedEdge(one, four);
test.addDirectedEdge(four, two);
test.addDirectedEdge(four, five);
test.addDirectedEdge(two, six);

let test2 = new Graph();

describe('Testing breadthFirst method of the Graph', () => {
  it('Test1: Should return values of nodes in a breadth-first order when using breadthFirst()', () => {
    const result = test.breadthFirst(one);
    const result2 = test.breadthFirst(six);

    expect(result).toEqual(['one', 'three', 'four', 'two', 'five', 'six']);
    expect(result2).toEqual(['six']);
  });

  it('Test2: Should return null when there are no nodes in the graph using breadthFirst()', () => {
    const result = test2.breadthFirst(one);

    expect(result).toEqual(null);
  });

  it('Test3: Should return null when there is node supplied that is not in the graph using breadthFirst()', () => {
    const result = test.breadthFirst(hundred);

    expect(result).toEqual(null);
  });
});
