

$(document).ready(function(){
	
	$('#export').on('click', function(){
		$.fn.freeHandDraw.export();
	});
	
	$('#undo').on('click', function(){
		if(data.length>0) {
			$.fn.freeHandDraw.clearCanvas();
			reDoStack.push(data.pop());
			draw();
		}
	});
	
	$('#clear').on('click', function(){
			data=[];
			reDoStack=new Stack();
			$.fn.freeHandDraw.clearCanvas();
	});
	$('#redo').on('click', function(){
		if(!reDoStack.isEmpty()) {
			data[data.length]=reDoStack.pop();
			draw();
		}
	});
		
	$('#erase').on('click', function(){
		previousColor = selectedColor;
		$('#selectColor').hide();
		$.fn.freeHandDraw.setColor("#FFFFFF");
		$('#container').css("cursor", "grabbing");
	});
	
	$('#draw').on('click', function(){
		selectedColor=previousColor;
		$('#selectColor').show();
		$.fn.freeHandDraw.setColor(selectedColor);
		$('#container').css("cursor", "context-menu");
	});
	
	isCanvasCreated = true;
		$('#container').freeHandDraw();
		draw();
	
});


class Stack { 
	
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    }

	push(element) 
	{ 
		// push element into the items 
		this.items.push(element); 
	} 	
	
	
	// pop function 
	pop(){ 
		if (this.items.length == 0) 
			return "Underflow"; 
		return this.items.pop(); 
	}
	
	peek(){ 
 
		return this.items[this.items.length - 1]; 
	} 
	
	isEmpty(){ 
		// return true if stack is empty 
		return this.items.length == 0; 
	} 
} 

var reDoStack = new Stack();
var isCanvasCreated = false;
var selectedColor,previousColor;
var data = [];
var points=[];

function draw() {
	for (var i=0;i<data.length;i++) {
	 	var val = data[i];
		$.fn.freeHandDraw.setColor(val.color)
		for(var j=0;j<val.data.length;j++) {
			if(j==0) $.fn.freeHandDraw.newPath(val.data[j].x,val.data[j].y);
			else 
			$.fn.freeHandDraw.populateData(val.data[j].x,val.data[j].y);
		}
	}
}

function setcolor(color) {
					
	$.fn.freeHandDraw.setColor(color);
}
(function( $ ) {
	/**
	* Private variables
	**/
	var isDragged		= false,
		startPoint		= { x:0, y:0 },
		paintCanvas,
		paintContext;

	/**
	* Assembly and initialize plugin
	**/
	$.fn.freeHandDraw = function (options) {

		return this.each(function () {
			var rootElement 	= $(this),
				defaultColor	= '#FF0000';
				

			
			// set canvas pane width and height
			var canvas = rootElement.find('canvas');
			var canvasContainer = rootElement.find('container');
			canvas.attr('width', 1600);
			canvas.attr('height', 700);

			// get canvas pane context
			paintCanvas = document.getElementById('paintCanvas');
			paintContext = paintCanvas.getContext('2d');

			// set color
			$.fn.freeHandDraw.setColor(defaultColor);

			// bind mouse actions
			paintCanvas.onmousedown = $.fn.freeHandDraw.onMouseDown;
			paintCanvas.onmouseup = $.fn.freeHandDraw.onMouseUp;
			paintCanvas.onmousemove = $.fn.freeHandDraw.onMouseMove;

			// bind touch actions
			paintCanvas.addEventListener('touchstart', function(e){
				$.fn.freeHandDraw.dispatchMouseEvent(e, 'mousedown');
			});
			paintCanvas.addEventListener('touchend', function(e){
  				$.fn.freeHandDraw.dispatchMouseEvent(e, 'mouseup');
			});
			paintCanvas.addEventListener('touchmove', function(e){
				$.fn.freeHandDraw.dispatchMouseEvent(e, 'mousemove');
			});

			// Prevent scrolling on touch event
			document.body.addEventListener("touchstart", function (e) {
			  if (e.target == 'paintCanvas') {
			    e.preventDefault();
			  }
			}, false);
			document.body.addEventListener("touchend", function (e) {
			  if (e.target == 'paintCanvas') {
			    e.preventDefault();
			  }
			}, false);
			document.body.addEventListener("touchmove", function (e) {
			  if (e.target == 'paintCanvas') {
			    e.preventDefault();
			  }
			}, false);
		});
	}

	/**
	* Extend plugin
	**/
	$.extend(true, $.fn.freeHandDraw, {

		/**
		* Dispatch mouse event
		*/
		dispatchMouseEvent : function(e, mouseAction){
			var touch = e.touches[0];
			if(touch == undefined){
				touch = { clientX : 0, clientY : 0 };
			}
			var mouseEvent = new MouseEvent(mouseAction, {
				clientX: touch.clientX,
				clientY: touch.clientY
			});
			paintCanvas.dispatchEvent(mouseEvent);
		},

		/**
		* Remove pane
		*/
		clearCanvas : function(){
			paintCanvas.width = paintCanvas.width;
		},

		/**
		* On mouse down
		**/
		onMouseDown : function(e){
			isDragged = true;
			// get mouse x and y coordinates
			startPoint.x = e.offsetX;
			startPoint.y = e.offsetY;
			// begin context path
			paintContext.beginPath();
			paintContext.moveTo(startPoint.x, startPoint.y);
		},

		/**
		* On mouse up
		**/
		onMouseUp : function() {
			data.push({"data":points,"color":selectedColor});
			points=[];
		    isDragged = false;
		},

		/**
		* On mouse move
		**/
		onMouseMove : function(e){
			if(isDragged){
				paintContext.lineTo(e.offsetX, e.offsetY);
				paintContext.stroke();
				points.push({"x":e.offsetX,"y":e.offsetY});
			}
		},

		/**
		* Set selected color
		**/
		setColor : function(color){
			paintContext.strokeStyle = color;
			selectedColor = color;
		},
		
		populateData:function(x,y) {
			paintContext.lineTo(x, y);
			paintContext.stroke();
		},
		
		newPath:function(x,y) {
			startPoint.x = x;
			startPoint.y = y;
			// begin context path
			paintContext.beginPath();
			paintContext.moveTo(startPoint.x, startPoint.y);
		},

		/**
		*
		*/
		export : function(){
			var imgData = paintCanvas.toDataURL('image/png');
			var windowOpen = window.open('about:blank', 'Image');
			windowOpen.document.write('<img src="' + imgData + '" alt="Exported Image"/>');
		}

	}); 
	

})(jQuery);

