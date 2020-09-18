function brushTool(){
    //set an icon and name for the object
	this.icon = "assets/paintbrush.png";
	this.name = "brushTool";
 
    //set the properties for the mouse' starting position
	var drawing = false;
    var brushToolSlider
    
    
   


   
	this.draw = function(){
       var size = brushToolSlider.value();
        //if the mouse is pressed
		if(mouseIsPressed){
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            ellipse(mouseX,mouseY,size);
            }
     
           
        }
	


    
this.populateOptions = function() {
    brushToolSlider = createSlider(5,20,5);
    brushToolSlider.parent("#options");
    }
}
