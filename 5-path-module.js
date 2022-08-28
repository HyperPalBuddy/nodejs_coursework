const path = require('path')

//console.log(path)

const filePath = path.join('content','subdir','file.txt')
console.log(`The filepath of test file is: ${filePath}`)

const base = path.basename(filePath)
console.log(`The basename of the test file is: ${base}`)

const absPath = path.resolve(filePath)
console.log(`The absoulte path of the test file is: ${absPath}`)