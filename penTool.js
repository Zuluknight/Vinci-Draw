function penTool(){
    //set an icon and name for the object
	this.icon = "assets/pen.png";
	this.name = "penTool";
    
    //plot out shape as series of vertices
    //add a button for switching between creating and editing vertices
    var editButton;
    var finishButton;
//    var mousePressedOnCanvas;
    
    //boolean to toggle edit mode
    var editMode = false;
	
    //array to hold current vertices
    var currentShape = [];
    
//    loadPixels();
//    noFill();
    

	this.draw = function(){
            updatePixels();
            if(mousePressedOnCanvas(canvas) && mouseIsPressed) {
                if(!editMode){
                    currentShape.push({
                        x: mouseX,
                        y: mouseY
                    });
                }
                else if(editMode){
                    for(var i = 0; i < currentShape.length; i++){
                        if(dist(currentShape[i].x,currentShape[i].y,
                                mouseX,mouseY) < 15){
                            currentShape[i].x = mouseX; 
                            currentShape[i].y = mouseY;
                        }
                    }
                }
            }
        
            beginShape(LINES);
            for(var i = 0; i < currentShape.length; i++){
                        noFill();
                        vertex(currentShape[i].x,
                        currentShape[i].y);
                        if(editMode){
                        fill('blue');
                        ellipse(currentShape[i].x,
                                currentShape[i].y,
                                5);
                        
                        }
            }
            endShape();
        
	};
    
    
    this.unselectTool = function() {
     
		//clear options
		select(".options").html("");
	};
    

    this.populateOptions = function() {
  
//    editButton = createButton('Edit Shape');
//    editButton.parent("#options");
        select(".options").html(
			"<button id='editButton'>edit button</button>",
        "<button id='finishButton'>Finish button</button>");
        
        select("#editButton").mouseClicked(function() {
        var button = select("#" + this.elt.id);
            if(editMode){
                editMode = false;
                button.html('Edit Shape');
            }
            else{
                editMode = true;
                button.html("Add Vertices")
            }
    })
        
//        select(".finishButton").mouseClicked(function(){
//                var button = select("#" + this.elt.class);
//                editMode = false;
//                loadPixels();
//                currentShape = [];})
////				button.html('Make Vertical');
//            
    
                                             
}
   updatePixels();
//console.log(this.mousePressedOnCanvas())    

}
