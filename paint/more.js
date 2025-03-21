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
    ctx.fillStyle = 'blue';
    ctx.closePath();
    ctx.fill();
}

function drawCircle(center_x, center_y, radius)
{
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.closePath();
    ctx.stroke();
}

function drawTriangle(triangBase)
{
    triangleHeight = triangBase * Math.sqrt(3) / 2;
    circleRadius = triangBase * 0.75;
    /*ctx.beginPath();
    ctx.moveTo(cX(mid_x - triangBase / 2), cY(mid_y - triangleHeight / 2));
    ctx.lineTo(cX(mid_x + triangBase / 2), cY(mid_y - triangleHeight / 2));
    ctx.lineTo(cX(mid_x), cY(mid_y + triangleHeight / 2));
    ctx.lineTo(cX(mid_x - triangBase / 2), cY(mid_y - triangleHeight / 2));
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.closePath();
    ctx.stroke();*/
    drawCircle(cX(mid_x + triangBase / 2), cY(mid_y - triangleHeight / 2), circleRadius);
    drawCircle(cX(mid_x), cY(mid_y + triangleHeight / 2), circleRadius);
    drawCircle(cX(mid_x - triangBase / 2), cY(mid_y - triangleHeight / 2), circleRadius);
}

function update()
{
    paintCircle();
    drawTriangle(150);
}

update();