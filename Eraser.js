function eraserTool(){
    //set an icon and name for the object
	this.icon = "assets/eraser1.png";
	this.name = "eraserTool";
 
	var drawing = false;
    var eraserToolSlider
    
           this.draw = function() {
                    //set size to slider value
            var size = eraserToolSlider.value();
            //if the mouse is pressed
            strokeWeight(size);
            if (mouseIsPressed) {
                //changes cursor to crosshair
                cursor('crosshair');
                //changes cursor to crosshair
                cursor('crosshair');
                //check if they previousX and Y are -1. set them to the current
                //mouse X and Y if they are.
                if (previousMouseX == -1) {
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                //if we already have values for previousX and Y we can draw a line from
                //there to the current mouse location
                else {
                    push();
                    fill(255);
                    stroke(255);
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                    pop();
                }
            }
            //if the user has released the mouse we want to set the previousMouse values
            //back to -1.
            //try and comment out these lines and see what happens!
            else {
                previousMouseX = -1;
                previousMouseY = -1;
            }
        };
    
	this.unselectTool = function() {
		//clear options
		select(".options").html("");
        cursor('auto')
	};
    
this.populateOptions = function() {
    select(".options").html("<div class='label'> Size </div>");
    eraserToolSlider = createSlider(15,50,5);
    eraserToolSlider.parent("#options");

    }

select(".options").html("");
}
