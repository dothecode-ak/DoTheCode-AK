let getData=new Promise((resolved,rejected)=>
{
    setTimeout(()=>
    {
        resolved(10);
    },1000);

}).then((result)=>
{
  console.log(result);
  return result*2;
}).then((result)=>
{
console.log(result);
return result*3;
}).then((result)=>
{
console.log(result);
}).catch((error)=>console.log(error))
