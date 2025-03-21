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

function paintReverse()
{
    radius_x = radius * 0.8;
    radius_y = radius * 0.5;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.ellipse(mid_x, mid_y, radius_x, radius_y, 0, Math.PI * 0.7, Math.PI * 1.6, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(mid_x, mid_y, radius_x, radius_y, 0, Math.PI * 0.59, Math.PI * 1.7, true);
    ctx.stroke();
    fletchWidth = 40;
    flechAngle = 3/4*Math.PI;
    topArrowHead = [mid_x + radius_x * Math.cos(Math.PI * 0.4), mid_y + radius_y * Math.sin(Math.PI * 0.4)];
    topRightFletch = [topArrowHead[0] + fletchWidth * 1.2 * Math.cos(flechAngle), topArrowHead[1] + fletchWidth * 1.2 * Math.sin(flechAngle)];
    topLeftFlech = [topArrowHead[0] + fletchWidth * Math.cos(-flechAngle), topArrowHead[1] + fletchWidth * Math.sin(-flechAngle)];
    ctx.beginPath();
    ctx.moveTo(cX(topArrowHead[0]), cY(topArrowHead[1] - 3));
    ctx.lineTo(cX(topRightFletch[0] + 3), cY(topRightFletch[1]));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cX(topArrowHead[0]), cY(topArrowHead[1] + 6));
    ctx.lineTo(cX(topLeftFlech[0] - 3), cY(topLeftFlech[1]));
    ctx.stroke();
    botArrowHead = [mid_x + radius_x * Math.cos(Math.PI * -0.6), mid_y + radius_y * Math.sin(Math.PI * -0.6)];
    flechAngle = 1/4*Math.PI;
    botRightFletch = [botArrowHead[0] + fletchWidth * Math.cos(flechAngle), botArrowHead[1] + fletchWidth * Math.sin(flechAngle)];
    botLeftFlech = [botArrowHead[0] + fletchWidth * 1.2 * Math.cos(-flechAngle), botArrowHead[1] + fletchWidth * 1.2 * Math.sin(-flechAngle)];
    ctx.beginPath();
    ctx.moveTo(cX(botArrowHead[0]), cY(botArrowHead[1] - 3));
    ctx.lineTo(cX(botRightFletch[0] + 3), cY(botRightFletch[1]));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cX(botArrowHead[0]), cY(botArrowHead[1] + 6));
    ctx.lineTo(cX(botLeftFlech[0] - 3), cY(botLeftFlech[1]));
    ctx.stroke();
}

function update()
{
    paintCircle();
    paintReverse();
}

update();