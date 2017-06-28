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
        } else if (this.type == "text") {
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

        if (type == "text") {
            var tempWidth = gameArea.context.measureText(this.text).width;
            var tempHeight = gameArea.context.measureText(this.text).height; //doesnt work. hheight alternate approach needed 
            var myleft = this.x;
            var myright = this.x + (tempWidth);
            var mytop = this.y;
            var mybottom = this.y + (tempHeight);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;

        } else {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
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
        } else if (this.type == "text") {
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
        if (this.y > 600) {
            this.y = -100;
        }
        if (this.y < -100) {
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
    this.distanceTravelled = 0;

    this.speedX = 0;
    this.speedY = 0;

    this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else if (this.type == "text") {
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
        if (this.x + this.width > rightWall.x) {
            this.x = rightWall.x - this.width;
        }
        if (this.x < leftWall.x + leftWall.width) {
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

function randXonRoad() {
    var perc = Math.floor((Math.random() * 30) + 32);
    return (perc / 100) * gameArea.canvas.width;

}

function randSpeed() {
    return Math.floor((Math.random() * 30) + 5); //5 to 30 pixels
}

function OtherCarComponent(width, height, color, x, y, type) {

    this.type = type;
    if (type == "image") {
        //this.image = new Image();
        //this.image.src = color;//take from profile? camera ?
        //above code snippet giving issues apparently the image has to be already loaded:(
        //
        var rand1t6 = Math.floor((Math.random() * 6) + 1);

        this.image = document.getElementById(color + rand1t6);

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
        } else if (this.type == "text") {
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


    this.explode = function() {
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
    var overSpeedTimerStarted = false;
    var overSpeedTimeoutHandle;
    this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;


            if (Number.parseFloat(this.text) >= Number.parseFloat(speedLimit)) {
                ctx.fillStyle = "red";

                spectatorMessage.color = "red";


                spectatorImage.color = "spectatorscared";
                spectatorImage.image = document.getElementById(spectatorImage.color);
                spectatorMessage.text = "Do Not overspeed, please Do Not overspeed!";
                if (!overSpeedTimerStarted) {
                    overSpeedTimerStarted = true;
                    overSpeedTimeoutHandle = setTimeout(function() {
                        overSped = true;

                    }, 5000);

                }

            } else {
                ctx.fillStyle = "#0bc4a7";
                spectatorMessage.color = "black";
                if (overSpeedTimeoutHandle != null) {
                    clearTimeout(overSpeedTimeoutHandle);

                    overSpeedTimeoutHandle = null;
                    spectatorMessage.text = "";
                }
                if (overSpeedTimerStarted != null) {

                    overSpeedTimerStarted = false;

                }

                spectatorImage.color = "spectatorimage";
                spectatorImage.image = document.getElementById(spectatorImage.color);
                if (spectatorMessage.text.length == 0) { spectatorMessage.text = ""; }

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

        if (type == "text") {
            var tempWidth = gameArea.context.measureText(this.text).width;
            var tempHeight = gameArea.context.measureText(this.text).height; //doesnt work. hheight alternate approach needed 
            var myleft = this.x;
            var myright = this.x + (tempWidth);
            var mytop = this.y;
            var mybottom = this.y + (tempHeight);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;

        } else {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
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
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = this.color;
            ctx.fillText(this.text, this.x, this.y);
        } else { //rect
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {

        if (prevDist != dist) {
            var deltaY = (dist / goalDistance) * (startIcon.y - endIcon.y);
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

        if (type == "text") {
            var tempWidth = gameArea.context.measureText(this.text).width;
            var tempHeight = gameArea.context.measureText(this.text).height; //doesnt work. hheight alternate approach needed 
            var myleft = this.x;
            var myright = this.x + (tempWidth);
            var mytop = this.y;
            var mybottom = this.y + (tempHeight);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;

        } else {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var wasIclicked = true;
            if ((mybottom < gameArea.y) || (mytop > gameArea.y) || (myright < gameArea.x) || (myleft > gameArea.x)) {
                wasIclicked = false;
            }
            return wasIclicked;
        }
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}
var soundEngine = {


    init: function() {
        engineIdle1 = new sound("idle2.mp3");
        engineIdle1.sound.loop = true;
        engineIdle1.sound.volume = 0.4;
        engineIdle1.play();
        //engineAccel1 = new sound("accel1.mp3");
        //engineAccel1.sound.loop = true;
        engineAccel2 = new sound("accel2.mp3");
        engineAccel2.sound.loop = true;
        engineAccel2.sound.volume = 0.4;
        engineDeccel1 = new sound("deccel1.mp3");
        engineDeccel1.sound.volume = 0.4;
        engineDeccel1.sound.loop = true;
        engineDeccelLight = new sound("deccellight.mp3");
        engineDeccelLight.sound.volume = 0.4;
        engineDeccelLight.sound.loop = true;

        this.current = engineIdle1;
        this.status = "idle";
    },
    idle: function() {
        if (this.status != "idle") {

            this.stopAll();
            engineIdle1.play();
            this.current = engineIdle1;
            this.status = "idle";
        }
    },
    accelerate: function() {
        if (this.status != "accelerate") {
            this.stopAll();
            engineAccel2.play();
            this.current = engineAccel2;
            this.status = "accelerate";
        }
    },
    deccelerate: function() {
        if (this.status != "deccelerate") {

            this.stopAll();
            engineDeccelLight.play();
            this.current = engineDeccelLight;
            this.status = "deccelerate";
        }
    },
    brake: function() {
        if (this.status != "brake") {

            this.stopAll();
            engineDeccel1.play();
            this.current = engineDeccel1;
            this.status = "brake";
        }
    },
    stopAll: function() {
        this.current.stop();
        //this.current.sound.currentTime = 0;
    }

}
