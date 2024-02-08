function helpFn(){
    console.log(`
    list of all the commands :
         node main.js tree "directoryPath"
         node main.js organize "directoryPath"
         node main.js help
    `);
}
module.exports={
    helpKEY:helpFn
}