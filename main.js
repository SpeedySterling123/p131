img ="";
function preload(){
    img=loadImage('dog_cat.jpg')
}

function setup() {

    canvas=createCanvas(640, 420);
    canvas.center();
}
function draw() {
    Image(img, 0 , 0 , 640 , 420);
    fill=("FF0000");
    text=("dog",75 ,45 );
    noFill();
    stroke("FF0000");
    Rect(30, 60, 450, 350 )
}