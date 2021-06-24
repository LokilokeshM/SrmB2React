class Animal{
    constructor(name,type)
    {
        this.name=name;
        this.type=type;
    }
    eat()
    {
        console.log("Animal is Eating");
    }
}

class Horse extends Animal{
    constructor(name,type,weight)
    {
        super(name,type);
        this.weight = weight;
    }
    display(){
        console.log("Display all the Details");
    }

}

let h = new Horse()
h.eat();
h.display();