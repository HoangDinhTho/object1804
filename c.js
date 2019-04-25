class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getDistance(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
class A{

}
// const A = new Point(3,4);
// console.log(A.getDistance());
// module.exports = {classPoint: Point, A}

module.exports = { Point, A, name:'Teo' }