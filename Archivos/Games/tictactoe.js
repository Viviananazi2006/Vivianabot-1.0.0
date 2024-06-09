const fs = require('fs')
const { addCoin } = require('../../Grupo/Js/_reg.js')
const ruta = './src/Games/Json/tictactoe.json'
const TTT = JSON.parse(fs.readFileSync(ruta))
const apuesta = 50
            /*
            @ Agregar tictactoe 
            */
const addTTT = async (svn, user1, user2 , from , info) => {
const random = Math.floor(Math.random()* 2)
const sim1 = random === 0 ? '❌' : '⭕'
const sim2 = sim1 === '❌' ? '⭕' : '❌'
const player1 = random === 0 ? user1 : user2
const player2 = player1 === user1 ? user2 : user1

const esperar = async (time) => {
new Promise(resolve => setTimeout(resolve , time))
}

const obj = {
    id : from ,
    turno : 'player1',
    time : Date.now() + 300000,    
    players : {
       player1 : {
          id : player1,
          sim : sim1,
          movs : []
         },
       player2 : {
          id : player2,
          sim : sim2,
          movs : []
         }
         }

}

TTT.game_on.push(obj)
fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n')

esperar(100)

const dsy = `
     ᴘᴀʀᴛɪᴅᴀ ɪɴɪᴄɪᴀᴅᴀ ! ʟᴇᴛs ɢᴏ ¡
   *ᴛᴜʀɴᴏ ᴅᴇ* : @${player1.split('@')[0]} 
          1     2     3
      a ⬜ ⬜ ⬜    
      b ⬜ ⬜ ⬜       
      c ⬜ ⬜ ⬜       
        
 ` 
 
const teks = `
 *╭ ─╺╺─「 ᴘᴀʀᴛɪᴅᴀ ᴄʀᴇᴀᴅᴀ 」─╼╺ ─ ╮*
    ▢ Player 1 : @${player1.split('@')[0]} : ${sim1}
    ▢ Player 2 : @${player2.split('@')[0]} : ${sim2}
    ▢ Fecha : ahorita 
    ▢ Apuesta : 50
    ▢ Digite : #mov + cord
 *╰╶╺╸╺╾ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╼╸╺╸╶ ╯*  
 `

svn.sendMessage(from,{
     text : teks,
      mentions : [player1,player2]}
      ,{quoted : info})

setTimeout( async () => {
svn.sendMessage(from,{
     text : dsy ,
      mentions : [player1,player2]}
      ,{quoted : info})

},500)
}
            /*
            @ Verificar si hau una partida 
            */
const checkTTT = (from) => {
return TTT.game_on.some(i => i.id === from)
}

            /*
            @ Verificar el turno 
            */
            
const checkTurno = (from) => {
const obj = TTT.game_on.find(i => i.id === from)
if(obj){
return obj.turno
} else {
return false 
}
}

             /*
            @ Mover casilla user 1
            */


const movP1 = (sender , cord) =>{
let position = false
TTT.game_on.forEach((game,index) => {
if(game.players.player1.id === sender && game.turno === 'player1') {
position = index
};})
if(position !== false){
const movU1 = TTT.game_on[position].players.player1.movs
const movU2 = TTT.game_on[position].players.player2.movs
if(!movU1.includes(cord) && !movU2.includes(cord)){
movU1.push(cord) 
TTT.game_on[position].turno = 'player2'
fs.writeFileSync(ruta,JSON.stringify(TTT,null,2)+'\n')
} 
};
}

             /*
            @ Mover casilla user 2
            */
            
const movP2 = (sender , cord) => {
let position = false
TTT.game_on.forEach((game , index ) => {
if(game.players.player2.id === sender && game.turno === 'player2'){
position = index
};})
if(position !== false){
const movU1 = TTT.game_on[position].players.player1.movs
const movU2 = TTT.game_on[position].players.player2.movs
if(!movU2.includes(cord) && !movU1.includes(cord)){
movU2.push(cord)
TTT.game_on[position].turno = 'player1'
fs.writeFileSync(ruta,JSON.stringify(TTT,null,2)+'\n')
}
};
}

            /*
            @ Tablero 
            */
            
const tableroTTT = async (svn , from , info , user ) => {

try {
const play = TTT.game_on.find(i => i.id === from)
if(!play) return 
const isTurno = play.turno.includes('player1')

const { player1 , player2 } = play.players

if(!player1 === user || !player2 === user) return 

const num = player1.id
const num2 = player2.id

const tablero = [
['⬜' , '⬜' , '⬜'],
['⬜' , '⬜' , '⬜'],
['⬜' , '⬜' , '⬜']
];

player1.movs.forEach(movimiento => {
 const [ fila , columna ] = movimiento.split('')
 const indexFila = fila.charCodeAt(0) - 97
 const indexColumna = parseInt(columna) - 1
 tablero[indexFila][indexColumna] = player1.sim
})

player2.movs.forEach(movimiento => {
const [ fila , columna ] = movimiento.split('')
tablero[fila.charCodeAt(0) - 97][parseInt(columna) - 1] = player2.sim
})



const Tablero = tablero.map((fila , index) => `${String.fromCharCode(index + 97)}  ${fila.join(' ')}`).join('\n      ')


const Turno = isTurno ? `@${num.split('@')[0]}` : `@${num2.split('@')[0]}`
teks = `
      *ᴍᴏᴠɪᴍɪᴇɴᴛᴏ ᴇxɪᴛᴏsᴏ* 
 ᴛᴜʀɴᴏ ᴅᴇ : ${Turno} 
           𝟭     𝟮     𝟯      
      ${Tablero}`

await svn.sendMessage(from,{text : teks , mentions : [num , num2] },{quoted : info})
} catch (e) {
console.log(e)
}
}


            /*
            @ Verificar Si hay :
            @ Ganador
            @ Empate
            */

