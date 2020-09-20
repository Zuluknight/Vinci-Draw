function HelperFunctions() {

	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		//???
        window.alert("You're about to clear the canvas")
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
        //creates a window
        var name = prompt("Enter file name")
        //saves canvas
		saveCanvas(name,'png');
        window.alert("Your image has been downloaded")
        
        //???
	});
}