import characterData from "./data.js"
import Character from "./character.js"

let monstersArray = ["goomba", "paratroopa", "bowser"];
let isWaiting = false

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : []
}

function attack() {
   if (!isWaiting) {
      mario.getDiceHtml()
      monster.getDiceHtml()
      mario.takeDamage(monster.currentDiceScore)
      monster.takeDamage(mario.currentDiceScore)
   
   render()
   if (mario.isDead) {
      endGame()

   } else if (monster.isDead) {
      isWaiting = true

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
   isWaiting = true
   setTimeout(() => {
   const endMessage = monster.isDead === true && mario.isDead === true ?
   "Oh no! You are dead!<br><br>You sacrificed your life for the sake of the Mushroom Kingdom." :
   monster.isDead ? "Mario wins!<br><br>Bowser was defeated!" :
   mario.isDead ? "Oh no! You are dead!" :
   ""
   const endEmoji = mario.isDead ? "☠️" : "🍄"

   document.body.innerHTML = 
   `<div class="end-game">
   <h2>Game Over</h2>
   <h3>${endMessage}</h3>
   <p class="end-emoji">${endEmoji}</p>
   </div>` 
   }, 1500);
   setTimeout(() => {
      alert("Click OK to play again!")
      location.reload();}, 3000)
}

function render() {
   document.getElementById("hero").innerHTML = mario.getCharacterHtml()
   document.getElementById("monster").innerHTML = monster.getCharacterHtml()   
}

document.getElementById("attack-button").addEventListener("click", attack)


let mario = new Character(characterData.hero)
let monster = getNewMonster()

render()