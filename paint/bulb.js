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

function paintBulb()
{
    bulb_center = [mid_x, mid_y];
    bulb_radius = radius * 0.45;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(cX(bulb_center[0]), cY(bulb_center[1]), bulb_radius, Math.PI, -Math.PI);
    ctx.closePath();
    ctx.stroke();
    
    corners = [];
    corner_theta = Math.PI / 4;
    for (let i = 0; i < 4; i++)
    {
        corner_x = bulb_center[0] + bulb_radius * Math.cos(corner_theta);
        corner_y = bulb_center[1] + bulb_radius * Math.sin(corner_theta);
        corners.push([corner_x, corner_y]);
        corner_theta += Math.PI / 2;
    }
    for (let i = 0; i < 2; i++)
    {
        ctx.beginPath();
        ctx.moveTo(cX(corners[i][0]), cY(corners[i][1]));
        ctx.lineTo(cX(corners[i + 2][0]), cY(corners[i + 2][1]));
        ctx.stroke();
    }

    edges = [];
    for (let i = -1; i <= 1; i += 2)
    {
        edge_x = bulb_center[0] + bulb_radius * i;
        edge_y = bulb_center[1];
        line_x = edge_x + radius * 0.45 * i;
        line_y = edge_y;
        ctx.beginPath();
        ctx.moveTo(cX(edge_x), cY(edge_y));
        ctx.lineTo(cX(line_x), cY(line_y));
        ctx.stroke();
    }
}

function update()
{
    paintCircle();
    paintBulb();
}

update();