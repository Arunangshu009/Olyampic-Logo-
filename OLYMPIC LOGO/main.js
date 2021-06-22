function draw(){
ctx = document.getElementById;
}

ctx.beginPath();
ctx.stokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200)
ctx.stoke();


ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2*Math.PI)
ctx.stoke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(400, 200, 40, 0, 2*Math.PI)
ctx.stoke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 5;
ctx.arc(600, 200, 40, 0, 2*Math.PI)
ctx.stoke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.arc(300, 500, 40, 0, 2*Math.PI)
ctx.stoke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(500, 500, 40, 0, 2*Math.PI)
ctx.stoke();
