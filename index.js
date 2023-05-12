import characterData from "./data.js"
import Character from "./character.js"
import { peachAnimation } from "./utils.js";


let monstersArray = ["goomba", "paratroopa", "bowser"];
let isWaiting = false

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : []
}

function attack() {
   const attackSound = new Audio('sounds/smb_fireball.wav')
   if (!isWaiting) {
      mario.getDiceHtml()
      monster.getDiceHtml()
      mario.takeDamage(monster.currentDiceScore)
      monster.takeDamage(mario.currentDiceScore)
      attackSound.play()
   
   render()
   if (mario.isDead) {
      endGame()} 
   
   else if (monster.isDead) {
   isWaiting = true

      if (monstersArray.length === 1) {
         setTimeout(() => {
            const finalSound = new Audio('sounds/smb_warning.wav')
            finalSound.play()
         }, 1500)
      }
      if (monstersArray.length > 0) {
         setTimeout(() => {
         monster = getNewMonster()
         mario.getDiceHtml2()
         render()
         isWaiting = false
   }, 1500);

      } else {
         endGame()
      }
   }
}
}

function endGame() {
   
   const endSound = mario.isDead ? new Audio('sounds/smb_gameover.wav') : new Audio('sounds/smb_stage_clear.wav')
   isWaiting = true
   setTimeout(() => {
   endSound.play()
   const endMessage = monster.isDead === true && mario.isDead === true ?
   "Oh no! You are dead!<br><br>You sacrificed your life for the sake of the Mushroom Kingdom." :
   monster.isDead ? "Mario wins!<br><br>Bowser was defeated!" :
   mario.isDead ? "Oh no! You are dead!" :
   ""
   const endEmoji = mario.isDead ? "☠️" : "🍄"

   document.getElementById("main").innerHTML = 
   `<div class="end-game">
   <h1>Game Over</h1>
   <br>
   <h3>${endMessage}</h3>
   <p class="end-emoji">${endEmoji}</p>
   </div>
   `
   document.getElementById("attack-button").classList.add("hidden")
   }, 1500)
   setTimeout (() => {
   document.getElementById("play-again-button").classList.remove("hidden")
   },6000)

}

function playAgain() {
   location.reload()
}

function render() {
   document.getElementById("hero").innerHTML = mario.getCharacterHtml()
   document.getElementById("monster").innerHTML = monster.getCharacterHtml()
   if (monster.isDead === true && monstersArray.length === 0) {
      setTimeout (() => {
         peachAnimation()
      },1500)
        }
}

document.getElementById("attack-button").addEventListener("click", attack)
document.getElementById("play-again-button").addEventListener("click", playAgain)

let mario = new Character(characterData.hero)
let monster = getNewMonster()

render()