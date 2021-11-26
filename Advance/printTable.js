
const ps=require('prompt-sync');
const propmt=ps({sigint:true});
let start=propmt('Enter the start number: '),
end=propmt('Enter the end table range: ');
for(let n=start;n<=end;n++)
{
    if(n==3)
    {
        continue;
    }
    else
    {
        console.log(n);
    }
   
}
