class Person{
    set personName(newName){
        this.name = newName
    }
    set personAge(age){
        this.age = age;
    }
    get tuoi(){
        return this.age;
    }
}
const teo = new Person();
teo.personName = 'Teo Nguyen';
teo.personAge = 14;
console.log(teo.tuoi)