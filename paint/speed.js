canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

width = canvas.width;
height = canvas.height;

m_x = width / 2;
m_y = height / 2;

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

function paintArrow(x, y, h, l)
{
    ctx.beginPath();
    ctx.moveTo(cX(m_x - x), cY(m_y + y));
    ctx.lineTo(cX(m_x), cY(m_y + y + h));
    ctx.lineTo(cX(m_x + x), cY(m_y + y));
    ctx.lineTo(cX(m_x), cY(m_y + y + (h - l)));
    ctx.lineTo(cX(m_x - x), cY(m_y + y));
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
    
}

function update()
{
    paintCircle();
    paintArrow(110, -160, 60, 20);
    paintArrow(165, -70, 100, 35);
    paintArrow(220, 20, 160, 50);
}

update();