const {readFileSync, writeFileSync} = require('fs')
//Reads Content from file
console.log("Start")
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
//Prints Content of both files
console.log(first)
console.log(second)

writeFileSync(
    './content/writeFileSync.txt',
    `The result of writeFileSync: \n${first} \n${second}`,
    {flag:'a'} //used to append to the file instead of writing it new
)
console.log("Done With Task")
console.log('Written File to writeFile.txt')
console.log("Starting Next task")