function preload() { }

function setup() {
    canvas = createCanvas(1000, 500);
    canvas.position(200, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill(25, 47, 239); stroke(25, 47, 239); circle(70, 70, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(70, 150, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(70, 230, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(70, 310, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(70, 390, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(70, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(150, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(230, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(310, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(390, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(470, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(550, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(630, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(710, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(790, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(870, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(950, 470, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(950, 70, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(950, 150, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(950, 230, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(950, 310, 70);
    fill(25, 47, 239); stroke(25, 47, 239); circle(950, 390, 70);
    image(video, 200, 0, 600, 400);
}

function take_snapshot() {
    save("image.png");
}