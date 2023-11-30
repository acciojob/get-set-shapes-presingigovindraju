class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage:
const rectangle = new Rectangle(5, 8);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 8
console.log(rectangle.getArea()); // Output: 40

const square = new Square(4);
console.log(square.width); // Output: 4
console.log(square.height); // Output: 4
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
