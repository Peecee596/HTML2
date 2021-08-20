class employee
{
    constructor()
    {
        this.salary=5600;
        this.paidleaves=1.75;
        this.sickleaves=5;
    }
    getannualsal()
    {
        console.log(`Annual sal is ${this.salary*12}`);
    }
    getannualleaves()
    {
        console.log(`Annual Paid Leaves ${this.paidleaves*12+this.sickleaves}`)
    }
}
e1=new employee;
e1.getannualsal();
e1.getannualleaves();