let ant;
let grid;
const cols = 11;
const rows = 11;
let scl;

function setup() { 
  createCanvas(400, 400);
  frameRate(3);
  
  scl = width / cols;
  
  grid = [];
  for (let i = 0; i < cols; i++) {
    grid.push([]);
    for (let j = 0; j < rows; j++) {
      grid[i].push(0);
    }
  }
  
	ant = new Ant(floor(cols/2), floor(rows/2));
} 

function draw() { 
  background(255);
  
  const x = ant.position.x;
  const y = ant.position.y;
  
  if (y < 0 || x > cols-1 || y > rows-1 || x < 0) {
    ant.reset();
    grid = [];
  	for (let i = 0; i < cols; i++) {
    	grid.push([]);
    	for (let j = 0; j < rows; j++) {
      	grid[i].push(0);
    	}
  	}
  }
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] > 0) {
        fill(0);
      } else {
        fill(255);
      }
      stroke(0);
      rect(i*scl, j*scl, scl-1, scl-1);
    }
  }
  
  fill(255, 0, 0);
  rect(x*scl, y*scl, scl, scl);
  
  if (grid[x][y] > 0) {
    ant.turnLeft();
  } else {
    ant.turnRight();
  }
  
  grid[x][y] = grid[x][y] > 0 ? 0 : 1;
  ant.moveForward();
}