const Vertex = require('../challenges/graph/graph').Vertex;
const Graph = require('../challenges/graph/graph').Graph;
const Edge = require('../challenges/graph/graph').Edge;


let graph = new Graph();


const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);
const two = new Vertex(2);
const three = new Vertex(3);

describe('Graph data structure', () => {
  test('Node can be successfully added to the graph ', () => {
    graph.addVertex(six);
    expect(graph._adjacencyList).toBeTruthy();
  });
  test('Node can be successfully added to the graph ', () => {
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(six);
    graph.addVertex(seven);
    graph.addVertex(eight);
    graph.addVertex(ten);
    graph.addDirectedEdge(two, seven);
    graph.addDirectedEdge(three, eight);
    graph.addDirectedEdge(six, seven);
    graph.addDirectedEdge(six, eight);
    graph.addDirectedEdge(ten, two);
    graph.addDirectedEdge(ten, eight);
    graph.addDirectedEdge(eight, seven);
    expect(graph._adjacencyList).toBeTruthy();
    expect(graph.GetNeighbours(six)).toBeTruthy();
    expect(graph.GetNodes()).toBeTruthy();
    expect(graph.Size()).toStrictEqual(6);
  });
 
});

  