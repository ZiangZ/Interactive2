let line = document.createElement('p1')

let lineCount = 0 
let typeWaitTime = 100

document.addEventListener('DOMContentLoaded',function(event){


	document.body.appendChild(line)
  // array with texts to type in typewriter
  var dataText = [ ".Open Source {",
  '<br><br> Open source code refers to any program whose <br>source code is made available for use or modification <br> as users or other developers see fit. Open source <br> software programmers can actually charge money <br> for the software that they create or help out with. <br><br> One of the main advantages of open source software <br> is the cost. Also, the very concept of having open source <br> code allows for strong communities to emerge out of <br> programmers dedicated to innovating. Nonetheless, <br> the key pros and cons vary depending on the <br> situation of the user.<br><br>Another thing to consider is the fact that open <br> source software relies on a loyal and engaged online <br> user community to deliver support, but this support <br> often fails to deliver the high level of response that <br> many consumers expect and require. These communities <br> must also be found on the web and some would argue <br> there’s no incentive for the community to address a user’s <br> problem. On top of that, another area of high <br> criticism is in its usability.'];
  
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