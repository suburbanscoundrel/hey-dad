let lizLicense;
let dadLicense;
let license;
let licenseHover = false;
let lizID = true;
let lx, ly, lw, lh;

let text1 = [];
let text2 = [];
let text3 = [];
let firstText
let secondText
let thirdText;
let textIndex = 0;

let landscape = [];
let highway = [];
let billboards = [];
let night = [];
let restStop = [];
let gasStation = [];
let highwaySigns = [];

let landscapeIndex = 1;
let highwayIndex = 1;
let billboardsIndex = 1;
let nightIndex = 1;
let restStopIndex = 1;
let gasStationIndex = 1;
let highwaySignsIndex = 1;

let panelXs = [];
let panelYs = [];
let panelWs = [];
let panelHs = [];

let panels = [];

let gutter = 10;

// let choices = [1, 2];
let layout = 1;

let fr = 12;

// let angle = 0;
// let loading = true;
// let counter = 0;

// // function imageLoaded(media) {
// //   media1 = media;
// //   loading = false;
// // }

// function roadTripImages(variable, image, filename) {
//   loadImage(filename, imageLoaded);

//   function imageLoaded(image) {
//     console.log(filename);
//     variable = image;

//     counter++

//     if (counter == 2) {
//       loading = false;
//     }
//   }
// }


function preload() {
  lizLicense = loadImage('assets/lizLicense.png');
  dadLicense = loadImage('assets/dadLicense.png');

  for (i = 1; i < 7; i++) {
    text1[i-1] = loadImage('assets/text1/' + nf(i, 1, 0) + '.png')
  }

  for (i = 1; i < 7; i++) {
    text2[i-1] = loadImage('assets/text2/' + nf(i, 1, 0) + '.png')
  }

  for (i = 1; i < 7; i++) {
    text3[i-1] = loadImage('assets/text3/' + nf(i, 1, 0) + '.png')
  }
  
  for (i = 0; i < 22; i++) {
    landscape[i] = loadImage('assets/landscape/' + nf(i, 2, 0) + '.jpg');
  }
  
  for (i = 1; i < 6; i++) {
    billboards[i] = loadImage('assets/billboard/' + nf(i, 1, 0) + '.jpg');
  }

  for (i = 0; i < 22; i++) {
    gasStation[i] = loadImage('assets/gas stations/' + nf(i, 2, 0) + '.jpg');
  }

  for (i = 0; i < 32; i++) {
    highway[i] = loadImage('assets/highway/' + nf(i, 2, 0) + '.jpg');
  }

  for (i = 0; i < 22; i++) {
    restStop[i] = loadImage('assets/rest stops/' + nf(i, 2, 0) + '.jpg');
  }

  for (i = 0; i < 22; i++) {
    highwaySigns[i] = loadImage('assets/highway signs/' + nf(i, 2, 0) + '.jpg');
  }

  for (i = 0; i < 19; i++) {
    night[i] = loadImage('assets/night/' + nf(i, 2, 0) + '.jpg');
  }
}

let text1X;
let text1Y;
let text2X;
let text2Y;
let text3X;
let text3Y;
let textSlipW;
let textSlipH;

