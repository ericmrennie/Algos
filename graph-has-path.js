// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
// The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

const hasPath = (graph, src, dst) => {
    // declare a stack
    const stack = [ src ];
    // iterate through the stack
    while (stack.length > 0) {
        // declare a current
        const current = stack.pop();
        // iterate through the graph at current
        for (let neighbor of graph[current]) {
        // if we hit the dst, then return true  
        if (neighbor === dst) return true;
        }
    }
    // return false
    return false;
};

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph, 'f', 'k')); // true