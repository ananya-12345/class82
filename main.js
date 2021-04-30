var mouseevent="empty";
var oldxpostition,oldypostition;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById("add").value;
width_of_line = document.getElementById("thick").value;
mouseevent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + oldxpostition + "y = " + oldypostition);
ctx.moveTo(oldxpostition,oldypostition);
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}
oldxpostition=current_position_of_mouse_x;
oldypostition=current_position_of_mouse_y;
    }
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(m){
        mouseevent="mouseup";
    }
    canvas.addEventListener("mouseleave", my_leave);
    function my_leave(m){
        mouseevent="mouseleave";
    }