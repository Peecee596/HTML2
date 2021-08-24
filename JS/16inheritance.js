class Parent{
    constructor()
    {
        this.fname='Poonam';
        this.lname='Chauhan';
        this.age=50;
    }
    displaydetails()
    {
        console.log(`${this.fname}${this.lname}'s age is ${this.age}`);
    }
}
class child extends Parent{
    constructor(){
        super();
        console.log(`Hello India`);
    }
    getageparent()
    {
        console.log(`Parent age is ${this.age}`);
    }
}
c1=new child();
c1.getageparent();
c1.displaydetails();
c2=new Parent();
c2.displaydetails();