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
                //changes cursor to crosshair
                cursor('crosshair');
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
        
            beginShape();
            for(var i = 0; i < currentShape.length; i++){
                 var sizeW = penToolSlider.value();
                strokeWeight(sizeW);
                        noFill();
                        vertex(currentShape[i].x,
                        currentShape[i].y);
                
                        if(editMode){
                        strokeWeight(1);
                        fill('blue');
                        ellipse(currentShape[i].x,
                                currentShape[i].y,
                                5);
                        noFill();
                        }
            }
            endShape();
        
	};
    
    
    this.unselectTool = function() {
     
		//clear options
		select(".options").html("");
        cursor('auto');
        strokeWeight(1);
        fill(0);
        
	};
    

    this.populateOptions = function() {

        
        select(".options").html(
			"<button id='editButton'>Edit button</button> <button id='finishButton'>Finish button</button> <div class='label'> Thickness </div>");
       
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
        
        select("#finishButton").mouseClicked(function(){
                var button = select("#" + this.elt.class);
                editMode = false;
                draw();
                loadPixels();
                currentShape = [];})            
    
        penToolSlider = createSlider(1,20,1);
        penToolSlider.parent("#options");
                                             
}
    fill(0);
//   updatePixels();
//console.log(this.mousePressedOnCanvas())    

}
