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
            //check if mouseX and Y are -1. Then set them to current mouseX and Y.
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

            //if startMouseX != -1. Then draw line from startMouseX and Y position to new mouseX and Y.
			else{
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


}
