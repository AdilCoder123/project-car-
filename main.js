canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car_1width=120;
car_1heiight=70;
car_1x=10;
car_1y=10;

car_2width=120;
car_2heiight=70;
car_2x=10;
car_2y=100;
background_image="racing.jpg";
car1image="car1.png";
car2image="car1.png";



function Add()
{
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;


    car1imgTag= new Image();
    car1imgTag.onload = uploadcar1;
car1imgTag.src=car1image;

car2imgTag= new Image();
    car2imgTag.onload = uploadcar2;
car2imgTag.src=car2image;
}


function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}



function uploadcar1()
{
    ctx.drawImage(car1imgTag,car_1x,car_1y,car_1width,car_1heiight);
}

function uploadcar2()
{
    ctx.drawImage(car2imgTag,car_2x,car_2y,car_2width,car_2heiight);
}



window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
{
    up();
    console.log("up");
}
if(keypressed=='40')
{
    down();
    console.log("down");
}
if(keypressed=='37')
{
    left();
    console.log("up");
}
if(keypressed=='39')
{
    right();
    console.log("right");
}


if(keypressed=='87')
{
    w();
    console.log("w");
}
if(keypressed=='65')
{
    a();
    console.log("a");
}
if(keypressed=='83')
{
    s();
    console.log("s");
}
if(keypressed=='68')
{
    d();
    console.log("d");
}
}



function w()
{
    if(car_2y>=0)
    {
        car_2y=car_2y-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function s()
{
    if(car_2y<=500)
    {
        car_2y=car_2y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function a()
{
    if(car_2x>=0)
    {
        car_2x=car_2x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function d()
{
    if(car_2x<=700)
    {
        car_2x=car_2x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function up()
{
    if(car_1y>=0)
    {
        car_1y=car_1y-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function down()
{
    if(car_1y<=500)
    {
        car_1y=car_1y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function left()
{
    if(car_1x>=0)
    {
        car_1x=car_1x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function right()
{
    if(car_1x<=700)
    {
        car_1x=car_1x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}



if (car_1x > 700)
    {
        console.log("car1");
document.getElementById("gamestatus").innerHTML="car1YOU";


    }


    if (car_2x > 700)
    {
        console.log("Car 2");
document.getElementById("gamestatus").innerHTML="car2YOUWON";


    }