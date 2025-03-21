canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

width = canvas.width;
height = canvas.height;

mid_x = width / 2;
mid_y = height / 2;

radius = width / 2;

function cX(x) {return (mid_x + x)}

function cY(y) {return (mid_y - y)}

function paintCircle()
{
    ctx.beginPath();
    ctx.arc(cX(0), cY(0), radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.closePath();
    ctx.fill();
}

function paintRubber()
{
    ctx.beginPath();
    ctx.moveTo(cX(170), cY(-120));
    ctx.lineTo(cX(-100), cY(-120));
    ctx.lineTo(cX(-180), cY(-40));
    ctx.lineTo(cX(-100), cY(40));
    ctx.lineTo(cX(6), cY(-66));
    ctx.lineTo(cX(-100), cY(40));
    ctx.lineTo(cX(20), cY(160));
    ctx.lineTo(cX(130), cY(50));
    ctx.lineTo(cX(-40), cY(-120));
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.stroke();
}

function update()
{
    paintCircle();
    paintRubber();
}

update();