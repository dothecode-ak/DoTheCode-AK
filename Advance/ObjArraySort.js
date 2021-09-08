let objeArry=[
    {
        name:'Anil',
        age:28,
        address:'Bangalore'
    },
    {
        name:'Sunil',
        age:25,
        address:'Ballia'
    },
    {
        name:'Gudiya',
        age:23,
        address:'Mumbai'
    }
]

objeArry.sort((a,b)=>
{
    let new_a=a.name.toLocaleLowerCase(),
    new_b=b.name.toLocaleLowerCase();
if(new_a<new_b)
{
    return -1;
}
else if(new_a>new_b)
{
    return 1
}
else
{
return 0;
}

});


console.log(objeArry);