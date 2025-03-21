canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

width = canvas.width;
height = canvas.height;

mid_x = width / 2;
mid_y = height / 2;

radius = width / 2;
square_radius = 125;
n_steps = 9;

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

function paintInterX(x_i, x_f, y)
{
    step = (x_f - x_i) / n_steps;
    for (let i = 0; i < n_steps; i++)
    {
        if (i % 2 != 0) continue;
        ctx.beginPath();
        ctx.moveTo(cX(x_i + step * i), cY(y));
        ctx.lineTo(cX(x_i + step * (i + 1)), cY(y));
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 15;
        ctx.stroke();
    }
}

function paintInterY(y_i, y_f, x)
{
    step = (y_f - y_i) / n_steps;
    for (let i = 0; i < n_steps; i++)
    {
        if (i % 2 != 0) continue;
        ctx.beginPath();
        ctx.moveTo(cX(x), cY(y_i + step * i));
        ctx.lineTo(cX(x), cY(y_i + step * (i + 1)));
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 15;
        ctx.stroke();
    }
}

function update()
{
    paintCircle();
    paintInterX(mid_x - square_radius - 7.5, mid_x + square_radius + 7.5, mid_y + square_radius);
    paintInterX(mid_x - square_radius - 7.5, mid_x + square_radius + 7.5, mid_y - square_radius);
    paintInterY(mid_y - square_radius, mid_y + square_radius, mid_x - square_radius);
    paintInterY(mid_y - square_radius, mid_y + square_radius, mid_x + square_radius);
}

update();