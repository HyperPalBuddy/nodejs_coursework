const os = require('os')

//Info on User
const user = os.userInfo()
console.log(user)
//Prints System Uptime
//console.log(os.uptime())

const currentOS = {
    name: os.hostname(),
    type:os.type(),
    arch:os.arch(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    upTime:os.uptime,

}

console.log(`The name of the system is: ${currentOS.name}`)
console.log(`The type of the system OS is: ${currentOS.type}`)
console.log(`The release of the system OS is: ${currentOS.name}`)
console.log(`The name of the system architecture is: ${currentOS.arch}`)
console.log(`The amount of total memory is: ${currentOS.totalMem} in bytes`)
console.log(`The amount of free memory is: ${currentOS.freeMem} in bytes`)
console.log(`The uptime of the system is: ${currentOS.uptime} in seconds`)

