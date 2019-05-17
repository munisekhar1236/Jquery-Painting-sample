

$(document).ready(function(){
	$('body').on('click', '.bcPaint-palette-color', function(){
		$(this).parent().find('.selected').removeClass('selected');
		$(this).addClass('selected');
		$.fn.bcPaint.setColor($(this).css('background-color'));
	});

	$('body').on('click', '#bcPaint-reset', function(){
		$.fn.bcPaint.clearCanvas();
	});

	$('body').on('click', '#bcPaint-export', function(){
		$.fn.bcPaint.export();
	});
	
	draw();
	
	$('#remove').on('click', function(){
		undo();
	});
	
	
});

function undo() {
	
	$.fn.bcPaint.clearCanvas();
	for (var key in data) {
		delete data[key];
		break;
	}
	
	draw();
}

function draw() {
	for (var key in data) {
	  if (data.hasOwnProperty(key)) {
		var val = data[key];
		for(var i=0;i<val.length;i++) {
			if(i==0) $.fn.bcPaint.newPath(val[i].x,val[i].y);
			else 
			$.fn.bcPaint.populateData(val[i].x,val[i].y);
		}
	  }
	}
}

var data = {"0":[{x: 553, y: 39} ,
{x: 547, y: 38} ,
{x: 542, y: 37} ,
{x: 532, y: 36} ,
{x: 526, y: 36} ,
{x: 517, y: 36} ,
{x: 509, y: 40} ,
{x: 506, y: 42} ,
{x: 501, y: 47} ,
{x: 495, y: 54} ,
{x: 493, y: 58} ,
{x: 489, y: 69} ,
{x: 488, y: 77} ,
{x: 487, y: 89} ,
{x: 487, y: 97} ,
{x: 487, y: 100},
{x: 488, y: 104},
{x: 492, y: 107},
{x: 494, y: 109},
{x: 505, y: 113},
{x: 518, y: 115},
{x: 525, y: 115},
{x: 541, y: 109},
{x: 555, y: 99} ,
{x: 561, y: 93} ,
{x: 569, y: 81} ,
{x: 575, y: 74} ,
{x: 576, y: 72} ,
{x: 577, y: 68} ,
{x: 578, y: 66} ,
{x: 579, y: 63} ,
{x: 579, y: 60} ,
{x: 579, y: 58} ,
{x: 579, y: 55} ,
{x: 579, y: 52} ,
{x: 579, y: 49} ,
{x: 579, y: 47} ,
{x: 578, y: 45} ,
{x: 577, y: 44} ,
{x: 575, y: 42} ,
{x: 573, y: 41} ,
{x: 572, y: 40} ,
{x: 569, y: 39} ,
{x: 566, y: 38} ,
{x: 564, y: 38} ,
{x: 561, y: 38} ,
{x: 561, y: 38} ,
{x: 559, y: 38} ,
{x: 558, y: 38} ,
{x: 557, y: 38} ,
{x: 557, y: 38} ,
{x: 556, y: 38} ,
{x: 555, y: 38} ,
{x: 554, y: 38} ,
{x: 553, y: 38} ],

"1":[{x: 707, y: 20},
{x: 705, y: 20},
{x: 703, y: 21},
{x: 700, y: 21},
{x: 697, y: 24},
{x: 693, y: 25},
{x: 689, y: 27},
{x: 686, y: 29},
{x: 684, y: 30},
{x: 683, y: 31},
{x: 681, y: 33},
{x: 680, y: 33},
{x: 678, y: 36},
{x: 677, y: 38},
{x: 676, y: 40},
{x: 674, y: 43},
{x: 674, y: 45},
{x: 673, y: 47},
{x: 673, y: 49},
{x: 673, y: 51},
{x: 673, y: 53},
{x: 673, y: 56},
{x: 673, y: 57},
{x: 673, y: 58},
{x: 673, y: 59},
{x: 673, y: 60},
{x: 673, y: 61},
{x: 673, y: 63},
{x: 674, y: 64},
{x: 676, y: 65},
{x: 677, y: 66},
{x: 681, y: 67},
{x: 684, y: 69},
{x: 687, y: 69},
{x: 692, y: 70},
{x: 695, y: 71},
{x: 697, y: 71},
{x: 701, y: 71},
{x: 705, y: 71},
{x: 710, y: 71},
{x: 712, y: 71},
{x: 715, y: 69},
{x: 717, y: 69},
{x: 720, y: 66},
{x: 722, y: 65},
{x: 725, y: 62},
{x: 725, y: 61},
{x: 727, y: 60},
{x: 728, y: 60},
{x: 729, y: 58},
{x: 729, y: 57},
{x: 731, y: 57},
{x: 733, y: 56},
{x: 733, y: 55},
{x: 734, y: 54},
{x: 735, y: 53},
{x: 735, y: 53},
{x: 736, y: 52},
{x: 737, y: 52},
{x: 737, y: 51},
{x: 737, y: 50},
{x: 737, y: 49},
{x: 737, y: 49},
{x: 737, y: 48},
{x: 737, y: 47},
{x: 737, y: 45},
{x: 737, y: 45},
{x: 737, y: 44},
{x: 736, y: 43},
{x: 735, y: 42},
{x: 735, y: 41},
{x: 734, y: 41},
{x: 733, y: 40},
{x: 733, y: 39},
{x: 733, y: 38},
{x: 731, y: 37},
{x: 730, y: 37},
{x: 729, y: 37},
{x: 729, y: 35},
{x: 727, y: 34},
{x: 726, y: 33},
{x: 725, y: 32},
{x: 724, y: 32},
{x: 722, y: 31},
{x: 722, y: 30},
{x: 721, y: 29},
{x: 720, y: 29},
{x: 719, y: 29},
{x: 719, y: 28},
{x: 718, y: 28},
{x: 717, y: 27},
{x: 717, y: 27},
{x: 716, y: 26},
{x: 715, y: 25},
{x: 714, y: 25},
{x: 713, y: 25},
{x: 713, y: 25},
{x: 712, y: 25},
{x: 711, y: 24},
{x: 710, y: 24}]
}


