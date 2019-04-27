const { Point } = require('./c');
const Line = require('./d');

class Triangle{
    constructor(pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    getChuvi(){
        const AB = new Line(this.pointA, this.pointB);
        const BC = new Line(this.pointB, this.pointC);
        const AC = new Line(this.pointA, this.pointC);
        return AB.getLength() + BC.getLength() + AC.getLength();
    }
    get chuvi(){ 
        return this.getChuvi();
    }
    /**
     * @param { Point } point
     */
    set toadoA(point){
        this.pointA.x = point.x;
        this.pointA.y = point.y;
        // this.pointA = point
    }
}
const A = new Point(0,0);
const B = new Point(0,3);
const C = new Point(1,0);
const tamgiac = new Triangle(A,B,C);
// console.log(tamgiac.chuvi); // chuvi: prop
// console.log(tamgiac.getChuvi());
console.log(tamgiac.pointA);

// const AA = new Point(1,4);
// tamgiac.toadoA = AA;
tamgiac.toadoA = { x:1, y:5 };
console.log(tamgiac.pointA);
