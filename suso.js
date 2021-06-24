const recButton = document.getElementById("rectangleButton");
let recWidth = document.getElementById("rectangleWidth");
let recHeight = document.getElementById("rectangleHeight");
const squareButton = document.getElementById("squareButton");
let sideLength = document.getElementById("sideLength");
const circleButton = document.getElementById("circleButton");
let circleRadius = document.getElementById("circleRadius");
const triButton = document.getElementById("isocelesButton");
let triHeight = document.getElementById("Isoceles");
let shapeName = document.getElementById("shapeInput");
let width = document.getElementById("widthInput");
let height = document.getElementById("heightInput");
let radius = document.getElementById("radiusInput");
let area = document.getElementById("areaInput");
let perimeter = document.getElementById("perimeterInput");
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const callRandomColor = "#" + randomColor;
// const randompos = "#" + Math.floor(Math.random() * 599);

circleButton.addEventListener("click", () => {
  new Circle();
});
squareButton.addEventListener("click", () => {
  new Square();
});
triButton.addEventListener("click", () => {
  new Triangle();
});
recButton.addEventListener("click", () => {
  new Rectangle();
});
class Shape {
  constructor(size) {
    this.div = document.createElement("div");
    this.size = size;
  }
}
class Circle extends Shape {
  constructor(size, radius) {
    super(size);
    // console.log(circleRadius)
    this.radius = radius;
    this.div = document.createElement("div");
    this.className = "Circle";
    this.position();
    this.height = (circleRadius.value * 2)
    this.width = (circleRadius.value * 2)
    // this.div.style.position = "relative";
    // this.div.style.top = `${Math.floor(Math.random() * 459)}px`;
    // this.div.style.left = `${Math.floor(Math.random() * 459)}px`;
    this.div.style.height = `${circleRadius.value * 2}px`;
    this.div.style.width = `${circleRadius.value * 2}px`;
    this.div.style.border = "1px solid black";
    this.div.style.borderRadius = `${circleRadius.value}px`;
    this.div.style.backgroundColor = "#" + randomColor;
    container.append(this.div);
    this.div.addEventListener("click", () => {
      this.describe();
      //    console.log(circleRadius.value)
    });
  }
  describe() {
    shapeName.value = "Circle";
    height.value = this.div.style.height;
    width.value = this.div.style.width;
    radius.value = this.div.style.borderRadius;
    area.value = (Math.PI * Math.pow(circleRadius.value, 2));
    perimeter.value = (2 * Math.PI * circleRadius.value);
  }
  position() {
    this.div.style.position = "relative";
    this.div.style.top = `${Math.floor(Math.random() * 350)}px`;
    this.div.style.left = `${Math.floor(Math.random() * 350)}px`;
  }
}
class Triangle extends Shape {
  constructor(size, height) {
    super(size);
    this.height = height;
    this.div = document.createElement("div");
    this.className = "Triangle";
    this.height = triHeight.value
    this.width = triHeight.value
    this.position();
    // this.div.style.backgroundColor = "#" + randomColor
    this.div.style.width = "0px";
    this.div.style.height = "0px";
    this.div.style.borderLeftWidth = `${triHeight.value}px`;
    this.div.style.borderLeftStyle = "solid";
    this.div.style.borderLeftColor = "transparent";
    this.div.style.borderRightWidth = `${triHeight.value}px`;
    this.div.style.borderRightStyle = "solid";
    this.div.style.borderRightColor = "transparent";
    this.div.style.borderBottomWidth = `${triHeight.value * 2}px`;
    this.div.style.borderBottomStyle = "solid";
    this.div.style.borderBottomColor = callRandomColor;
    container.append(this.div);
    this.div.addEventListener("click", () => {
      this.describe();
    });
  }
  describe() {
    shapeName.value = "Isoceles Right Triangle";
    height.value = this.div.style.borderLeftWidth;
    width.value = this.div.style.borderRightWidth;
    radius.value = "N/A";
    area.value = (0.5 * this.height * this.height);
    perimeter.value = (2 * this.height + Math.sqrt(2) * this.height);
}
position() {
    this.div.style.position = "relative";
    this.div.style.top = `${Math.floor(Math.random() * 350)}px`;
    this.div.style.left = `${Math.floor(Math.random() * 350)}px`;
  }
}
class Rectangle extends Shape {
  constructor(size, width, height) {
    super(size);
    this.width = width;
    this.height = height;
    this.width2 = recWidth.value
    this.height2 = recHeight.value
    this.div = document.createElement("div");
    this.position();
    this.className = "Rectangle";
    this.div.style.border = "1px solid black";
    this.div.style.width = `${recWidth.value}px`;
    this.div.style.height = `${recHeight.value}px`
    this.div.style.backgroundColor = "#" + randomColor;
    container.append(this.div);
    this.div.addEventListener("click", () => {
      this.describe();
    });
  }
  describe() {
    shapeName.value = "Rectangle";
    height.value = this.div.style.height;
    width.value = this.div.style.width;
    radius.value = "N/A";
    area.value = (this.width2 * this.height2)
    perimeter.value = 2 * (this.height2 + this.width2)

  }
  position() {
    this.div.style.position = "relative";
    this.div.style.top = `${Math.floor(Math.random() * 350)}px`;
    this.div.style.left = `${Math.floor(Math.random() * 350)}px`;
  }
}
class Square extends Shape {
  constructor(size, lengthOfSide) {
    super(size);
    this.lengthOfSide = lengthOfSide;
    this.div = document.createElement("div");
    this.className = "Square";
    this.width = sideLength.value
    this.height = sideLength.value
    this.position();
    this.div.style.border = "1px solid black";
    this.div.style.height = `${sideLength.value}px`;
    this.div.style.width = `${sideLength.value}px`;
    this.div.style.backgroundColor = "#" + randomColor;
    container.append(this.div);
    this.div.addEventListener("click", () => {
      this.describe();
    });
  }
  describe() {
    shapeName.value = "Square";
    height.value = this.div.style.height;
    width.value = this.div.style.width;
    radius.value = "N/A";
    area.value = Math.pow(this.height, 2);
    perimeter.value = 4 * (Math.pow(this.height, 2));
  }
  position() {
    this.div.style.position = "relative";
    this.div.style.top = `${Math.floor(Math.random() * 350)}px`;
    this.div.style.left = `${Math.floor(Math.random() * 350)}px`;
  }
}
