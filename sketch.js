let back, face, flower, future, legvag, looks, miumiu, recflectImage, self;
let w,h;
let allImages = [];

let bgColor = "rgb(0,0,0)";

let showFinalImages = false;

async function setup() {
  createCanvas(600,800);
  w = width;
  h = height;
  
  back = await loadImage('assets/back.png');
  face = await loadImage('assets/face.png');
  flower = await loadImage('assets/flower.png');
  future = await loadImage('assets/future.png');
  legvag = await loadImage('assets/legvag.png');
  looks = await loadImage('assets/looks.png');
  miumiu = await loadImage('assets/miumiu.png');
  reflectImage = await loadImage('assets/reflect.png');
  self = await loadImage('assets/self.png');
  
    allImages = [back, face, flower, future, legvag, looks, miumiu, reflectImage, self];

  background(bgColor); 
  //noLoop();
}

function draw() {

  if (!showFinalImages) {
 //background(bgColor);
    
      for (let i = 0; i < allImages.length; i++) {
    let img = allImages[i];
      
       for (let j = 0; j < 3; j++) {
      photoCollage(img, 0, 0, w, h);
         
       
   }

    }

  } else {
  //background(bgColor);
 
 image(back,0,0, width, height);
   
   //affirmations
image(miumiu,width*0.19,height*0.53,width*0.35,height*0.35);
    
  //face - cover blank
 image(face,width*0.005,0,width*0.67,height*0.67);
  
    //   //poster
  image(legvag,width*0.47,height*0.18,width*0.65,height*0.65);
    
//   //sunflower
 image(flower,width*0.35,0,width*0.55,height*0.55);
  
//   //looks
 image(looks,width*0.05,height*0.5,width,height);
  
//     //note
  image(future,width*0.018,height*0.31,width,height);
      
//   //girl
image(reflectImage,width*0.05,height*0.17,width*0.65,height*0.85);

 
  }
}

function photoCollage(img, dx = 0, dy = 0, dWidth = width, dHeight = height) {
  let xi = random(0, img.width);
  let yi = random(0, img.height);
  let wi = 0.07 * random(0, img.width);
  let hi = 0.07 * random(0, img.height);

  let x = map(xi, 0, img.width, dx, dx + dWidth) + random(-0.03 * w, 0.03 * w);
  let y = map(yi, 0, img.height, dy, dy + dHeight);

  let sampleW = map(wi, 0, img.width, 0, w);
  let sampleH = map(hi, 0, img.height, 0, h);

  imageMode(CENTER);
  image(img, x, y, sampleW, sampleH, xi, yi, wi, hi);
  imageMode(CORNER); // reset
}

function mouseDragged() {
   totalRandomness = map(mouseX,0,w,0,1); 
}