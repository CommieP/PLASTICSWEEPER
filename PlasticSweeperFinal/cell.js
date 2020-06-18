var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;


function preload() {
  img1 = loadImage('images/clean1.png');
  img2 = loadImage('images/clean2.png');
  img3 = loadImage('images/clean3.png');
  img4 = loadImage('images/clean4.png');
  img5 = loadImage('images/clean5.png');
  img6 = loadImage('images/clean6.png');
  img7 = loadImage('images/clean7.png');
  img8 = loadImage('images/dirty1.png');
  img9 = loadImage('images/dirty2.png');
  img10 = loadImage('images/dirty3.png');
  img11 = loadImage('images/dirty4.png');
  img12 = loadImage('images/dirty5.png');
  img13 = loadImage('images/dirty6.png');
  img14 = loadImage('images/dirty7.png');
  img15 = loadImage('images/dirty8.png');
  img16 = loadImage('images/dirty9.png');
  img17 = loadImage('images/dirty10.png');
}


function cell (i, j , w, ){
    this.x = i*w;
    this.y = j*w;
    this.w = w;
    
    this.bee = false;
    this.revealed = false;
    this.imageselect = floor(random(9));
}

cell.prototype.show = function() {
    stroke(200);
    fill('#8bbaea');
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed) {
        if (this.bee) {
            if (this.imageselect == 0) {
                image(img8, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 1) {
                image(img9, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 2) {
                image(img10, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 3) {
                image(img11, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 4) {
                image(img12, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 5) {
                image(img13, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 6) {
                image(img14, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 7) {
                image(img15, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 8) {
                image(img16, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 9) {
                image(img17, this.x, this.y, this.w, this.w);
            } 
        }
        else {
            if (this.imageselect == 0) {
                image(img1, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 1) {
                image(img2, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 2) {
                image(img3, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 3) {
                image(img4, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 4) {
                image(img5, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 5) {
                image(img6, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 6) {
                image(img7, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 7) {
                image(img1, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 8) {
                image(img2, this.x, this.y, this.w, this.w);
            } else if (this.imageselect == 9) {
                image(img3, this.x, this.y, this.w, this.w);
            }
        }
    }
}
cell.prototype.contains = function (x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this. w )
}

cell.prototype.reveal = function () {
    this.revealed = true;
    
}