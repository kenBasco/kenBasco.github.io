var canvas = document.querySelector('canvas');

//fit to container makes the canvas as big as the tlgwindow container

fitToContainer(canvas);



function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

//var c is the variable that draws stuff
var ctx = canvas.getContext('2d');






console.log(canvas);
