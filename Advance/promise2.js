let addPromise=new Promise((resloved,rejected)=>
{
    var a=1+3;
    if(a===2)
    {
        resloved('success')
    }
    else
    {
        rejected('Failed');
    }

}).then((s)=>console.log(s)).
catch((c)=>console.log(c)).
finally(()=>
{
console.log('Working Fine');
})