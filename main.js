canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_imgs = ["mars.jpg" , "Mars1.jpg" , "Mars2.jpg" , "Mars3.jpg"];
random_number = Math.floor(Math.random() * 4 );

rover_width = 100;
rover_height = 90;
background_image = mars_imgs[random_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
 {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
 }

 function up()
 {
   if (rover_y >= 0)
   {
     rover_y = rover_y - 10;
     console.log("when up arrow is pressed x = " + rover_x + " and y = " + rover_y);
     uploadBackground();
     uploadRover();
   }
 }

 function down()
 {
   if (rover_y <= 500)
   {
     rover_y = rover_y + 10;
     console.log("when down arrow is pressed x = " + rover_x + " and y = " + rover_y);
     uploadBackground();
     uploadRover();
   }
 }

 function left()
 {
   if (rover_x >= 0)
   {
     rover_x = rover_x - 10;
     console.log("when left arrow is pressed x = " + rover_x + " and y = " + rover_y);
     uploadBackground();
     uploadRover();
   }
 }

 function right()
 {
   if (rover_x <= 800)
   {
     rover_x = rover_x + 10;
     console.log("when right arrow is pressed x = " + rover_x + " and y = " + rover_y);
     uploadBackground();
     uploadRover();
   }
 }