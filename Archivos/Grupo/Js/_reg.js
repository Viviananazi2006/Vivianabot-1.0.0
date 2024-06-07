const fs = require('fs')

const ruta = './Archivos/Grupo/Json/_reg.json'
const Reg = JSON.parse(fs.readFileSync(ruta))

const addReg = (num , name ) => {
    const obj = {
     id : num,
     name : name,
     coins : 0,
     vip : false,
     }
Reg.push(obj)
fs.writeFileSync(ruta,JSON.stringify(Reg , null,2)+'\n')
}

const checkReg = (num) => {
return Reg.some(i => i.id === num)
  }

const coins = (num) => {
const coin = Reg.find(i => i.id === num)
 return coin ? coin.coins : false
  }
  
const addCoin = (num , cant) => {
 Reg.forEach((numm , position) => {
 if(numm.id === num){
 Reg[position].coins += cant
 fs.writeFileSync(ruta,JSON.stringify(Reg , null,2)+'\n')
 };})
  }  
  
const delCoin = (num , cant) => {
 Reg.forEach((numm , position) => {
 if(numm.id === num){
 Reg[position].coins -= cant
 fs.writeFileSync(ruta,JSON.stringify(Reg , null,2)+'\n')
 };})
  }  
  
      
const vip = (num) => {
return Reg.some(i => i.id === num && i.vip === true)
}

const addVip = (num) => {
 Reg.forEach((numm , position) => {
 if(numm.id === num){
 Reg[position].vip = true
 fs.writeFileSync(ruta,JSON.stringify(Reg , null,2)+'\n')
 };})
  }
  
const delVip = (num) => {
 Reg.forEach((numm , position) => {
 if(numm.id === num){
 Reg[position].vip = false
 fs.writeFileSync(ruta,JSON.stringify(Reg , null,2)+'\n')
 };})
  }

module.exports = {
addReg , checkReg ,
coins , addCoin , delCoin ,
vip , addVip , delVip
}

