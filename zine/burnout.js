let line = document.createElement('p1')

let lineCount = 0 
let typeWaitTime = 100

document.addEventListener('DOMContentLoaded',function(event){


	document.body.appendChild(line)
  // array with texts to type in typewriter
  var dataText = [ ".Burn Out {",
  '<br>"It is not about cash, or even about code. <br>It is about treating maintainers like human beings."<br><br>The main issue arises when a module or library that <br> we depend on gets compromised, automatically the <br>vulnerability propagates to our software project. <br>It’s fair to notice that this propagation does not mean <br>that we are thus affected by a potential attack but it <br>remains a risk that we need to evaluate, control and <br>mitigate and that it requires knowledge inside the <br>organization that uses those affected software components.<br><br>Many third-party components are open source and its <br>maintenance relies on a given community that can vary <br>in sizes. In many cases the weight of the maintenance falls <br>in the shoulders of one or two main contributors that keep <br>the project up-to-date and make incremental improvements. <br><br>Here is where the burnout concept kicks in. Maintaining a <br>popular library or module requires a ton of work from reviewing<br> contributions, handling communication and analyzing the <br>roadmap of the project to keep it moving forward in the right <br>direction, but returns are often not at sight. When the<br> maintainer sees that the library is widely used its maintenance <br>it is not proportionally shared by the community, burnout <br>increases and we head into a fertile field for an attacker <br>to step in and offer help and gain the permissions <br>needed to perform its attack.'];
  
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