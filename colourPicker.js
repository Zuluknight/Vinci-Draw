//function colourPicker() {
//    
//	//make the start colour be black
//	this.selectedColour = "black";
//
//	var self = this;
//    
//    var colourPicker = createColorPicker('#ed225d');
//
//	var colourClick = function() {
//
//        //get the new colour from the id of the clicked element
//		var c = this.id().split("Swatch")[0];
//
//		//set the selected colour and fill and stroke
//		self.selectedColour = c;
//		fill(c);
//		stroke(c);
//
//	}
//
//	//load in the colours
//	this.loadColours = function() {
//		//set the fill and stroke properties to be black at the start of the programme
//		//running
////        var c = colorPicker.color();
////		fill(c);
////		stroke(c);
//
//		//for each colour create a new div in the html for the colourSwatches
//        
//
//     
//        colorPicker.class('colourSwatches')
//     
//       
//			var colourID = colorPicker.color();
//            select(".colourPalette").child(colorPicker);
//        
//
//		
//	};
//	//call the loadColours function now it is declared
//	this.loadColours();
//
//}