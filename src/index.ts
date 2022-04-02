interface Shape {
    draw(): void;
}
class Point implements Shape {
    static readonly minValue = -100;
    static readonly maxValue = 100;
    static checkValue(value: number) {
        if (value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in range [from ${Point.minValue} to ${Point.maxValue}]`
        }
    }
    constructor(private _x: number, private _y: number){
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y
    }
    set x(value: number) {
        Point.checkValue(value);
        this._x = value;
    }
    set y(value: number) {
        Point.checkValue(value);
        this._y = value;
    }
    draw() {
        console.log('.......Point.......');
        console.log(`Point [x: ${this._x}, y: ${this._y}]`);
        console.log('.'.repeat(20));
    } 
}
class Line extends Point {
    constructor(x: number, y: number, private _point: Point) {
        super(x, y);
    }
    get point() {
        return this._point;
    }
    draw() {
        console.log('-------Line-------');
        super.draw();
        this._point.draw();
        console.log('-'.repeat(20));

    }
}
class Square extends Point {
    constructor(x: number, y: number, private _width: number) {
        super(x, y);
    }
    get width() {
        return this._width;
    }
    draw() {
        console.log('+++++++Square+++++++');
        super.draw();
        console.log(`width: ${this._width}`);
        console.log('+'.repeat(20));
    }
}
class Rectangle extends Square {
    constructor(x: number, y: number, width: number, private _height: number) {
        super(x, y, width);
    }
    get height() {
        return this._height;
    }
    draw() {
        console.log('=======Rectangle=======');
        super.draw();
        console.log(`height: ${this._height}`);
        console.log('='.repeat(20));
    }
}
class Canvas implements Shape {
    constructor(private _shapes: Shape[]) {};
    addShape(shape: Shape): number {
        this._shapes.push(shape);
        return this._shapes.length - 1;
    }
    removeShape(index: number): Shape {
        const array = this._shapes.splice(index, 1);
        return array[0];
    }
    sort(): void {
        this._shapes.sort((a, b) => {
            if (a instanceof Point && b instanceof Point) {
                return a.x - b.x || b.y - a.y
            }
        });
    }
    removeIf(predicate: (shape: Shape) => boolean) {
        this._shapes = this._shapes.filter(predicate);
    }
    draw() {
        this._shapes.forEach(shape => shape.draw());
    }
}
const shapes: Shape[] = [
    new Line(3, 4, new Point(10, 10)),
    new Square(2, 5, 10),
    new Line(20, 30, new Point(3, 4)),
    new Rectangle(10, 15, 20, 5)
]
const canvas = new Canvas(shapes);
console.log();
console.log('//////////////////////////////Draw Shapes//////////////////////////////');
canvas.draw();
console.log();
console.log('//////////////////////////////Add Shape//////////////////////////////');
let addedIndex = canvas.addShape(new Line(20, 35, new Point(30, 25)));
canvas.draw();
console.log(`>>>>>>>>>> Index of the added shape : [${addedIndex}]`);
console.log();
console.log('//////////////////////////////Remove Shape//////////////////////////////');
let removedShape = canvas.removeShape(3);
canvas.draw();
console.log(`>>>>>>>>>> Removed shape : ${removedShape.constructor.name}`);
removedShape.draw();
console.log();
console.log('//////////////////////////////Sort Shapes//////////////////////////////');
canvas.sort();
canvas.draw();
console.log();
console.log('//////////////////////////////Remove IF//////////////////////////////');
canvas.removeIf(shape => 
    shape.constructor.name !== 'Line' || shape instanceof Line && shape.x > shape.point.x);
canvas.draw();