let line = document.createElement('p1')

let lineCount = 0 
let typeWaitTime = 100

document.addEventListener('DOMContentLoaded',function(event){


	document.body.appendChild(line)
  // array with texts to type in typewriter
  var dataText = [ ".History {",
  '<br> In the 1950s and 1960s, computer operating software <br> and compilers were delivered as a part of hardware <br> purchases without separate fees. At the time, <br> source code, the human-readable form of software, <br> was generally distributed with the software providing <br> the ability to fix bugs or add new functions.<br> <br>  Universities were early adopters of computing technology. <br> Many of the modifications developed by universities were <br> openly shared, in keeping with the academic principles <br> of sharing knowledge, and organizations sprung up to <br> facilitate sharing. As large-scale operating systems matured, <br> fewer organizations allowed modifications to the operating <br> software, and eventually such operating systems were closed <br> to modification. However, utilities and other added-function <br>applications  are still shared and new organizations have been <br> formed to promote the sharing of software.'];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     line.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, typeWaitTime);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation



     typeWriter(dataText[i], 0, function(){

           lineCount ++
      console.log(lineCount)


      typeWaitTime = 1

     	line = document.createElement('p')
     	document.body.appendChild(line)
       // after callback (and whole text has been animated), start next text
       // if(i == 1){
       	// window.location.href="home.html"
       // }
       if(lineCount != dataText.length){
         StartTextAnimation(i + 1);
       }
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});