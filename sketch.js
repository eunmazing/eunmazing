//20161249 LEE JEONG EUN

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(200,0,200);
  let rad = width * 1.5;

  orbitControl();

  normalMaterial();
  translate(0, 0, -600);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let x = (j / 12) * PI;
      let y = (i / 12) * PI;
      translate(
        sin(2 * x) * rad * sin(y),
        (cos(y) * rad) / 2,
        cos(2 * x) * rad * sin(y)
      );
      if (j % 2 == 0) {
        cone(400, 400);
      } else {
        box(400, 400, 400);
      }
      pop();
    }
  }
}

//20161249 LEE JEONG EUN