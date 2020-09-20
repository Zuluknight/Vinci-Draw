function brushTool(){
    //set an icon and name for the object
	this.icon = "assets/paintbrush.png";
	this.name = "brushTool";
    
    var drawing = false;
    var brushToolSlider;

	this.draw = function(){
        //set size to slider value
        var size = brushToolSlider.value();
        //if the mouse is pressed
		if(mouseIsPressed){
            //changes cursor to crosshair
            cursor('crosshair');
            for(var i = 0; i < 1000; i++){
                    ellipse(mouseX,mouseY,size);
                    ellipse(mouseX,mouseY,size);
                    }
            }  

        }
    
	this.unselectTool = function() {
		//clear options
		select(".options").html("");
	   };
    
    this.populateOptions = function() {
        //labels slider as Thickness 
        select(".options").html("<div>Thickness</div>");
        //creates slider to control size
        brushToolSlider = createSlider(5,20,5);
        brushToolSlider.parent("#options");
        }
    //clears options
    select(".options").html("");
}
