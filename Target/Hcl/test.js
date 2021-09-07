//duplicate remove in array element
const arr=[1,2,2,3,3,7];
const blankArr=[];
function duplicateArray(data)
{
for(var f=0;f<data.length;f++)
{
    for(var s=f+1;s<data.length;s++)
    {
        if(data[f]==data[s])
        {
blankArr.push(arr[s]);
        }
    }
}
}
duplicateArray(arr);
console.log(blankArr)
