function Component(width, height, color, x, y, type) {

	this.type = type;
	if (type == "image") {
    	//this.image = new Image();
    	//this.image.src = color;//take from profile? camera ?
    	//above code snippet giving issues apparently the image has to be already loaded:(
  		this.image = document.getElementById(color);
    }
    this.width = width;
	this.height = height;
	this.color = color;
	this.x = x;
	this.y = y;
	
    this.speedX = 0;
	this.speedY = 0;

	this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
      		ctx.drawImage(this.image, 
        	this.x, 
        	this.y,
        	this.width, this.height);
   		}else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = this.color;
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
	this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.isClicked = function() {

        if(type == "text"){
            var tempWidth = gameArea.context.measureText(this.text).width;
            var tempHeight = gameArea.context.measureText(this.text).height;//doesnt work. hheight alternate approach needed 
            var myleft = this.x;
            var myright = this.x + (tempWidth);
            var mytop = this.y;
            var mybottom = this.y + (tempHeight);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y)
             || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;

        }else{
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y)
             || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;
        }
    }
}
function RoadlineComponent(width, height, color, x, y, type) {

	this.type = type;
	if (type == "image") {
    	//this.image = new Image();
    	//this.image.src = color;//take from profile? camera ?
    	//above code snippet giving issues apparently the image has to be already loaded:(
  		this.image = document.getElementById(color);
  	}

	this.width = width;
	this.height = height;
	this.color = color;
	this.x = x;
	this.y = y;
	
    this.speedX = 0;
	this.speedY = 0;

	this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
      		ctx.drawImage(this.image, 
        	this.x, 
        	this.y,
        	this.width, this.height);
   		}else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
	this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.y > 600){
            this.y = -100;
        }
        if(this.y < -100){
            this.y = 600;
        }    
    }
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

    this.isTouched = function() {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var touched = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y)//TODO for multi touch checks refactor this.
         || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            touched = false;
        }
        return touched;
    }

}

function PlayerCarComponent(width, height, color, x, y, type) {

    this.type = type;
    if (type == "image") {
        //this.image = new Image();
        //this.image.src = color;//take from profile? camera ?
        //above code snippet giving issues apparently the image has to be already loaded:(
        this.image = document.getElementById(color);
    }

    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.distanceTravelled  = 0;
    
    this.speedX = 0;
    this.speedY = 0;

    this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
            this.x, 
            this.y,
            this.width, this.height);
        }else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;  
        if(this.x+this.width > rightWall.x){ 
            this.x = rightWall.x-this.width;           
        }
        if(this.x < leftWall.x + leftWall.width){
            this.x = leftWall.x + leftWall.width;
        }
      
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

    
}
function randXonRoad(){
    var perc = Math.floor((Math.random() * 30) + 32);
    return (perc/100) * gameArea.canvas.width;
    
}
function randSpeed(){
    return Math.floor((Math.random() *  30) + 5);//5 to 30 pixels
}
function OtherCarComponent(width, height, color, x, y, type) {

    this.type = type;
    if (type == "image") {
        //this.image = new Image();
        //this.image.src = color;//take from profile? camera ?
        //above code snippet giving issues apparently the image has to be already loaded:(
        //
        var rand1t6 = Math.floor((Math.random()*6)+1);

        this.image = document.getElementById(color+rand1t6);

    }

    this.width = width;
    this.height = height;
    this.color = color;
    this.destroyed = false;
    
    this.x = x;
    this.y = y;
    
    this.speedX = 0;
    this.speedY = 0;
    this.speedYInit;

    this.update = function() {
        ctx = gameArea.context;
        if (this.type == "image") {
            ctx.drawImage(this.image, 
            this.x, 
            this.y,
            this.width, this.height);
        }else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;  
        
      
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

    
    this.explode = function(){
        this.destroyed = true;
        this.type = "image";
        this.color = "fireimage";
        this.width = 220;
        this.height = 200;
        this.speedY = 0;
        this.speedYInit = 0;
        this.image = document.getElementById(this.color);
        
    }

}
function SpeedValueComponent(width, height, color, x, y, type, speedLimit) {

    this.type = type;
    if (type == "image") {
        //this.image = new Image();
        //this.image.src = color;//take from profile? camera ?
        //above code snippet giving issues apparently the image has to be already loaded:(
        this.image = document.getElementById(color);
    }
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
     
    this.speedX = 0;
    this.speedY = 0;

    this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
            this.x, 
            this.y,
            this.width, this.height);
        }else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            if(Number.parseFloat(this.text) >= Number.parseFloat(speedLimit) )
             {
              ctx.fillStyle = "red";
            
                 spectatorMessage.color = "red";


                spectatorImage.color = "spectatorscared";
                spectatorImage.image = document.getElementById(spectatorImage.color);
              spectatorMessage.text = "spec message string...this long... will nee do see!";

            }
           else{
              ctx.fillStyle = "#0bc4a7";
                spectatorMessage.color = "black";
               spectatorImage.color = "spectatorimage";
                spectatorImage.image = document.getElementById(spectatorImage.color);
               spectatorMessage.text = "";
              }
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }




    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.isClicked = function() {

        if(type == "text"){
            var tempWidth = gameArea.context.measureText(this.text).width;
            var tempHeight = gameArea.context.measureText(this.text).height;//doesnt work. hheight alternate approach needed 
            var myleft = this.x;
            var myright = this.x + (tempWidth);
            var mytop = this.y;
            var mybottom = this.y + (tempHeight);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y)
             || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;

        }else{
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y)
             || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;
        }
    }
}
function PlayerIconComponent(width, height, color, x, y, type) {

	this.type = type;
	if (type == "image") {
    	//this.image = new Image();
    	//this.image.src = color;//take from profile? camera ?
    	//above code snippet giving issues apparently the image has to be already loaded:(
  		this.image = document.getElementById(color);
    }
    this.width = width;
	this.height = height;
	this.color = color;
	this.x = x;
	this.y = y;
	
    this.speedX = 0;
	this.speedY = 0;

	this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {

      		ctx.drawImage(this.image, 
        	this.x, 
        	this.y,
        	this.width, this.height);
   		}else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = this.color;
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
	this.newPos = function() {
        
        if(prevDist != dist){
            var deltaY = (dist/goalDistance) * (startIcon.y - endIcon.y);
        this.y = (-deltaY) + startIcon.y;


        }

        this.x += this.speedX;
        this.y += this.speedY;        
    }
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.isClicked = function() {

        if(type == "text"){
            var tempWidth = gameArea.context.measureText(this.text).width;
            var tempHeight = gameArea.context.measureText(this.text).height;//doesnt work. hheight alternate approach needed 
            var myleft = this.x;
            var myright = this.x + (tempWidth);
            var mytop = this.y;
            var mybottom = this.y + (tempHeight);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y)
             || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;

        }else{
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y)
             || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;
        }
    }
}

