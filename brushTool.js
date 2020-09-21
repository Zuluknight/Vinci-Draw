function brushTool(){
    //set an icon and name for the object
	this.icon = "assets/paintbrush.png";
	this.name = "brushTool";
    
    var drawing = false;
    var brushToolSlider;


        this.draw = function() {
                    //set size to slider value
        var size = brushToolSlider.value();
            //if the mouse is pressed
            strokeWeight(size);
            if (mouseIsPressed) {
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
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
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
        //labels slider as Thickness 
        select(".options").html("<div class='label'> Brush Thickness </div>");
        
        //creates slider to control size
        brushToolSlider = createSlider(5,20,5);
        brushToolSlider.parent("#options");
        }
    //clears options
    select(".options").html("");
}
