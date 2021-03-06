function missile(x, y, dir) {
	this.x = x;
	this.y = y;
	this.rotation = dir;
	this.speed = 5;
	
	this.update = function() {
		this.move();
		//check quad tree for for collision with player
	}	
	
	this.move = function() {
		//this.x = Math.cos(this.rotation) * this.speed;
		this.y = this.y + Math.sin(Math.PI / 2) * this.speed + this.speed;
	}
	this.draw = function() {
		ctx.save();
		ctx.rotate(15*Math.PI/180);
		ctx.drawImage(missileImg, this.x, this.y);
		ctx.restore();
	}
}

function makeMissile(x,y,dir) {
	missiles.push(new missile(x,y,dir));
}