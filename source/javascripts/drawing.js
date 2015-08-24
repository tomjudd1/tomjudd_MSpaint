$(function () {
  
	var colourPot = new Array(	'#6600ff',
															'#ffff66',
															'#0066ff',
															'#ff0066',
															'#00ff66'
															);

  // Obtain a canvas drawing surface from fabric.js
  var canvas = this.__canvas = new fabric.Canvas('drawing', {
        isDrawingMode: true
  });
  
	canvas.freeDrawingBrush.color = getRandomColor();
	canvas.freeDrawingBrush.width = 10 + (Math.random() * 10);
  
  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('mouseup', changeColour, false);
  window.addEventListener('mousedown', playNote, false);
  window.addEventListener('touchend', changeColour, false);
  window.addEventListener('touchend', resizeCanvas, false);

	var space = false;
	$(function() {
	  $(document).keydown(function(evt) {
	    if (evt.keyCode == 32) {
	      space = true;
	      canvas.clear();
				playNote();
	    }
	  });
	});


	function playNote(){

		var r = Math.floor(400 + (Math.random()*400));
		var sine1 = T("sin", {freq:r, mul:0.02});
  	
		T("perc", {r:1000}, sine1 ).on("ended", function() {
		  this.pause();
		}).bang().play();
	}

  function changeColour() {
		canvas.freeDrawingBrush.color = getRandomColor();
		canvas.freeDrawingBrush.width = 10 + (Math.random() * 10);
  }

  function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }



  // resize on init
  resizeCanvas();


	function getRandomColor() {
		var randomInt = Math.floor(Math.random()*colourPot.length);
    var color = colourPot[randomInt];
    return color;
	}	

	// function getRandomColor() {
 //    var letters = '0123456789ABCDEF'.split('');
 //    var color = '#';
 //    for (var i = 0; i < 6; i++ ) {
 //        color += letters[Math.floor(Math.random() * 16)];
 //    }
 //    return color;
	// }


});