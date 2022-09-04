'use strict';
const Edge = require('./edge');
// const Queue = require('./Queue');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }
    else {
      const adjacentVertex = this.adjacencyList.get(start);
      adjacentVertex.push(new Edge(end, weight));

      // let edge = new Edge(end, weight);
      // adjacentVertex.push(edge);
    }
  }

  size() {
    return this.adjacencyList.size;
  }
  getChildren(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error(`No children found for ${vertex}`);
    }
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {
    if (!this.adjacencyList.has(vertex) || !this.size()) {
      return null;
    }

    const breadth = [];
    // const breadth = new Queue();

    const visited = new Set();
    const nodes = [];

    breadth.unshift(vertex);
    // breadth.enqueue(vertex);

    visited.add(vertex);
    nodes.push(vertex.value);

    while (breadth.length) {
      const front = breadth.pop();
      // const front = breadth.dequeue();

      const Children = this.getChildren(front);

      for (let child of Children) {
        const childVertex = child.vertex;

        if (visited.has(childVertex)) {
          continue;
        } else {
          visited.add(childVertex);
          nodes.push(childVertex.value);
          breadth.unshift(childVertex);
          // breadth.dequeue(childVertex);
        }
      }
    }
    console.log(nodes);
    return nodes;
  }

}
module.exports = Graph;




