$(document).ready(function(){
    var $canvas = $('#canvas');
    var ctx = $canvas[0].getContext('2d');
    var key = 0;
    var r1 = new Rect(40, 50, 60, 60, '#ff2200', 5);

    drawScreen();

    function drawScreen(){
        
        $(document).keydown(function(e){
            key = e.which;
        });
        
        $(document).keyup(function(e){
            key = 0;
        });

        // console.log(key);
        
        ctx.fillStyle = "#fff";
        ctx.fillRect(0,0,500,300);
        
        ctx.strokeStyle = "#000";
        ctx.strokeRect(0,0,500,300);
        
        r1.draw(ctx);
        r1.moveRandom(key);
        
        
        window.requestAnimationFrame(drawScreen);
    }
});


function Rect(xPosition, yPosition, width, height, color, speed){
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
    this.randx = Math.floor((Math.random() * 499) + 0);
	this.randy = Math.floor((Math.random() * 299) + 0);

    this.draw = function (ctx) {
        ctx.fillStyle = this.color;
		ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height, this.color);
    }

    this.moveByArrows = function(key) {
        if(key === 38) {
            this.yPosition-=this.speed;
        } 
        if(key === 40) {
            this.yPosition+=this.speed;
        } 

        if(key === 39) {
            this.xPosition+=this.speed;
        } 

        if(key === 37) {
            this.xPosition-=this.speed;
        } 
    }

    this.moveRandom = function() {

        if(this.xPosition !== this.randx && this.xPosition < this.randx){
            this.xPosition += 1;
        }else if(this.xPosition !== this.randx && this.xPosition > this.randx){
            this.xPosition -= 1;
        }  else {
            this.randx = Math.floor((Math.random() * 499) + 0);
        }

        if(this.yPosition !== this.randy && this.yPosition < this.randy){
                this.yPosition+= 1;
        }else if(this.yPosition !== this.randy && this.yPosition > this.randy){
            this.yPosition -= 1;
        }  else {
            this.randy = Math.floor((Math.random() * 299) + 0);
        }
    }
}