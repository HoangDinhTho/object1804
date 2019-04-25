class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getDistance(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
const A = new Point(3,4);
console.log(A.getDistance());
