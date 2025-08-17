//shortest path from one square to another and output the squares the knight will stop along the way
const knightMoves = ([x, y]) => {
  const moves = [
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x + 2, y + 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 2, y - 1],
  ];

  return moves.filter(
    (move) => move[0] <= 7 && move[0] >= 0 && move[1] <= 7 && move[1] >= 0
  );
};

/*
const chessBoard = () => {
  let square = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      square.push([row, col]);
    }
  }
  return square;
};*/

const shortestPath = (src, dest) => {
  let [x, y] = src;
  const visited = new Set([src.toString()]);
  const queue = [[src, 0, src]];

  while (queue.length > 0) {
    const [node, distance, path] = queue.shift();
    [x, y] = node;
    const legalMoves = knightMoves([x, y]);

    if (node[0] === dest[0] && node[1] === dest[1])
      return `Path: ${path} and distance ${distance}`;

    for (let neighbor of legalMoves) {
      if (!visited.has(neighbor.toString())) {
        visited.add(neighbor.toString());
        queue.push([neighbor, distance + 1, path.concat(` -> ${neighbor}`)]);
      }
    }
  }
  return -1;
};

const path = shortestPath([0, 0], [7, 7]);
console.log(path); // Output: [ '0,0' -> '1,2' -> '3,3']
