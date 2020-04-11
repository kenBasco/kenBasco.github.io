var canvas = document.querySelector('canvas');

//fit to container makes the canvas as big as the tlgwindow container

fitToContainer(canvas);



function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='70%';
  canvas.style.height='70%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

//var c is the variable that draws stuff
var context = canvas.getContext('2d');



function doSearch(e)
{

  var input = document.getElementById("userInput").value;

  if(input == 'game')
  {
    e.preventDefault();
    playGame();
    return false;
  }
}


function playGame()
{
  //game start

  rectangle = {

    height:32,
    jumping:true,
    width:32,
    x:144, // center of the canvas
    x_velocity:0,
    y:0,
    y_velocity:0

  };

  controller =
  {

    left:false,
    right:false,
    up:false,

    keyListener:function(event)
    {

      var key_state = (event.type == "keydown")?true:false;

      switch(event.keyCode)
      {

        case 37:// left key
          controller.left = key_state;
        break;
        case 38:// up key
          controller.up = key_state;
        break;
        case 39:// right key
          controller.right = key_state;
        break;

      }

    }

  };

  loop = function()
  {

    if (controller.up && rectangle.jumping == false)
    {

      rectangle.y_velocity -= 20;
      rectangle.jumping = true;

    }

    if (controller.left)
    {

      rectangle.x_velocity -= 0.5;

    }

    if (controller.right)
    {

      rectangle.x_velocity += 0.5;

    }

    rectangle.y_velocity += 1.5;// gravity
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9;// friction
    rectangle.y_velocity *= 0.9;// friction

    // if rectangle is falling below floor line
    if (rectangle.y > canvas.height - 33 ) //originally (rectangle.y > 180 - 16 - 32)
    {

      rectangle.jumping = false;
      rectangle.y = canvas.height - 33 ;
      rectangle.y_velocity = 0;

    }

    // if rectangle is going off the left of the screen
    if (rectangle.x < -32) {

      rectangle.x = 320;

    } else if (rectangle.x > canvas.width) {// if rectangle goes past right boundary

      rectangle.x = -32;

    }

    context.fillStyle = "#b1331b";
    context.fillRect(0, 0, canvas.width, canvas.height );// x, y, width, height
    context.fillStyle = "#000000";// hex for red
    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, canvas.height);
    context.lineTo(canvas.width, canvas.height);
    context.stroke();

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

  };


  window.addEventListener("keydown", controller.keyListener)
  window.addEventListener("keyup", controller.keyListener);
  window.requestAnimationFrame(loop);

  //game end




  console.log(canvas);
}
