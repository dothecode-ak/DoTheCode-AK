function isPalindromeData(data)
{
const new_data=data.replace(/\W/g, '').toLowerCase();
const reverse_data=new_data.split('').reverse().join('')
return(new_data==reverse_data)
}
const opto=isPalindromeData('A car, a man, a maraca');
console.log(opto);