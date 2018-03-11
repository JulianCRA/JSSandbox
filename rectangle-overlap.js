let rect1 = {initial:{x:0, y:0}, final:{x:0, y:0}};
let rect2 = {initial:{x:0, y:0}, final:{x:0, y:0}};
let rectOverlap = {initial:{x:0, y:0}, final:{x:0, y:0}};

function setup(){
    createCanvas(600, 600);

    // Randomly generate two points 

    rect1.initial.x = Math.floor(Math.random() * width);
    rect1.initial.y = Math.floor(Math.random() * height);
    rect1.final.x = Math.floor(Math.random() * width);
    rect1.final.y = Math.floor(Math.random() * height);

    // Evaluate an reasign values to make sure the initial point is the top-left

    if(rect1.initial.x > rect1.final.x){
        let xx = rect1.final.x;
        rect1.final.x = rect1.initial.x;
        rect1.initial.x = xx;
    }
    if(rect1.initial.y > rect1.final.y){
        let yy = rect1.final.y;
        rect1.final.y = rect1.initial.y;
        rect1.initial.y = yy;
    }

    // Randomly generate two points 

    rect2.initial.x = Math.floor(Math.random() * width);
    rect2.initial.y = Math.floor(Math.random() * height);
    rect2.final.x = Math.floor(Math.random() * width);
    rect2.final.y = Math.floor(Math.random() * height);

    // Evaluate an reasign values to make sure the initial point is the top-left

    if(rect2.initial.x > rect2.final.x){
        let xx = rect2.final.x;
        rect2.final.x = rect2.initial.x;
        rect2.initial.x = xx;
    }
    if(rect2.initial.y > rect2.final.y){
        let yy = rect2.final.y;
        rect2.final.y = rect2.initial.y;
        rect2.initial.y = yy;
    }

    if(rect1.initial.x > rect2.final.x || rect2.initial.x > rect1.final.x || rect1.initial.y > rect2.final.y || rect2.initial.y > rect1.final.y){
        console.log('NO OVERLAP');
    }else{
        rect1.initial.x > rect2.initial.x ? rectOverlap.initial.x = rect1.initial.x : rectOverlap.initial.x = rect2.initial.x;
        rect1.initial.y > rect2.initial.y ? rectOverlap.initial.y = rect1.initial.y : rectOverlap.initial.y = rect2.initial.y;
        rect1.final.x < rect2.final.x ? rectOverlap.final.x = rect1.final.x : rectOverlap.final.x = rect2.final.x;
        rect1.final.y < rect2.final.y ? rectOverlap.final.y = rect1.final.y : rectOverlap.final.y = rect2.final.y;
    }

    noLoop();
}

function draw(){
    background(0);

    fill(255);
    textSize(32);
    //text("W: "+abs(rect1.final.x - rect1.initial.x)+" H: "+abs(rect1.final.y - rect1.initial.y)+" A: "+abs((rect1.final.x - rect1.initial.x)*(rect1.final.y - rect1.initial.y)), 10, 10, width - 10, 50);
    //text("W: "+abs(rect2.final.x - rect2.initial.x)+" H: "+abs(rect2.final.y - rect2.initial.y)+" A: "+abs((rect2.final.x - rect2.initial.x)*(rect2.final.y - rect2.initial.y)), 10, 60, width - 10, 50);
    text("W: "+abs(rectOverlap.final.x - rectOverlap.initial.x)+" H: "+abs(rectOverlap.final.y - rectOverlap.initial.y)+" A: "+abs((rectOverlap.final.x - rectOverlap.initial.x)*(rectOverlap.final.y - rectOverlap.initial.y)), 10, 10, width - 10, 50);
    
    noStroke();
    fill('rgba(0,255,0, 0.50)');
    rect(rect1.initial.x, rect1.initial.y, rect1.final.x - rect1.initial.x, rect1.final.y - rect1.initial.y);

    fill('rgba(0,0,255, 0.50)');
    rect(rect2.initial.x, rect2.initial.y, rect2.final.x - rect2.initial.x, rect2.final.y - rect2.initial.y);

    fill('rgba(255,255,255, 1)');
    rect(rectOverlap.initial.x, rectOverlap.initial.y, rectOverlap.final.x - rectOverlap.initial.x, rectOverlap.final.y - rectOverlap.initial.y);

    fill("red");
    ellipse(rect1.initial.x, rect1.initial.y, 10, 10);
    ellipse(rect2.initial.x, rect2.initial.y, 10, 10);

    fill("yellow");
    ellipse(rect1.final.x, rect1.final.y, 10, 10);
    ellipse(rect2.final.x, rect2.final.y, 10, 10);

}
