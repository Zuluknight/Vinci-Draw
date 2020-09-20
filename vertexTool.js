function vertexTool(){
    //set an icon and name for the object
	this.icon = "assets/rect.png";
	this.name = "vertex";
    
    //set the properties for the mouse' starting position
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    var size;
    var sizeX; 

    
   
	this.draw = function(){

        size = dist(startMouseX,startMouseY,mouseX,mouseY)*0.6;
        sizeX = startMouseX+mouseX;
        sizeY = startMouseY+mouseY;
        sizeOfY = dist()
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
                var sizeW = brushToolSlider.value();
                push();
                strokeWeight(sizeW);
                beginShape(LINES);
                vertex(startMouseX, startMouseY);
                vertex(mouseX, startMouseY);
                vertex(mouseX, startMouseY);
                vertex(mouseX, mouseY);
                vertex(mouseX, mouseY);
                vertex(startMouseX, mouseY);
                vertex(startMouseX, mouseY);
                vertex(startMouseX, startMouseY);
                endShape();
                pop();
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
	};
    
    this.populateOptions = function() {

    brushToolSlider = createSlider(1,20,1);
    brushToolSlider.parent("#options");

    }
select(".options").html("");
}
