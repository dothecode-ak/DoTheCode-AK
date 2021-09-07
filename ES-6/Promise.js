const newPromise=new Promise((resolve,reject)=>
{
    var status=1;
    if(status==1)
    {
        resolve('yes');
    }
    else
    {
        reject('no');
    }}).then((get)=>{
        console.log(get);
    }).catch((err)=>
    {
    console.log(err)
    }).finally(()=>
    {
        console.log('Finall Statement Accessed')
    })