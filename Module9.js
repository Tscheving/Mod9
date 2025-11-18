(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Module9_atlas_1", frames: [[1323,387,228,63],[1553,387,216,63],[908,1429,916,248],[0,1791,754,49],[908,1679,896,167],[0,0,1321,577],[0,579,1640,423],[0,1004,1640,423],[1323,0,582,385],[0,1429,906,360]]},
		{name:"Module9_atlas_2", frames: [[0,812,698,1182],[0,0,1440,810],[700,812,698,1182]]},
		{name:"Module9_atlas_3", frames: [[0,0,2016,1334]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Pngtreecoolgamebuttonsandgame_5268149 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BackBtn = function() {
	this.initialize(ss["Module9_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Buttonblue = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Buttongreen = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CapybarasasFish_ALentenException = function() {
	this.initialize(ss["Module9_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ForwardBtn = function() {
	this.initialize(ss["Module9_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot20251111185618 = function() {
	this.initialize(ss["Module9_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot20251111185832 = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Title = function() {
	this.initialize(ss["Module9_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btn_reset = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-54.5,-19,0.5,0.5);

	this.instance_1 = new lib.Buttongreen();
	this.instance_1.setTransform(-67.5,-31.05,0.0823,0.1468);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-31,135.1,62.1);


(lib.btn_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ForwardBtn();
	this.instance.setTransform(-51.05,-86.45,0.1463,0.1463);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-86.4,102.1,172.9);


(lib.btn_check = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-55.45,-18.95,0.5,0.5);

	this.instance_1 = new lib.Buttonblue();
	this.instance_1.setTransform(-67.45,-31.5,0.0823,0.1489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-31.5,134.9,63);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BackBtn();
	this.instance.setTransform(-54.15,-91.75,0.1552,0.1552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,-91.7,108.30000000000001,183.5);


(lib.mc_container2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		// Make sure DOM is ready
		var stage = this;
		
		this.btn_check2.on("click", onCheck.bind(this));
		function onCheck(e) {
		    var textInput2 = document.getElementById("text_input2");
		    if (textInput2) {
		        var answer2 = textInput2.value;
		        if (answer2.toUpperCase() === "FISH") {
		            stage.feedback2.text = "Great job.";
		        } else {
		            stage.feedback2.text = "Sorry, please try again.";
		        }
		    }
		}
		
		// Style the text input
		setTimeout(function() {
		    var textInput2 = document.getElementById("text_input2");
		    if (textInput2) {
		        textInput2.style.fontSize = "100px";
		        textInput2.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		    }
		}, 100); // Increased timeout slightly
		
		this.btn_reset2.on("click", onReset.bind(this));
		function onReset(e) {
		    var textInput2 = document.getElementById("text_input2");
		    if (textInput2) {
		        textInput2.value = "";
		        stage.feedback2.text = "";
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.feedback2 = new cjs.Text("", "bold 36px 'Georgia'");
	this.feedback2.name = "feedback2";
	this.feedback2.textAlign = "center";
	this.feedback2.lineHeight = 43;
	this.feedback2.lineWidth = 237;
	this.feedback2.parent = this;
	this.feedback2.setTransform(218.75,-22.05);

	this.btn_reset2 = new lib.btn_reset();
	this.btn_reset2.name = "btn_reset2";
	this.btn_reset2.setTransform(282.25,-122.9);
	new cjs.ButtonHelper(this.btn_reset2, 0, 1, 1);

	this.btn_check2 = new lib.btn_check();
	this.btn_check2.name = "btn_check2";
	this.btn_check2.setTransform(138.7,-122.45);
	new cjs.ButtonHelper(this.btn_check2, 0, 1, 1);

	this.text_input2 = new lib.an_TextInput({'id': 'text_input2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.text_input2.name = "text_input2";
	this.text_input2.setTransform(-162.15,-122.25,3.7448,2.8299,0,0,0,50.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_input2},{t:this.btn_check2},{t:this.btn_reset2},{t:this.feedback2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_container2, new cjs.Rectangle(-351.6,-155.3,701.4000000000001,309.3), null);


(lib.mc_container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		// Make sure DOM is ready
		var stage = this;
		
		this.btn_check.on("click", onCheck.bind(this));
		function onCheck(e) {
		    var textInput = document.getElementById("text_input");
		    if (textInput) {
		        var answer = textInput.value;
		        if (answer.toUpperCase() === "CAPYBARA") {
		            stage.feedback.text = "Great job.";
		        } else {
		            stage.feedback.text = "Sorry, please try again.";
		        }
		    }
		}
		
		// Style the text input
		setTimeout(function() {
		    var textInput = document.getElementById("text_input");
		    if (textInput) {
		        textInput.style.fontSize = "100px";
		        textInput.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
		    }
		}, 100); // Increased timeout slightly
		
		this.btn_reset.on("click", onReset.bind(this));
		function onReset(e) {
		    var textInput = document.getElementById("text_input");
		    if (textInput) {
		        textInput.value = "";
		        stage.feedback.text = "";
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.feedback = new cjs.Text("", "bold 48px 'Georgia'");
	this.feedback.name = "feedback";
	this.feedback.textAlign = "center";
	this.feedback.lineHeight = 57;
	this.feedback.lineWidth = 234;
	this.feedback.parent = this;
	this.feedback.setTransform(220.45,-30.1);

	this.btn_reset = new lib.btn_reset();
	this.btn_reset.name = "btn_reset";
	this.btn_reset.setTransform(287.95,-125.05);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 1);

	this.btn_check = new lib.btn_check();
	this.btn_check.name = "btn_check";
	this.btn_check.setTransform(152.9,-124.6);
	new cjs.ButtonHelper(this.btn_check, 0, 1, 1);

	this.text_input = new lib.an_TextInput({'id': 'text_input', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.text_input.name = "text_input";
	this.text_input.setTransform(-163.1,-125.85,3.84,2.7273,0,0,0,50.1,11.1);

	this.instance = new lib.Screenshot20251111185618();
	this.instance.setTransform(-298.55,-32.1,0.1411,0.1411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_input},{t:this.btn_check},{t:this.btn_reset},{t:this.feedback}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_container, new cjs.Rectangle(-357.4,-157.4,712.9,313.5), null);


// stage content:
(lib.Module9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btn_back.visible=false;
		this.btn_next.visible=true;
		this.btn_next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		function fl_ClickToGoToAndPlayFromFrame ()
		{
		this.btn_back.visible=true;
		this.btn_next.visible=false;
		this.gotoAndPlay(1);
		this.stop();
		}
	}
	this.frame_1 = function() {
		this.stop();
		this.btn_back.visible=true;
		this.btn_next.visible=false;
		this.btn_back.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		function fl_ClickToGoToAndPlayFromFrame ()
		{
		this.gotoAndPlay(0);
		this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// contents
	this.btn_next = new lib.btn_next();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(676.05,119.45);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.mc_container = new lib.mc_container();
	this.mc_container.name = "mc_container";
	this.mc_container.setTransform(431.55,408.4,1,1,0,0,0,-1,-0.7);

	this.ms_container2 = new lib.mc_container2();
	this.ms_container2.name = "ms_container2";
	this.ms_container2.setTransform(435.85,404.45,1,1,0,0,0,-0.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_container},{t:this.btn_next}]}).to({state:[{t:this.ms_container2}]},1).wait(1));

	// direction
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(134.05,164.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(89.05,75.65,0.5,0.5);

	this.instance_2 = new lib.CapybarasasFish_ALentenException();
	this.instance_2.setTransform(118,387,0.2125,0.2125);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(85,64.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// bkgd_image
	this.instance_4 = new lib.Title();
	this.instance_4.setTransform(506,333,0.3245,0.7443);

	this.instance_5 = new lib.Title();
	this.instance_5.setTransform(69,333,0.4404,0.7443);

	this.instance_6 = new lib.Title();
	this.instance_6.setTransform(34,237,0.511,0.2527);

	this.instance_7 = new lib.Pngtreecoolgamebuttonsandgame_5268149();
	this.instance_7.setTransform(0,0,0.4765,0.383);

	this.instance_8 = new lib.Screenshot20251111185832();
	this.instance_8.setTransform(0,0,1.3814,1.5611);

	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(692.15,116.75);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.btn_back}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,404,301);
// library properties:
lib.properties = {
	id: '0DE532515C350146AF3A507320318A6E',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Module9_atlas_1.png?1763452767715", id:"Module9_atlas_1"},
		{src:"images/Module9_atlas_2.png?1763452767715", id:"Module9_atlas_2"},
		{src:"images/Module9_atlas_3.png?1763452767715", id:"Module9_atlas_3"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1763452767724", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1763452767724", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1763452767724", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0DE532515C350146AF3A507320318A6E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;