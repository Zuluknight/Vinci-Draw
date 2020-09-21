function starTool(){
    //set an icon and name for the object
	this.icon = "assets/staricon.png";
	this.name = "starTool";
 
    //set the properties for the mouse' starting position
	var drawing = false;
    var starToolSlider;
    var star = loadImage('assets/staricon.png');
  
   
    

	this.draw = function(){
       var starSize = (starToolSlider.value()*5);
        //if the mouse is pressed
		if(mouseIsPressed){
            //changes cursor to crosshair
            cursor('crosshair');
            var starX = mouseX - starSize/2;
            var starY = mouseY - starSize/2;
            image(star,mouseX - starSize/2, mouseY - starSize/2, starSize, starSize);
            } 
        }
	
	this.unselectTool = function() {
		//clear options
		select(".options").html("");
        cursor('auto');
	    };
    
    this.populateOptions = function() {
        select(".options").html("<div class='label'> Size </div>");
        starToolSlider = createSlider(5,20,5);
        starToolSlider.parent("#options");
        }
}