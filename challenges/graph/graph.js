class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        // adjacency list (3rd method) : quick search, space effecient.
       /*
        vertex with neighbours 
        0 => [2]
        2 => [3,4]
        5 => []
        */
       this._adjacencyList = new Map();
    }


    addVertex(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log("Vertex not found !!!")
        } else {
            // to cover the undirected
            //1->2 
            //2->1
            // get neighbours 
            const adjacencies = this._adjacencyList.get(startVertex);
            // add vertex and weight
            adjacencies.push(new Edge(endVertex, weight));
        }

    }

    GetNodes()
    {
        let nodeList = [];
       // console.log(this._adjacencyList.entries().vertex)
         for (const [vertex] of this._adjacencyList.entries()) {
          // console.log(vertex)
         nodeList.push(vertex);
    }   
    return nodeList;

    }

    GetNeighbours(vertex) {
        if (!this._adjacencyList.has(vertex) ) {
            console.log("vertex does not exist")
        } else {
            return this._adjacencyList.get(vertex);
        }
    }

    PrintAll() {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            console.log("V ====> ", vertex);
            console.log("E ====> ", edge);
        }
    }
    
    Size()
    {
        let nodesNumber = 0;
    for (const [vertex] of this._adjacencyList.values()) {
      nodesNumber++;
    }   
      
    return nodesNumber;
    }

}

module.exports = {
    Vertex,
    Graph,
    Edge,
  };