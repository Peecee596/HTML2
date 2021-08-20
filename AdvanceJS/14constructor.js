class car{
    constructor()
    {
        this.carname='Ford';
        this.price=400000;
        this.color='white';
    }

    getcarname()
    {
        console.log(`I bought a ${this.color} color ${this.carname} car worth Rs.${this.price}`);
    }
}
c1=new car();
c1.getcarname();