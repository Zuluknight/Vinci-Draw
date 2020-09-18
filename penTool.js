function penTool(){
    //set an icon and name for the object
	this.icon = "assets/pen.png";
	this.name = "penTool";
    
    //plot out shape as series of vertices
    //add a button for switching between creating and editing vertices
    var editButton;
    var finishButton;
    
    //boolean to toggle edit mode
    var editMode = false;
	
    //array to hold current vertices
    var currentShape = [];
    
    loadPixels();
    noFill();
    
    
    finishButton.mousePressed(function()
    {
        loadPixels();
        currentShape = [];
    });
    
    
    
    
    
    
    
    
	this.draw = function(){

        
	};
    
  
    

    this.populateOptions = function() {
    editButton = createButton('Edit Shape');
    editButton.parent("#options");
        
    finishButton = createButton('Finish Shape');
    finishButton.parent("#options"); 
    }

}
