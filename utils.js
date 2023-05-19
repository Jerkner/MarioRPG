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

 function peach1() {
   var id = null;
   var elem = document.getElementById("peach1");   
   var pos = 100;
   clearInterval(id);
   id = setInterval(frame, 60);
   function frame() {
       if (pos == 68) {
         clearInterval(id);
   } else {
      pos--; 
      elem.style.bottom = -2.75 + '%'; 
      elem.style.left = pos + '%'; 
   }
  }
  document.getElementById("peach1").hidden = false
}

function peach2() {
   var id = null;
   var elem = document.getElementById("peach2");   
   var pos = 100;
   clearInterval(id);
   id = setInterval(frame, 60);
   function frame() {
       if (pos == 68) {
         clearInterval(id);
   } else {
      pos--; 
      elem.style.bottom = 19.5 + '%'; 
      elem.style.left = pos + '%'; 
   }
  }
  document.getElementById("peach2").hidden = false
}

function peachAnimation() {
   const mediaQuery = window.matchMedia("(min-width: 1366px)");
   if (mediaQuery.matches) {
     // Screen width is at least 1366px
   peach2()
      } else {
     // Screen width is less than 1366px
   peach1()   }
 };

 export {getDiceRollArray, getDicePlaceholderHtml, getPercentage, peachAnimation}