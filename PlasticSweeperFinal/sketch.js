var canvas;
var lose = false;
var start = false;

function make2dArray(cols, rows){
    var arr = new Array(cols);
    for (var i = 0; i< arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}


var m = screen.width;
 if (m > 1200){
     n = (m*0.365)
     k = n - (n%10);
     
 } else if (m < 600) {
            n = m*0.91;
            k = n - (n%10) 
 }

console.log(k);
console.log(m);
console.log(n);

var grid;
var w = k/10;
var numcol;
var numrow;





var totalbees;

function setup(){
	canvas = createCanvas(k, k);
    canvas.parent('cont1');
    canvas.style("display", "block");
    
	background("#dddddd");
    
    var dateFuture = new Date(2015, 0, 1);
    var dateNow = new Date();
    var seconds = Math.floor(((dateNow) - dateFuture)/1000);
    var tonsPlastic = Math.floor(((seconds) * 0.31)+50000000);
    var percentage = Math.floor((tonsPlastic/150000000) * 100)
  
    totalbees = percentage;
    
    
    numcol = floor(width / w);
    numrow = floor(height / w);
    
    grid = make2dArray(numcol, numrow);
    
    for (var i = 0; i < numcol; i++) {
        for (var j = 0; j< numrow; j++){
            grid[i][j] = new cell(i, j, w);
        }
    }
    
    var options = [];
    for (var i = 0; i < numcol; i++) {
        for (var j = 0; j< numrow; j++){
           options.push([i, j]); 
        }
    }
    
    for (var n = 0; n < totalbees ; n++){
        var index = floor(random(options.length));
        var choice = options[index];
        var i = choice[0];
        var j = choice[1];
        
        options.splice(index, 1);
        grid[i][j].bee = true;
    }  
}

function gameover(){
    for (var i = 0; i < numcol; i++) {
        for (var j = 0; j< numrow; j++){ 
           grid[i][j].revealed = true; 
        }
    }
    lose = true;
   
}


function mousePressed(){
    if (start == true) {
       for (var i = 0; i < numcol; i++) {
        for (var j = 0; j< numrow; j++){
            if (grid[i][j].contains(mouseX, mouseY)){
                grid[i][j].reveal();
                if (grid[i][j].bee){
                    gameover();
                    
                }     
            }
        }
     }
} 
    }
     


function draw()
{
     for (var i = 0; i < numcol; i++) {
        for (var j = 0; j< numrow; j++){
            grid[i][j].show();
        }
    }
}

