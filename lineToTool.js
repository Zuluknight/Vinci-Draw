function LineToTool(){
    //set an icon and name for the object
	this.icon = "assets/linetool.png";
	this.name = "LineTo";
    
    //set the properties for the mouse' starting position
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
   
	this.draw = function(){

        //if the mouse is pressed
		if(mouseIsPressed){
            //changes cursor to crosshair
            cursor('crosshair');
            //check if mouseX and Y are -1. Then set them to current mouseX and Y.
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

            //if startMouseX != -1. Then draw line from startMouseX and Y position to new mouseX and Y.
			else{
                var sizeW = lineToToolSlider.value();
                strokeWeight(sizeW);
                noFill();
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

        //if the user has released the mouse we want to set the startMouse values back to -1.
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

    this.unselectTool = function() {
		//clear options
		select(".options").html("");
        strokeWeight(1);
        cursor('auto');
	};
    
    this.populateOptions = function() {
        select(".options").html("<div class='label'> Thickness </div>");
        lineToToolSlider = createSlider(1,20,1);
        lineToToolSlider.parent("#options");

    }

    select(".options").html("");
}
