function eraserTool(){
    //set an icon and name for the object
	this.icon = "assets/eraser1.png";
	this.name = "eraserTool";
 
	var drawing = false;
    var eraserToolSlider

   
	this.draw = function(){
       var size = eraserToolSlider.value();
        //if the mouse is pressed
		if(mouseIsPressed){
            push();
            fill(255);
            stroke(255);
           
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
          
            pop();
            }  

        }
    
	this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
    
this.populateOptions = function() {

    eraserToolSlider = createSlider(15,50,5);
    eraserToolSlider.parent("#options");

    }

select(".options").html("");
}
