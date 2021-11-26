var userList=    [{
    "firstname": "Aman",
    "lastname": "Singh",
    "age": "26"},
    {"firstname": "Shailesh",
    "lastname": "Ray",
    "age": "32" },
    {
    "firstname": "Amar",
    "lastname": "Pandey",
    "age": "16"
    }]
    userList.sort((a,b)=>
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

    console.log(userList);