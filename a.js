// let ti = {
//     name : 'Ti',
//     height : 160
// }
// let teo = {
//     name: 'Teo',
//     height : 160
// }

class Person{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    /**
     * @returns {string}
     */
    getName(){
        return this.name;
    }
    /**
     * 
     * @param {string | number} newName 
     * @returns {void}
     */
    setName(newName){
        this.name = newName;
    }
}
const ti = new Person('Ti', 160);
// console.log(ti.setName('Ti Nguyen'));
// console.log(ti.name);
// console.log(ti.getName());
// ti.name = 'Ti Nguyen';
// console.log(ti)


function Product(name, price){
    this.name = name;
    this.price = price;
    function getName(){
        return this.name;
    }
}
// function getName(){
//     return 'My name is KPT';
// }

// console.log(getName)

// const p = new Product('Name ABC', 20000);
// console.log(p);






// if(ti==teo){
//     console.log('Equal')
// }
// else{
//     console.log('Not equal');
// }
// console.log(typeof ti);