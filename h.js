/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number} 
 */
function max(a,b,c){
    // if(a>=b){
    //     if(a>=c) return a ;
    //     else return c;
    // }
    // else{ //a<b
    //     if(b>=c) return b; 
    //     else if( b<c) return c;
    // }
    return (a>=b ? a : b) >= c ? (a>=b ? a : b) : c;
}

console.log(max(10,2,5));