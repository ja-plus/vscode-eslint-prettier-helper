let answer = {
    type: process.argv[2] || 'js'
}
try{
    require('../src/installExt.js')(answer)
}catch(err){
    console.error(err)
}