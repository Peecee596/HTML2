class Employee{
    constructor(){
        this.salary=5000
    }
    yearlysalary(){
        console.log(`${this.salary *12}`);
    }
}
class contractemployee extends Employee
{
    constructor()
    {
        super();
        this.contractperiod=2;
    }
    contractsalary(){
        console.log(`${this.salary*12}*${this.contractperiod}`);
        
    }
}
e2=new contractemployee();
e2.yearlysalary();
e2.contractsalary();

