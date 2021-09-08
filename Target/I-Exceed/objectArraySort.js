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
    }]

    arr1Data.sort((a,b)=>
    {
        let new_a=a.firstname.toLocaleLowerCase(),
        new_b=b.firstname.toLocaleLowerCase();
        if(new_a<new_b)
        {
            return -1;
        }
        else if(new_a>new_b)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    });

    console.log(arr1Data);