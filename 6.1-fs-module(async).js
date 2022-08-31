const {readFile, writeFile} = require('fs')


console.log("Start")
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
        writeFile(
            './content/writeFileAsync.txt',
            `The result of writeFile: \n${firstTXT} \n${result}`
        ,(err,result)=>{
                if(err){
                    console.log(err)
                }
                console.log(result)//Prints nothing
                console.log("Done with the task")
            })
        console.log(result)//Prints content of second.txt
        })
    console.log(result) //Prints Content of first.txt
    })
console.log("Starting next task")