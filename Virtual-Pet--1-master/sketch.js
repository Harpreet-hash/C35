//Create variables here

var dog, happyDog, database, foodS, foodStock

function preload(){
   dogImg=loadImage("images/dogImg.png")
   dogImg1=loadImage("images/dogImg1.png")
  }
  
function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(200,200,20,20);
  dog.addImage(dogImg);
  dog.scale=0.2

  database=firebase.database();
  var localStock=database.ref('dog/Food');
  localStock.on("value",readStock)

}

function draw() {  

  background(46, 139, 87)

  if(keyWentDown("up")){
    foodS-=1;
    writeStock();
    dog.addImage(dogImg1)
  }
  drawSprites();
  fill(255)
  if(foodS!=undefined){
    text("Food remaining : "+foodS,200,100)

  }
  
  //add styles here

}
function readStock(data) {  

  foodS=data.val();
  

}
function writeStock() {  

  if(foodS<0){
    foodS=0
  }
  
  database.ref('dog').set({
    Food:foodS
  })
  

}

// function keyPressed(){
//   if (keyCode===32){
//     foodS-=1;
//       writeStock();
//       dog.addImage(dogImg1)
//       console.log(foodS)
//   }
// }


