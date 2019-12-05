let startYPos = 50;

window.addEventListener('mousewheel',function(event){
	
	startYPos +=event.deltaY
	if(startYPos > 100){
		startYPos = 100
	}
	if(startYPos < 0){
		startYPos = 0
	}
	document.body.style.perspectiveOrigin = '50vw ' +startYPos+ 'vh'
})