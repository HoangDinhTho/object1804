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
    compare(person){
        return this.age > person.age ? 
        `${this.name} is older than ${person.name}` : 
        `${person.name} is older than ${this.name}`;
    }
}
const teo = new Person();
teo.personName = 'Teo Nguyen';
teo.personAge = 11;
// console.log(teo.tuoi)
const ti = new Person();
ti.personName = 'Ti Nguyen';
ti.personAge = 10;

const r = teo.compare(ti)
console.log(r)
