let dave = document.querySelector('#dave')
let gary = document.querySelector('#gary')
let joe = document.querySelector('#joe')
let joe2 = document.querySelector('#joe2')
let joe3 = document.querySelector('#joe3')
let joe4 = document.querySelector('#joe4')
let joe5 = document.querySelector('#joe5')
let joe6 = document.querySelector('#joe6')
let joe7 = document.querySelector('#joe7')
let joe8 = document.querySelector('#joe8')
let joe9 = document.querySelector('#joe9')


let items = document.querySelectorAll('.item')

for (let counter = 0; counter < items.length; counter++){

	items[counter].addEventListener('mouseenter',function(){
		dave.play()
		dave.setAttribute('loop',true)
		dave.currentTime = 0
	})
}

let items2 = document.querySelectorAll('.item2')

for (let counter = 0; counter < items2.length; counter++){

	items2[counter].addEventListener('mouseenter',function(){
		gary.play()
		gary.setAttribute('loop',true)
		gary.currentTime = 0
	})
}




let player = document.querySelectorAll('.player')

for (let counter = 0; counter < player.length; counter++){

	player[counter].addEventListener('click',function(){

		if(joe.paused){
			joe.play()
		} else {
			joe.pause()
		}
		joe.setAttribute('loop',true)
    	// joe.preventDefault()
	})
}


let player2 = document.querySelectorAll('.player2')

for (let counter = 0; counter < player2.length; counter++){

	player2[counter].addEventListener('click',function(){

		if(joe2.paused){
			joe2.play()
		} else {
			joe2.pause()
		}
		joe2.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}



let player3 = document.querySelectorAll('.player3')

for (let counter = 0; counter < player3.length; counter++){

	player3[counter].addEventListener('click',function(){

		if(joe3.paused){
			joe3.play()
		} else {
			joe3.pause()
		}
		joe3.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}

let player4 = document.querySelectorAll('.player4')

for (let counter = 0; counter < player4.length; counter++){

	player4[counter].addEventListener('click',function(){

		if(joe4.paused){
			joe4.play()
		} else {
			joe4.pause()
		}
		joe4.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}

let player5 = document.querySelectorAll('.player5')

for (let counter = 0; counter < player5.length; counter++){

	player5[counter].addEventListener('click',function(){

		if(joe5.paused){
			joe5.play()
		} else {
			joe5.pause()
		}
		joe5.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}

let player6 = document.querySelectorAll('.player6')

for (let counter = 0; counter < player6.length; counter++){

	player6[counter].addEventListener('click',function(){

		if(joe6.paused){
			joe6.play()
		} else {
			joe6.pause()
		}
		joe6.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}

let player7 = document.querySelectorAll('.player7')

for (let counter = 0; counter < player7.length; counter++){

	player7[counter].addEventListener('click',function(){

		if(joe7.paused){
			joe7.play()
		} else {
			joe7.pause()
		}
		joe7.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}

let player8 = document.querySelectorAll('.player8')

for (let counter = 0; counter < player8.length; counter++){

	player8[counter].addEventListener('click',function(){

		if(joe8.paused){
			joe8.play()
		} else {
			joe8.pause()
		}
		joe8.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}

let playerall = document.querySelectorAll('.playerall')

for (let counter = 0; counter < playerall.length; counter++){

	playerall[counter].addEventListener('click',function(){

		if(joe9.paused){
			joe9.play()
		} else {
			joe9.pause()
		}
		joe9.setAttribute('loop',true)
		
    	// joe.preventDefault()
	})
}
// setTimeout(function(){
	setInterval(function(){
		gary.play()
	}, 2000)
// },500)

// $("p").hover(function(){
//     $("p").css("background-color","yellow");
// },function(){
//     $("p").css("background-color","pink");
// });




// let element3 = document.querySelector('#element-dave')
// let element4 = document.querySelector('#element-4')
// let element5 = document.querySelector('#element-5')
// let element6 = document.querySelector('#element-6')

// element3.addEventListener('click',function() {
  
//   element3.animate([{
// 			opacity: getComputedStyle(this).opacity,
// 			marginLeft: getComputedStyle(this).marginLeft,
// 			fontSize:  getComputedStyle(this).fontSize,
// 			borderWidth:  getComputedStyle(this).borderWidth
// 		},
//     {
// 			opacity: 0.1,
// 			marginLeft: '-900px',
// 			fontSize: '150px',
// 			borderWidth: '100px',

// 		}], {
//       duration: 800,
//       iterations: 1,
//       fill:'forwards'
//   });

// })
  










  
// element4.addEventListener('click',function(){
//   this.classList.add('gradient-background')
// })

// element5.addEventListener('mouseenter',function(){


// 	element5.animate([
// 	{
// 			opacity: getComputedStyle(element5).opacity,
// 			marginLeft: getComputedStyle(element5).marginLeft,
// 			fontSize:  getComputedStyle(element5).fontSize,
// 			borderWidth:  getComputedStyle(element5).borderWidth,
// 			color:'red',
// 			paddingTop : '0px'
// 		},
//     {
// 			opacity: 0.1,
// 			marginLeft: '-900px',
// 			fontSize: '100px',
// 			borderWidth: '100px',
// 			color:'blue',
// 			paddingTop : '10px'
// 		},
// 		{
// 			opacity: 0.9,
// 			marginLeft: '900px',
// 			fontSize: '100px',
// 			borderWidth: '100px',
// 			color:'blue',
// 			paddingTop : '10px'
// 		}
// 		], {
//       duration: 800,
//       iterations: 1,
//       fill:'forwards',
//   });

// })

//  