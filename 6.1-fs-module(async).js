const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    //Functionality is written here
    const firstTXT = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
        }
        const secondTXT = result;

        writeFile(
            './content/writeFileAsync.txt',
            `The result of writeFile: \n${firstTXT} \n${secondTXT}`
        ,(err,result)=>{
                if(err){
                    console.log(err)
                }
                console.log(result)//Prints nothing
            })
        console.log(result)//Prints content of second.txt
        })
    console.log(result) //Prints Content of first.txt
    })