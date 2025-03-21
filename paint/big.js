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
    ctx.fillStyle = 'red';
    ctx.closePath();
    ctx.fill();
}

function paintArrowRight()
{
    arrowBase = [mid_x + radius * 0.65, mid_y];
    arrowHead = [mid_x + radius * 0.9, mid_y];
    fletchWidth = 30;
    fletchAngle = 3/4*Math.PI;
    fletchRight = [arrowHead[0] + fletchWidth * Math.cos(-fletchAngle), arrowHead[1] + fletchWidth * Math.sin(-fletchAngle)];
    fletchLeft = [arrowHead[0] + fletchWidth * Math.cos(fletchAngle), arrowHead[1] + fletchWidth * Math.sin(fletchAngle)];
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(cX(arrowBase[0]), cY(arrowBase[1]));
    ctx.lineTo(cX(arrowHead[0]), cY(arrowHead[1] + 3));
    ctx.lineTo(cX(fletchLeft[0]), cY(fletchLeft[1]));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cX(arrowBase[0]), cY(arrowBase[1]));
    ctx.lineTo(cX(arrowHead[0]), cY(arrowHead[1] - 3));
    ctx.lineTo(cX(fletchRight[0]), cY(fletchRight[1]));
    ctx.stroke();
}

function paintArrowLeft()
{
    arrowBase = [mid_x - radius * 0.65, mid_y];
    arrowHead = [mid_x - radius * 0.9, mid_y];
    fletchWidth = 30;
    fletchAngle = 1/4*Math.PI;
    fletchRight = [arrowHead[0] + fletchWidth * Math.cos(fletchAngle), arrowHead[1] + fletchWidth * Math.sin(fletchAngle)];
    fletchLeft = [arrowHead[0] + fletchWidth * Math.cos(-fletchAngle), arrowHead[1] + fletchWidth * Math.sin(-fletchAngle)];
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(cX(arrowBase[0]), cY(arrowBase[1]));
    ctx.lineTo(cX(arrowHead[0]), cY(arrowHead[1] + 3));
    ctx.lineTo(cX(fletchRight[0]), cY(fletchRight[1]));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cX(arrowBase[0]), cY(arrowBase[1]));
    ctx.lineTo(cX(arrowHead[0]), cY(arrowHead[1] - 3));
    ctx.lineTo(cX(fletchLeft[0]), cY(fletchLeft[1]));
    ctx.stroke();
}

function paintBig()
{
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mid_x, mid_y, radius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.closePath();
    ctx.fill();
    
}

function update()
{
    paintCircle();
    paintBig();
    paintArrowRight();
    paintArrowLeft();
}

update();