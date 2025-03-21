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

function paintSlow()
{
    circle_radius = 22;
    circle_center = [mid_x - 30, mid_y - 15];
    circle_bool = true;
    snake_base = [0, 0]
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;

    for (let i = 0; i < 7; i++)
    {
        ctx.beginPath();
        ctx.arc(cX(circle_center[0]), cY(circle_center[1]), circle_radius, Math.PI * 1.01, Math.PI * 2 * 1.01, circle_bool);
        ctx.stroke();
        if (i == 6)
        {
            snake_base[0] = circle_center[0] + circle_radius;
            snake_base[1] = circle_center[1];
            continue ;
        }
        if (i % 2 == 0) circle_center[0] -= 22;
        else circle_center[0] += 22;
        circle_radius += 22;
        circle_bool = !circle_bool;
    }
    snake_radius = 500;
    snake_center = [snake_base[0] + snake_radius, snake_base[1]];
    ctx.beginPath();
    ctx.arc(cX(snake_center[0] - 0.5), cY(snake_center[1]), snake_radius, Math.PI * 0.993, - Math.PI * 0.9, false);
    ctx.stroke();

    snake_radius = 130;
    snake_center = [snake_base[0] + snake_radius, snake_base[1]];
    ctx.beginPath();
    ctx.arc(cX(snake_center[0] - 0.5), cY(snake_center[1]), snake_radius, Math.PI * 0.993, - Math.PI * 0.65, false);
    ctx.stroke();
}

function update()
{
    paintCircle();
    paintSlow();

}

update();