const checkWinner = async (svn , from , info) => {

let position = false
TTT.game_on.forEach((item , index) => {
if(item.id === from) {
position = index
};});
if(position !== false){

const delTTT = () => {
TTT.game_on.splice(position , 1)
fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n')
}

/// Add Game_Off 
const addTttOff = (user1 , user2) => {
const Time = 2* 60* 60* 1000
const obj = { id : user1 , time : Date.now() + Time } 
const obj2 = { id : user2 , time : Date.now() + Time }
TTT.game_off.push(obj , obj2)
fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n')
}


const { player1 , player2 } = TTT.game_on[position].players

const esperar = async (time) => {
return new Promise(resolve => setTimeout(resolve,time))
}
const mov1 = player1.movs
const mov2 = player2.movs

const total = mov1.length + mov2.length

const num = player1.id
const num2 = player2.id


    const send = async (texto , user) => {
 svn.sendMessage(from , {
     text : texto,
     mentions : [num,num2] },
     {quoted : info})
        }


const teks1 = ` ғᴇʟɪᴄɪᴅᴀᴅᴇs : @${num.split('@')[0]} : ${player1.sim} 🎉 ɢᴀɴᴀsᴛᴇ ʟᴀ ᴘᴀʀᴛɪᴅᴀ
`
const teks2 = ` ғᴇʟɪᴄɪᴅᴀᴅᴇs : @${num2.split('@')[0]} : ${player2.sim} 🎉 ɢᴀɴᴀsᴛᴇ ʟᴀ ᴘᴀʀᴛɪᴅᴀ
`
const teks3 = ` Empate `

const combinaciones = [
        ['a1', 'a2', 'a3'], // Horizontal superior
        ['b1', 'b2', 'b3'], // Horizontal medio
        ['c1', 'c2', 'c3'], // Horizontal inferior
        ['a1', 'b1', 'c1'], // Vertical derecho
        ['a2', 'b2', 'c2'], // Vertical medio
        ['a3', 'b3', 'c3'], // Vertical izquierdo
        ['a1', 'b2', 'c3'], // Diagonal \
        ['a3', 'b2', 'c1']  // Diagonal /
    ];
    
const checkWiner = (movs) => {
return combinaciones.some(convination => 
convination.every( position => movs.includes(position)))
}

if(checkWiner(mov1)){
send(teks1)
        esperar(300)
addCoin(num , apuesta)
        esperar(300)
addTttOff(num,num2)
        esperar(200)
await delTTT()
} else if(checkWiner(mov2)){
send(teks2)
        esperar(300)
addCoin(num2 , apuesta)
        esperar(300)
addTttOff(num,num2)
        esperar(200)
await delTTT()
} else if(total === 9){
send(teks3)
        esperar(300)
addTttOff(num,num2)
        esperar(200)
 await delTTT()
};
}
}

            /*
            @ Verificar la expiración 
            */
            
const expiredTTT = () => {
setInterval(() => {
const ahora = Date.now()
TTT.game_on.forEach((item , index) => {
if(ahora >= item.time){
TTT.game_on.splice(index , 1)
fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n')
};
})
},1*60*1000)
}

            /*
            @ Eliminar la partida 
            */
            
const delTTT = (user) => {
TTT.game_on.forEach((item , index) => {
if(item.id === user){
TTT.game_on.splice(index , 1)
fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n')
};})
}

            /*
            @ Checar si esta en los que ya jugaron 
            */
            
const checkTTTOff = (user) => {
return TTT.game_off.some(i => i.id === user )
}
            /*
            @  Check Time de Game_off
            */
            
const checkTimeOff = (user) => {
const timee = TTT.game_off.find(i => i.id === user)
if(timee) {
return timee.time
} else {
return false
}
}
  
const checkUserTTT1 = (user) => {
const player = TTT.game_on.find( i => i.id === user)
return player ? player.players.player1.id : false
}      

const checkUserTTT2 = (user) => {
const player = TTT.game_on.find( i => i.id === user)
return player ? player.players.player2.id : false
}      
                /*
            @ Expiracion del Game _ off
            */
            
const expiredTTTOff = () => {
setInterval(() => {
const ahora = Date.now()
TTT.game_off.forEach((item , index) => {
if(ahora >= item.time){
TTT.game_off.splice(index , 1)
fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n')
};
})
},1*60*1000)
}

            /*
           @ Module Exports
            */
module.exports = {
addTTT , 
movP1 , 
movP2,
checkWinner,
tableroTTT,
checkTurno,
checkTTT,
expiredTTT,
delTTT,
checkTTTOff,
checkTimeOff,
expiredTTTOff,
checkUserTTT1,
checkUserTTT2
}