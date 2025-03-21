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

function paintCheese()
{
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 42;

    cheese_radius = radius * 0.57;
    theta_step = Math.PI * 0.03;
    theta_i = 0;
    theta_f = theta_i + theta_step;
    theta_hole = Math.PI * 0.06;
    while (theta_f < Math.PI * 2)
    {
        ctx.beginPath();
        ctx.arc(cX(mid_x), cY(mid_y), cheese_radius, theta_i, theta_f, false);
        ctx.stroke();
        theta_i = theta_f + theta_hole;
        theta_f = theta_i + theta_step;
    }
}

function update()
{
    paintCircle();
    paintCheese();
}

update();