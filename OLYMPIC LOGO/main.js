canvas =document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

ctx.beginPath();
ctx.stokeStyle = "grey";
ctx.lineWidth = 7;
ctx.rect(150, 143, 430, 200)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 7;
ctx.arc(250, 210, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 7;
ctx.arc(350, 210, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 7;
ctx.arc(450, 210, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 7;
ctx.arc(300, 250, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 7;
ctx.arc(400, 250, 40, 0, 2*Math.PI)
ctx.stroke();