function setup() {
  
  // roadTripImages(lizLicense, 'assets/lizLicense.png');
  // roadTripImages(dadLicense, 'assets/dadLicense.png');

  createCanvas(windowHeight*2/3, windowHeight * 11/12);
  let hDivider = height/4;
  let wDivider = width/3;
  let bigPanelHeight = hDivider*2;
  let bigPanelWidth = width;
  let panelWidth = wDivider;
  let panelHeight = hDivider;

  text1X = 20;
  text1Y = height * 1.5/8;
  text2X = width * 3/5;
  text2Y = height * 3.7/8;
  text3X = width * 3/5;
  text3Y = height * 5/8;
  textSlipW = width * 1.1/3;
  textSlipH = textSlipW/2;

  panelXs = [0, wDivider, wDivider*2, 0, 0, wDivider, wDivider*2];
  panelYs = [0, 0, 0, hDivider, hDivider*3, hDivider*3, hDivider*3];
  panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth, panelWidth, panelWidth, panelWidth];
  panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight, panelHeight, panelHeight, panelHeight];

  let licenseX = 175;
  let licenseY = height * 6/8 - 50;
  let licenseW = width * 2/5;
  let licenseH = licenseW * 3/5;
  lx = licenseX;
  ly = licenseY;
  lw = licenseW;
  lh = licenseH;

  image(landscape[landscapeIndex], panelXs[0], panelYs[0], panelWs[0], panelHs[0]);
  image(billboards[billboardsIndex], panelXs[1], panelYs[1], panelWs[1], panelHs[1]);
  image(restStop[restStopIndex], panelXs[2], panelYs[2], panelWs[2], panelHs[2]);
  image(highway[highwayIndex], panelXs[3], panelYs[3], panelWs[3], panelHs[3]);
  image(highwaySigns[highwaySignsIndex], panelXs[4], panelYs[4], panelWs[4], panelHs[4]);
  image(gasStation[gasStationIndex], panelXs[5], panelYs[5], panelWs[5], panelHs[5]);
  image(night[nightIndex], panelXs[6], panelYs[6], panelWs[6], panelHs[6]);


  // if (layout === 1) {

    // let panelXs = [0, wDivider, wDivider*2, 0, 0, wDivider, wDivider*2];
    // let panelYs = [0, 0, 0, hDivider, hDivider*3, hDivider*3, hDivider*3];
    // let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth, panelWidth, panelWidth, panelWidth];
    // let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight, panelHeight, panelHeight, panelHeight];

  //   for (let i = 0; i < 7; i++) {
  //     panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
  //   }
  // }

  // if (layout === 2) {
  //   let bigPanelHeight = hDivider*3;
  //   let bigPanelWidth = wDivider*2;
  //   let panelWidth = wDivider;
  //   let panelHeight = hDivider;

  //   let panelXs = [0, 0, 0, wDivider, 0, wDivider, wDivider*2];
  //   let panelYs = [0, hDivider, hDivider*2, 0, hDivider*3, hDivider*3, hDivider*3];
  //   let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth, panelWidth, panelWidth, panelWidth];
  //   let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight, panelHeight, panelHeight, panelHeight];

  //   for (let i = 0; i < 7; i++) {
  //     panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
  //   }

  //   // if (overlayPresent === true) {
  //   //   overlay = new Panel(panelWidth, panelHeight, random(0, panelWidth*2), random(panelHeight, height));
  //   // }
  // }

  // if (layout === 3) {
  //   let bigPanelHeight = hDivider*3;
  //   let bigPanelWidth = width;
  //   let panelWidth = wDivider;
  //   let panelHeight = hDivider;

  //   let panelXs = [0, 0, wDivider, wDivider*2];
  //   let panelYs = [0, hDivider*3, hDivider*3, hDivider*3];
  //   let panelWs = [bigPanelWidth, panelWidth, panelWidth, panelWidth];
  //   let panelHs = [bigPanelHeight, panelHeight, panelHeight, panelHeight];

  //   for (let i = 0; i < 5; i++) {
  //     panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
  //   }
  // }

  // if (layout === 4) {
  //   let bigPanelHeight = hDivider*3;
  //   let bigPanelWidth = width;
  //   let panelWidth = wDivider;
  //   let panelHeight = hDivider;

  //   let panelXs = [0, wDivider, wDivider*2, 0];
  //   let panelYs = [0, 0, 0, hDivider];
  //   let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth];
  //   let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight];

  //   for (let i = 0; i < 5; i++) {
  //     panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
  //   }
  // }

  frameRate(fr);
}

