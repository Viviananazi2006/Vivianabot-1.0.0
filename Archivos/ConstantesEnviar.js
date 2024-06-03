function ConstEnviar( vm , from , quoted , info ){
const enviartexto = (texto) => {
 vm.sendMessage(from,{ text : texto }, {quoted : info})
 }
 }
module.exports = {
ConstEnviar,
enviartexto
}