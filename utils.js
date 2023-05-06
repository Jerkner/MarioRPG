function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() 
    {
       return Math.floor(Math.random()*6)+1
    })
 }

 function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return `<div class="placeholder-dice"></div>`
    }
    ).join('')
 }

 const getPercentage = (remainingHealth, maximumHealth) => ((remainingHealth / maximumHealth) * 100)

 function myMove() {
   var id = null;
   var elem = document.getElementById("myAnimation");   
   var pos = 100;
   clearInterval(id);
   id = setInterval(frame, 60);
   function frame() {
       if (pos == 68) {
         clearInterval(id);
   } else {
      pos--; 
      elem.style.top = 30 + '%'; 
      elem.style.left = pos + '%'; 
   }
  }
  document.getElementById("myAnimation").hidden = false
}



 export {getDiceRollArray, getDicePlaceholderHtml, getPercentage, myMove}