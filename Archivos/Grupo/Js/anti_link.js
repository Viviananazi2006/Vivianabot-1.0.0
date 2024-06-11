const fs  = require('fs')

const ruta = './Archivos/Grupo/Json/anti_link.json'
const antilink = JSON.parse(fs.readFileSync(ruta))

const addAnti_link = (from , name) => {
 const obj = {
 id : from,
 name : name,
 links : ["https://","http://",".com"]
 }
antilink.push(obj)
fs.writeFileSync(ruta,JSON.stringify(antilink, null,2)+'\n')
}

const checkAnti_link = (from) => {
return antilink.some(i => i.id === from)
}

const delAnti_link = (from) => {
antilink.forEach((item , index ) => {
if(item.id === from ){
antilink.splice(index,1)
fs.writeFileSync(ruta,JSON.stringify(antilink, null,2)+'\n')
};})
}

const addLink = (from , texto) => {
antilink.forEach((i , k) => {
if(i.id === from){
antilink[k].links.push(texto)
fs.writeFileSync(ruta,JSON.stringify(antilink , null,2)+'\n')
};})
}

const links = (from) => {
 const link = antilink.find(i => i.id === from)
 return link ? link.links : []
}


const chechLink = (from , link ) =>{
return antilink.some(i => i.id === from && i.links.includes(link))
}

module.exports = {
addAnti_link,
checkAnti_link,
delAnti_link,
links,
addLink,
chechLink
}