function draw() {
  // if (loading === true){
  //   push();
  //   rectMode(CENTER);
  //   rotate(angle);
  //   noStroke;
  //   fill(0)
  //   rect(width/2, height/2, 100, 100);
  //   angle++;
  //   pop();
  // }

  // if(loading){
  //   fill(0,200,0);
  //   ellipse(200,200,20,20);
  //   textSize(75);
  //   fill(0);
  //   text('Loading', 15, 300);
  // }
  // let hDivider = height/4;
  // let wDivider = width/3;
  // let bigPanelHeight = hDivider*2;
  // let bigPanelWidth = width;
  // let panelWidth = wDivider;
  // let panelHeight = hDivider;



  // let panelXs = [0, wDivider, wDivider*2, 0, 0, wDivider, wDivider*2];
  // let panelYs = [0, 0, 0, hDivider, hDivider*3, hDivider*3, hDivider*3];
  // let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth, panelWidth, panelWidth, panelWidth];
  // let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight, panelHeight, panelHeight, panelHeight];

  // for (let i = 0; i < panels.length; i++) {
  //   panels[i].drawPanel();
  //   panels[i].display();
  // }

    animate(landscape, landscapeIndex, panelXs[0], panelYs[0], panelWs[0], panelHs[0]);
    landscapeIndex++;
    if (landscapeIndex === landscape.length) {
      landscapeIndex = 1;
    }

    animate(billboards, billboardsIndex, panelXs[1], panelYs[1], panelWs[1], panelHs[1]);
    billboardsIndex++;
    if (billboardsIndex === billboards.length) {
      billboardsIndex = 1;
    }

    animate(restStop, restStopIndex, panelXs[2], panelYs[2], panelWs[2], panelHs[2]);
    restStopIndex++;
    if (restStopIndex === restStop.length) {
      restStopIndex = 1;
    }

    animate(highway, highwayIndex, panelXs[3], panelYs[3], panelWs[3], panelHs[3]);
    highwayIndex++;
    if (highwayIndex === highway.length) {
      highwayIndex = 1;
    }

    animate(highwaySigns, highwaySignsIndex, panelXs[4], panelYs[4], panelWs[4], panelHs[4]);
    highwaySignsIndex++;
    if (highwaySignsIndex === highwaySigns.length) {
      highwaySignsIndex = 1;
    }

    animate(gasStation, gasStationIndex, panelXs[5], panelYs[5], panelWs[5], panelHs[5]);
    gasStationIndex++;
    if (gasStationIndex === gasStation.length) {
      gasStationIndex = 1;
    }

    animate(night, nightIndex, panelXs[6], panelYs[6], panelWs[6], panelHs[6]);
    nightIndex++;
    if (nightIndex === night.length) {
      nightIndex = 1;
    }

    image(text1[textIndex], text1X, text1Y, textSlipW, textSlipH);
    image(text2[textIndex], text2X, text2Y, textSlipW, textSlipH);
    image(text3[textIndex], text3X, text3Y, textSlipW, textSlipH);

    push();
    imageMode(CENTER);

    //mouseX > lx && mouseX < lx + lw && mouseY > ly && mouseY < ly + lh
 

    if (lizID === true) {
      license = lizLicense;
    }
    if (lizID === false) {
      license = dadLicense;
    }
    image(license, lx, ly, lw, lh);
    pop();
  // animate(traffic, trafficIndex, 500, 0, 200, 200);

  // animate(highwaySigns, highwaySignsIndex, 0, 0, 200, 200);

  // animate(billboards, billboardsIndex, 0, 0, 200, 200);

  // animate(billboards, billboardsIndex, 0, 0, 200, 200);

  // animate(billboards, billboardsIndex, 0, 0, 200, 200);



  //image(earlAnim[earlIndex],0,0,earlW, earlW);
  // image(highway[highwayIndex], 0, 0, 200, 200);
  

  // image(billboards[billboardsIndex], 250, 0, 200, 200);
  // billboardsIndex++;
  // if (billboardsIndex === billboards.length) {
  //   billboardsIndex = 1;
  // }

  // image(traffic[trafficIndex], 500, 0, 200, 200);
  // trafficIndex++;
  // if (trafficIndex === traffic.length) {
  //   trafficIndex = 1;
  // }

  // image(highwaySigns[highwaySignsIndex], 0, 300, width, 400);
  // highwaySignsIndex++;
  // if (highwaySignsIndex === highwaySigns.length) {
  //   highwaySignsIndex = 1;
  // }

  // image(cross[crossIndex], 0, 800, 200, 200);
  // crossIndex++;
  // if (crossIndex === cross.length) {
  //   crossIndex = 1;
  // }

  // image(restStop[restStopIndex], 250, 800, 200, 200);
  // restStopIndex++;
  // if (restStopIndex === restStop.length) {
  //   restStopIndex = 1;
  // }

  // image(windmill[windmillIndex], 500, 800, 200, 200);
  // windmillIndex++;
  // if (windmillIndex === windmill.length) {
  //   windmillIndex = 1;
  // }
  // if (textIndex > 1) {
  //   textIndex = 0;
  // }
}

// function animate(imageArray, index, x, y, w, h) {
//   if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
//     image(imageArray[index], x, y, w, h);
//     updateIndex(imageArray, index);
//   } else {
//     image(imageArray[index], x, y, w, h);
//   }
// }

// function updateIndex(array, index) {
//   index++;
//   if (index === array.length) {
//     index = 1
//   }
//   console.log(index);
//   return index;
// }

function mouseClicked() {
  if (mouseX > lx - lw/2 && mouseX < lx + lw/2 && mouseY > ly - lh/2 && mouseY < ly + lh/2) {
      if (lizID === true) {
         lizID = false;
       } else if (lizID === false) {
        lizID = true;
      }
  }
}

function mouseWheel(event) {
  if (event.delta > 0) {
    textIndex++;
    if (textIndex > 5) {
      textIndex = 0;
    }
  } else {
    textIndex = textIndex;
  }

  if (event.delta < 0) {
    textIndex--;
    if (textIndex < 0) {
      textIndex = 5;
    }
  } else {
    textIndex = textIndex;
  }
}

function animate(imageArray, index, x, y, w, h) {
  let x1 = x;
  let x2 = x + w;
  let y1 = y;
  let y2 = y + h;
  
  if (mouseX < x1 && mouseX > x2 && mouseY < y1 && mouseY > y2) {
    image(imageArray[index], x, y, w, h);
  }
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
    image(imageArray[index], x, y, w, h);
    index++;
    if (index === imageArray.length) {
      index = 1
    }
    
    // fill(0);
    // rect(x, y, w, h);
  } 
}

class Panel {
  constructor(w, h, x, y) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;

    this.panel = createGraphics(this.width, this.height);

    this.bgColor = random(100, 200);
  }

  drawPanel() {
    if((this.x < mouseX) && ((this.x + this.width) > mouseX) && (this.y < mouseY)&&((this.y + this.height) > mouseY)){
      this.panel.background(0);
    } else{
      this.panel.background(this.bgColor);
    }
  }

  display() {
    image(this.panel, this.x, this.y);
  }
}