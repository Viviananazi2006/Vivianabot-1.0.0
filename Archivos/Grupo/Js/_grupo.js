const fs = require('fs')
const ruta = './Archivos/Grupo/Js/_grupo.js'

const grup = JSON.parse(fs.readFileSync(ruta))

const addGrupo = ( grupo , time ) => {
 const obj = { 
    id : grupo ,
    time : time ? Date.now() + time : Date.now() + 60* 60* 60* 60* 60* 1000
    }
    grup.push(obj)
  fs.writeFileSync(ruta,JSON.stringify(grup , null,2)+'\n')
}

const checkGrupo = (grupo) => {
 return grup.some(i => i.id === grupo )
  }
  
const delGrupo = ( grupo ) => {
  grup.forEach((item , position ) => {
  if(item.id === grupo){
  grup.splice(position , 1)
  fs.writeFileSync(ruta,JSON.stringify(grup , null,2)+'\n')
  };});
  }
  
const expiredGrupo = (grupo) => {
 setInterval(() => {
 const ahora = Date.now()
 grup.forEach((item , position ) => {
  if(ahora => item.time) {
  grup.splice(position , 1)
  fs.writeFileSync(ruta,JSON.stringify(grup , null,2)+'\n')
  }; }); } , 5* 60* 1000)
 }
 
module.exports = {
addGrupo , 
delGrupo , 
checkGrupo , 
expiredGrupo
}
