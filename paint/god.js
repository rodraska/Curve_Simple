canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

width = canvas.width;
height = canvas.height;

mid_x = width / 2;
mid_y = height / 2;

radius = width / 2;

function cX(x) {return (x)}

function cY(y) {return (height - y)}

function paintCircle()
{
    ctx.beginPath();
    ctx.arc(cX(width / 2), cY(height / 2), radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'green';
    ctx.closePath();
    ctx.fill();
}

function paintGod()
{
    ctx.beginPath();
    ctx.arc(mid_x, mid_y, radius * 0.5, 0, Math.PI * 2);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mid_x, mid_y, radius / 3, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.closePath();
    ctx.fill();
}

function update()
{
    paintCircle();
    paintGod();
}

update();