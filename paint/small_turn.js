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

function paintSmallTurn()
{
    circleRadius = radius * 0.12;
    lineWidth = radius * 0.7;
    circle_center_x = mid_x - lineWidth / 2;
    circle_center_y = mid_y - circleRadius * 5;
    arcBool = false;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(cX(circle_center_x - 1), cY(circle_center_y - circleRadius));
    ctx.lineTo(cX(circle_center_x + lineWidth + circleRadius), cY(circle_center_y - circleRadius));
    ctx.stroke();
    for (let i = 0; i < 6; i++)
    {
        ctx.beginPath();
        ctx.arc(cX(circle_center_x), cY(circle_center_y), circleRadius, Math.PI / 2, Math.PI * 3/2, arcBool);
        ctx.stroke();
        ctx.beginPath();
        if (i % 2 == 0)
        {
            ctx.moveTo(cX(circle_center_x - 1), cY(circle_center_y + circleRadius));
            ctx.lineTo(cX(circle_center_x + lineWidth + 1), cY(circle_center_y + circleRadius));
        } 
        else
        {
            ctx.moveTo(cX(circle_center_x + 1), cY(circle_center_y + circleRadius));
            ctx.lineTo(cX(circle_center_x - lineWidth - 1), cY(circle_center_y + circleRadius));
        } 
        ctx.stroke();
        if (i == 5) break; 
        if (i % 2 == 0) circle_center_x = mid_x + lineWidth / 2;
        else circle_center_x = mid_x - lineWidth / 2;
        circle_center_y += circleRadius * 2;
        arcBool = !arcBool;
    }
    ctx.beginPath();
    ctx.moveTo(cX(circle_center_x + 1), cY(circle_center_y + circleRadius));
    ctx.lineTo(cX(circle_center_x - lineWidth - circleRadius), cY(circle_center_y + circleRadius));
    ctx.stroke();
}

function update()
{
    paintCircle();
    paintSmallTurn();
}

update();