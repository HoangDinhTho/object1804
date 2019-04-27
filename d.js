// const Point = require('./c').classPoint;
// const A = require('./c').A;

const { Point } = require('./c')

class Line{
    constructor(pointA, pointB){
        this.pointA= pointA;
        this.pointB = pointB;
    }
    getLength(){
        let dx = this.pointA.x - this.pointB.x;
        let dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
module.exports = Line;
// const A = new Point(1,1);
// const B = new Point(3,0);

// const AB = new Line(A,B);
// const BC = new Line(A,B);

// console.log(AB.getLength())