points=[],
lineIndex=0;
function setcolor(color) {
				
				$.fn.bcPaint.setColor(color);
			}
(function( $ ) {
	/**
	* Private variables
	**/
	var isDragged		= false,
		startPoint		= { x:0, y:0 },
		templates 		= {
							container 		: $('<div id="bcPaint-container"></div>'),
							header 			: $('<div id="bcPaint-header"></div>'),
							palette 		: $('<div id="bcPaint-palette"></div>'),
							color 			: $('<div class="bcPaint-palette-color"></div>'),
							canvasContainer : $('<div id="bcPaint-canvas-container"></div>'),
							canvasPane 		: $('<canvas id="bcPaintCanvas"></canvas>'),
							bottom 			: $('<div id="bcPaint-bottom"></div>'),
							buttonReset 	: $('<button id="bcPaint-reset">Reset</button>'),
							buttonSave		: $('<button id="bcPaint-export">Export</button>')
						},
		paintCanvas,
		paintContext;

	/**
	* Assembly and initialize plugin
	**/
	$.fn.bcPaint = function (options) {

		return this.each(function () {
			var rootElement 	= $(this),
				colorSet		= $.extend({}, $.fn.bcPaint.defaults, options),
				defaultColor	= (rootElement.val().length > 0) ? rootElement.val() : colorSet.defaultColor,
				container 		= templates.container.clone(),
				header 			= templates.header.clone(),
				palette 		= templates.palette.clone(),
				canvasContainer = templates.canvasContainer.clone(),
				canvasPane 		= templates.canvasPane.clone(),
				bottom 			= templates.bottom.clone(),
				buttonReset 	= templates.buttonReset.clone(),
				buttonSave 		= templates.buttonSave.clone(),
				color;

			// assembly pane
			rootElement.append(container);
			container.append(header);
			container.append(canvasContainer);
			container.append(bottom);
			header.append(palette);
			canvasContainer.append(canvasPane);
			bottom.append(buttonReset);
			bottom.append(buttonSave);

			// assembly color palette
			$.each(colorSet.colors, function (i) {
        		color = templates.color.clone();
				color.css('background-color', $.fn.bcPaint.toHex(colorSet.colors[i]));
				palette.append(color);
    		});

			// set canvas pane width and height
			var bcCanvas = rootElement.find('canvas');
			var bcCanvasContainer = rootElement.find('#bcPaint-canvas-container');
			bcCanvas.attr('width', bcCanvasContainer.width());
			bcCanvas.attr('height', bcCanvasContainer.height());

			// get canvas pane context
			paintCanvas = document.getElementById('bcPaintCanvas');
			paintContext = paintCanvas.getContext('2d');

			// set color
			$.fn.bcPaint.setColor(defaultColor);

			// bind mouse actions
			paintCanvas.onmousedown = $.fn.bcPaint.onMouseDown;
			paintCanvas.onmouseup = $.fn.bcPaint.onMouseUp;
			paintCanvas.onmousemove = $.fn.bcPaint.onMouseMove;

			// bind touch actions
			paintCanvas.addEventListener('touchstart', function(e){
				$.fn.bcPaint.dispatchMouseEvent(e, 'mousedown');
			});
			paintCanvas.addEventListener('touchend', function(e){
  				$.fn.bcPaint.dispatchMouseEvent(e, 'mouseup');
			});
			paintCanvas.addEventListener('touchmove', function(e){
				$.fn.bcPaint.dispatchMouseEvent(e, 'mousemove');
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
	$.extend(true, $.fn.bcPaint, {

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
			data[lineIndex]=points;
			lineIndex++;
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
		},

		/**
		* Convert color to HEX value
		**/
		toHex : function(color) {
		    // check if color is standard hex value
		    if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
		        return (color.charAt(0) === "#") ? color : ("#" + color);
		    // check if color is RGB value -> convert to hex
		    } else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
		        var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]),
		            pad = function (str) {
		                if (str.length < 2) {
		                    for (var i = 0, len = 2 - str.length; i < len; i++) {
		                        str = '0' + str;
		                    }
		                }
		                return str;
		            };
		        if (c.length === 3) {
		            var r = pad(c[0].toString(16)),
		                g = pad(c[1].toString(16)),
		                b = pad(c[2].toString(16));
		            return '#' + r + g + b;
		        }
		    // else do nothing
		    } else {
		        return false;
		    }
		}

	});

	/**
	* Default color set
	**/
	$.fn.bcPaint.defaults = {
        // default color
        defaultColor : '#FF0000',

        // default color set
      

        // extend default set
        addColors : [],
    };
	
	$.fn.bcPaint.setColor('#FF0000');

})(jQuery);

