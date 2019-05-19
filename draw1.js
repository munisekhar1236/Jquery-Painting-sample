

$(document).ready(function(){
	
	$('#export').on('click', function(){
		//export();
	});
	
	$('#undo').on('click', function(){
		if(data.length>0) {
			clearCanvas();
			reDoStack.push(data.pop());
			draw();
		}
	});
	
	$('#clear').on('click', function(){
			data=[];
			reDoStack=new Stack();
			clearCanvas();
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
		setColor("#FFFFFF");
		$('#container').css("cursor", "grabbing");
	});
	
	$('#draw').on('click', function(){
		selectedColor=previousColor;
		$('#selectColor').show();
		setColor(selectedColor);
		$('#container').css("cursor", "context-menu");
	});
	
	isCanvasCreated = true;
		paint();
		draw();
	
});


class Stack { 
	
  
    // Array is used to implement stack 
    constructor(){ 
        this.items = []; 
    }

	push(element){ 
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
		setColor(val.color)
		for(var j=0;j<val.data.length;j++) {
			if(j==0) newPath(val.data[j].x,val.data[j].y);
			else 
			populateData(val.data[j].x,val.data[j].y);
		}
	}
}

function setcolor(color) {
					
	setColor(color);
}

var freeHandDraw;
	var isDragged		= false,
		startPoint		= { x:0, y:0 },
		paintCanvas,
		paintContext;
function paint() {

		
	freeHandDraw=  $('#container').each(function () {
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
			setColor(defaultColor);

			// bind mouse actions
			paintCanvas.addEventListener('mousedown', function(e){
				onMouseDown(e);
			});
			paintCanvas.addEventListener('mouseup', function(e){
				onMouseUp(e);
			});
			paintCanvas.addEventListener('mousemove', function(e){
				onMouseMove(e);
			});
			
			// bind touch actions
			paintCanvas.addEventListener('touchstart', function(e){
				dispatchMouseEvent(e, 'mousedown');
			});
			paintCanvas.addEventListener('touchend', function(e){
  				dispatchMouseEvent(e, 'mouseup');
			});
			paintCanvas.addEventListener('touchmove', function(e){
				dispatchMouseEvent(e, 'mousemove');
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


function newPath(x,y) {
			startPoint.x = x;
			startPoint.y = y;
			// begin context path
			paintContext.beginPath();
			paintContext.moveTo(startPoint.x, startPoint.y);
		}
function populateData(x,y) {
			paintContext.lineTo(x, y);
			paintContext.stroke();
		}

function setColor(color){
			paintContext.strokeStyle = color;
			selectedColor = color;
		}
 function dispatchMouseEvent(e, mouseAction){
			var touch = e.touches[0];
			if(touch == undefined){
				touch = { clientX : 0, clientY : 0 };
			}
			var mouseEvent = new MouseEvent(mouseAction, {
				clientX: touch.clientX,
				clientY: touch.clientY
			});
			//paintCanvas.dispatchEvent(mouseEvent);
			
			paintCanvas.addEventListener('dispatchEvent', function(e){
				onMouseDown(e);
			});
		}

 function onMouseDown(e){
			isDragged = true;
			// get mouse x and y coordinates
			startPoint.x = e.offsetX;
			startPoint.y = e.offsetY;
			// begin context path
			paintContext.beginPath();
			paintContext.moveTo(startPoint.x, startPoint.y);
		}
		
function clearCanvas(){
			paintCanvas.width = paintCanvas.width;
		}
		
function onMouseUp() {
			data.push({"data":points,"color":selectedColor});
			points=[];
		    isDragged = false;
		}
		
function onMouseMove(e){
			if(isDragged){
				paintContext.lineTo(e.offsetX, e.offsetY);
				paintContext.stroke();
				points.push({"x":e.offsetX,"y":e.offsetY});
			}
		}