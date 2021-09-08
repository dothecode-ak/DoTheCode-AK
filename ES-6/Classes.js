class Profile
{
    constructor(fname,lname)
    {
        this.fname=fname;
        this.lname=lname;
    }
    getName()
    {
        console.log(`${this.fname} ${this.lname}`);
    }
}

let profileObj=new Profile('Anil','Yadav');
profileObj.getName();