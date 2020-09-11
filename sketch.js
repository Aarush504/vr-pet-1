var dog, happydog, ndog;
var food, foodstock;
var database;
function preload()
{
  //load images here
  
}

function setup() {
  createCanvas(800, 700);
  food=database.ref('food');
  foodstock.on("value",readStock);
  dog= createSprite(200,350,100,100);
  dog= loadImage("images/dog.png");
}


function draw() {  
  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage("images/happydog.png");
}
dog.display();
  drawSprites();
  //add styles here
text("Press up arrow to feed", 50,100);
}
function readStock(data){
  food=data.val();

}
function writeStock(x){
  database.ref('/').update({food:x})
}



