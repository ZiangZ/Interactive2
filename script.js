
let element3 = document.querySelector('#element-dave')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')

element3.addEventListener('click',function() {
  
  element3.animate([{
			opacity: getComputedStyle(this).opacity,
			marginLeft: getComputedStyle(this).marginLeft,
			fontSize:  getComputedStyle(this).fontSize,
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {
			opacity: 0.1,
			marginLeft: '-900px',
			fontSize: '150px',
			borderWidth: '100px',

		}], {
      duration: 800,
      iterations: 1,
      fill:'forwards'
  });

})
  


  
element4.addEventListener('click',function(){
  this.classList.add('gradient-background')
})

element5.addEventListener('mouseenter',function(){


	element5.animate([
	{
			opacity: getComputedStyle(element5).opacity,
			marginLeft: getComputedStyle(element5).marginLeft,
			fontSize:  getComputedStyle(element5).fontSize,
			borderWidth:  getComputedStyle(element5).borderWidth,
			color:'red',
			paddingTop : '0px'
		},
    {
			opacity: 0.1,
			marginLeft: '-900px',
			fontSize: '100px',
			borderWidth: '100px',
			color:'blue',
			paddingTop : '10px'
		},
		{
			opacity: 0.9,
			marginLeft: '900px',
			fontSize: '100px',
			borderWidth: '100px',
			color:'blue',
			paddingTop : '10px'
		}
		], {
      duration: 800,
      iterations: 1,
      fill:'forwards',
  });

})

 