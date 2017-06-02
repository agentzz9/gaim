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

    this.isTouched = function() {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var touched = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) //TODO for multi touch checks refactor this.
         || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            touched = false;
        }
        return touched;
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
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) //TODO for multi touch checks refactor this.
         || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            touched = false;
        }
        return touched;
    }

}
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

    this.isTouched = function() {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var touched = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) //TODO for multi touch checks refactor this.
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

    this.isTouched = function() {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var touched = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) //TODO for multi touch checks refactor this.
         || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            touched = false;
        }
        return touched;
    }

}
function randXonRoad(){
    return Math.floor((Math.random() * 33) + 34);
}

