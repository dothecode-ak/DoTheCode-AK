
console.log(x);
console.log(y);

var x;
a();
b();
console.log(a);

function a(){
console.log("Hi");
}
var b = function(){
console.log("Hello");
}

            //output-  x=undefined
            //y= undeclraed variable

            // Hello
            // Hi
            // a = ndeclraed variable


            var a = "hello";
            var arr1 = a.split('').reverse();
            console.log(arr1);
            //[o,l,l,e,h]
            var b = "world";
            var arr2 = b.split('');
            console.log(arr2);
            //[w,o,r,l,d]
            arr1.push(arr2);
            console.log(arr1);
            //[o,l,l,e,h,[w,o,r,l,d]]


            const propmiseName=new Promise((res,rej)=>
            {
                let status=1;
                if(status==1)
                {
               res('resolved');
                }
                else
                {
                    rej('Not promissed the data')
                }
            })
            propmiseName();



        var arr1Data=    [{
                "firstname": "John",
                "lastname": "Doe",
                "age": "26"
                },
                {
                "firstname": "Sarah",
                "lastname": "Maning",
                "age": "32"
                },
                {
                "firstname": "Peter",
                "lastname": "Parker",
                "age": "16"
                }
                ]

var blankArr=[];
const obj={a:10};
obj.a = 20;
console.log(obj.a);
//20 


console.log("hello");
//hello
//5 will be five times

// next
var arr1=[0,1,2,3,4,5]
arr1.forEach(i => {
    setTimeout(function(){
        console.log(i);
        },1000);
}); 