import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

class Character {
   constructor(data) {
      Object.assign(this, data)
      this.maxHealth = this.health
      this.diceArray = getDicePlaceholderHtml(this.diceCount)
   }

      getDiceHtml() {
         this.currentDiceScore = getDiceRollArray(this.diceCount)
         this.diceArray = this.currentDiceScore.map( num => `<img class="dice" src="images/${num}.png">`).join('')
      }

      getDiceHtml2() {
         this.diceArray = getDicePlaceholderHtml(this.diceCount)
      }

      takeDamage(attackScoreArray) {
            const totalAttackScore = attackScoreArray.reduce( (total, attackScore) => total + attackScore )     
            this.health -= totalAttackScore
            if (this.health <= 0) {
               this.health = 0
               this.isDead = true
         }
      }

      getHealthBarHtml() {
         const percent = getPercentage(this.health, this.maxHealth)
            return `
            <div class="health-bar-outer">
               <div class="health-bar-inner ${percent <= 20 ? "danger4" : percent <= 40 ? "danger3" : percent <= 60 ? "danger2" : percent <= 80 ? "danger1" : ""}"
               style="width: ${percent}%;">
               </div>
            </div>`
      }

    getCharacterHtml() {
    const {name, avatar, health, diceArray} = this
    const healthBar = this.getHealthBarHtml()
 
    return `
   <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}"/>
      <div class="health">
         Health: <b>${health}</b>
      </div>
      ${healthBar}
      <div class="dice-container">
         ${diceArray}  
      </div>
   </div>  
    `
    }
 }  

export default Character