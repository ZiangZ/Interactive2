let line = document.createElement('p1')

let lineCount = 0 
let typeWaitTime = 100

document.addEventListener('DOMContentLoaded',function(event){


	document.body.appendChild(line)
  // array with texts to type in typewriter
  var dataText = [ ".Suggestions {",
  '<br><br> If you have an open source project, you will have defects,<br> and you will have inappropriate behavior, so you need to <br> plan for this type of behavior. Changing an existing com-<br> munity is really hard, so it is better to get this right <br>from the start. Here are some suggestions.<br> <br> We recommends selecting a code of conduct before you  <br>even select a license. Having a good code of conduct says <br> that you care about the safety of your contributors, and it <br> attracts better contributors, but don’t write your own, <br> copy someone else’s. Don’t forget to put a link to your code <br> of conduct in the IRC topic and the contributing.MD file.<br>  “Need a thick skin” is code for “our community is toxic” <br> and should be avoided.<br> <br> “Releasing code is scary, admitting that you are wrong is <br> scary, and accepting code that you don’t like is scary,” <br> Fenwick said. It is also “easy to be over-controlling,” <br> which is “terrible for contributors.” Fenwick has a rule: <br> “Is it better than it was before? Including technical debt?”<br>  A pretty good solution, for now, should be accepted. <br> This rule makes people feel appreciated, which has <br> resulted in more contributors.'];
  
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