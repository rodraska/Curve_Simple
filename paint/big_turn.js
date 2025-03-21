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

function paintBigTurn()
{
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 21;

    circle_radius = radius * 0.45;
    diff_x = radius * 0.15;
    diff_y = Math.sqrt(Math.pow(2 * circle_radius, 2) - Math.pow(diff_x * 2, 2)) / 2;

    ctx.beginPath();
    ctx.arc(cX(mid_x + diff_x), cY(mid_y - diff_y), circle_radius, Math.PI * (3 / 4) * 0.9, Math.PI * (5 / 4) * 1.11, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cX(mid_x - diff_x), cY(mid_y + diff_y), circle_radius, Math.PI * (7 / 4) * 0.9, Math.PI * (1 / 4) * 1.6, false);
    ctx.stroke();
}

function update()
{
    paintCircle();
    paintBigTurn();
}

update();