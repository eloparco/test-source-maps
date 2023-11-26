interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  const sum = p.x + p.y;
  console.log(`${sum}`);
}

const point = { x: 12, y: 26 };
logPoint(point);
