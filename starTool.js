function starTool(){
    //set an icon and name for the object
	this.icon = "assets/staricon.png";
	this.name = "starTool";
 
    //set the properties for the mouse' starting position
	var drawing = false;
    var starToolSlider;
    var star = loadImage('assets/staricon.png');
  
   
    

	this.draw = function(){
       var starSize = starToolSlider.value();
        //if the mouse is pressed
		if(mouseIsPressed){
//            var starSize = starSizeSlider.value();
            var starX = mouseX - starSize/2;
            var starY = mouseY - starSize/2;
//            image(star, starX,starY,starSize,starSize);
            image(star,mouseX, mouseY, starX, starY);
            }
     
           
        }
	

this.unselectTool = function() {
		updatePixels();
//		clear options
		select(".options").html("");
	};
    
this.populateOptions = function() {
    starToolSlider = createSlider(5,20,5);
    starToolSlider.parent("#options");
    }
}