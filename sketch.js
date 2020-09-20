//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var colourPicker = null;


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
    
    

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();



	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new sprayCan());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new brushTool());
    toolbox.addTool(new vertexTool());
    toolbox.addTool(new ellipseTool());
    toolbox.addTool(new starTool());
    toolbox.addTool(new fillRectTool());
    toolbox.addTool(new fillEllipseTool());
    toolbox.addTool(new eraserTool());
    toolbox.addTool(new penTool());
    
	background(255);
    
    //check if mouse is pressed on the canvas
    this.mousePressedOnCanvas = function(canvas){
        if ((mouseX >= 0 && mouseX <= canvasContainer.size().width) &&
            (mouseY >= 0 && mouseY <= canvasContainer.size().height)
           )
                {
                    return true;
                }
        return false;
    }
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}