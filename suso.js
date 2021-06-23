const recButton = document.getElementById("rectangleButton")
    let recWidth = document.getElementById("rectangleWidth")
    let recHeight = document.getElementById("rectangleHeight")
const squareButton = document.getElementById("squareButton")
    let sideLength = document.getElementById("sideL")
const circleButton = document.getElementById("circleButton")
    let circleRadius = document.getElementById("circleRadius").value;
const triButton = document.getElementById("triangleButton")
    let triHeight = document.getElementById("Isoceles").value
const shapeBtn = document.getElementById("shapeButton")
const widthBtn = document.getElementById("width")
    let width = document.getElementById("widthInput")
const heightBtn = document.getElementById("height")
    let height = document.getElementById("heightInput")
const radiusBtn = document.getElementById("radius")
    let radius = document.getElementById("radiusInput")
const areaBtn = document.getElementById("area")
    let area = document.getElementById("areaInput")
const perimeterBtn = document.getElementById("perimeter")
    let perimeter = document.getElementById("perimeterInput")
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

circleButton.addEventListener("click", function() {
    new Circle();
    console.log(circleRadius)

})

squareButton.addEventListener("click", function(){
new Square();

})
class Shape {
constructor(){
 this.div = document.createElement("div");
 
}

}
class Circle {
constructor(radius){
    // console.log(circleRadius)
//this.radius = radius
this.div = document.createElement("div");
this.className = "Circle";
this.div.style.height = "100px";
this.div.style.width = "100px";
this.div.style.borderRadius = "100%";
this.div.style.backgroundColor = "#" + randomColor
container.append(this.div);
this.div.addEventListener("click", function(){
    describe()
})

}
describe (){
    height = this.div.height
}
}
class Triangle {
constructor(height){
this.div = document.createElement("div");
this.className = "Triangle";

        
}
    
}
class Rectangle {
constructor(width, height){
this.div = document.createElement("div");
this.className = "Rectangle";
    
}

}
class Square {
constructor(sideLength){
this.div = document.createElement("div");
this.className = "Square";

}

}