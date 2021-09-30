let getData=new Promise((resolved,rejected)=>
{
    setTimeout(()=>
    {
        resolved(1);
        rejected(1);
    },1000);

}).then((result)=>
{

console.log(result);
  return new Promise((resolved,rejected)=>
  {
      setTimeout(()=>
      {
        resolved(2)
      },3000);
  }).then((result)=>{
    console.log(result);
    return result*3;
}).then((result)=>
{
console.log(result);
}).catch((error)=>console.log(error))
})