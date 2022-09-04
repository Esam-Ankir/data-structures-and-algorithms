const Vertex = require('./vertex');
const Graph = require('./graph');

const myGraph = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
// const seven = new Vertex(5);


myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(zero, zero);

// myGraph.addDirectedEdge(seven, two);



// for (const [k, v] of myGraph.adjacencyList.entries()) {
//   console.log('k = ', k, 'v = ', v);
// }
// console.log(myGraph);

myGraph.breadthFirst(zero);
