let line = document.createElement('p1')

let lineCount = 0 
let typeWaitTime = 100

document.addEventListener('DOMContentLoaded',function(event){


	document.body.appendChild(line)
  // array with texts to type in typewriter
  var dataText = [ "Hi.<br> This is a zine about Open Source.",
  '<br>&lt;!DOCTYPE html&gt;',
  '&lt;html&gt;',
  '&lt;head&gt;<br>',
  '. Main Menu {',
  'Position: <a href="WTOpensource.HTML">What is Open Source?</a>;',
  'Background: <a href="history.HTML">The History of Open Source?</a>;',
  'Transition: <a href="burnout.HTML">What is Open Source Burn Out?</a>;',
  'Width: <a href="avoid.HTML">How to Avoid Open Source Burn Out?</a> <br><br>}',
  '&lt;/head&gt;',
  '&lt;/html&gt;'];
  
  
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


      typeWaitTime = 10

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