// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, nodeA, nodeB) => {
    // create the graph list
    const graph = createGraphFunction(edges);
    return mainAlgo(graph, nodeA, nodeB, new Set());
}
    
// graph list function
const createGraphFunction = (edges) => {
    // declare an empty graph object
    const graph = {};

    // cycle through the edges
    for (let edge of edges) {
        // declare an edge constant
        const [ a, b ] = edge;
        // if the graph object at element a within the edge constant, does not exist, create it
        if (!(a in graph)) graph[a] = []; 
        // if the graph object at element b within the edge constant, does not exist, create it
        if (!(b in graph)) graph[b] = []; 
        // push into graph at a, edge at b
        graph[a].push(b);
        // push into graph at b, edge at a
        graph[b].push(a);
    }
    // return graph
    return graph;
}

// main algo (graph, nodeA, nodeB)
const mainAlgo = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
        if (mainAlgo(graph, neighbor, dst, visited) === true) {
        return true
        }
    }
    return false;
}


const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm')); // -> true