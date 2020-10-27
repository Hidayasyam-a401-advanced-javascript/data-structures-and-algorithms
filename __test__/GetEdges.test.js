'use strict';

const getEdges = require('../challenges/GetEdges/GetEdges').getEdges;
const Vertex = require('../challenges/GetEdges/GetEdges').Vertex;
const Graph = require('../challenges/GetEdges/GetEdges').Graph;
it('should determine connection', () => {
  const graph = new Graph();

  const Metroville = new Vertex('Metroville');
  const Pandora = new Vertex('Pandora');

  graph.addVertex(Metroville);
  graph.addVertex(Pandora);

  graph.addDirectedEdge(Metroville, Pandora, 82);

  const result = getEdges(graph, [Metroville, Pandora]);

  expect(result.isPossible);
  expect(result.cost).toBe(82);
})

it('should determine connection', () => {
  const graph = new Graph();

  const Arendelle = new Vertex('Arenedelle');
  const Monstropolis = new Vertex('Monstropolis');
  const Naboo = new Vertex('Naboo');



  graph.addVertex(Arendelle);
  graph.addVertex(Monstropolis);
  graph.addVertex(Naboo);

  graph.addDirectedEdge(Arendelle, Monstropolis, 42);
  graph.addDirectedEdge(Monstropolis, Naboo, 73);

  const result = getEdges(graph, [Arendelle, Monstropolis, Naboo]);

  expect(result.isPossible).toBe(true);
  expect(result.cost).toBe(115);
})