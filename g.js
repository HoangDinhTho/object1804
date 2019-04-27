class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    /**
     * @param {Person} person1 
     * @param {Person} person2 
     * @returns {string}
     */
    static compare(person1, person2){
        return person1.age > person2.age ? 
        `${person1.name} is older than ${person2.name}` : 
        `${person2.name} is older than ${person1.name}`;
    }
}
const teo = new Person('Teo', 11);
const ti = new Person('Ti', 10);
const r = Person.compare(teo,ti);
console.log(r)


