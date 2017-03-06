/*    DEMO    */
// var dialog  = new Dialog(
// 	{
// 		'head' : "WHAT UP",
// 		'body' : "Her er noget Tekst",
// 		'foot' : '<button id="tangora_dialog_close">Knap</button><button id="tangora_dialog_continue">Knap</button>'
// 	}
// );
// $elm('#tangora_dialog_close').addEventListener('click', function(){
// 	dialog.hide();
// });
// $elm('#tangora_dialog_continue').addEventListener('click', function(){
// 	CreateProduct(event_variable, false);
// });


(function(window){
	'use strict';
	function define_dialog(){
		var Dialog = function(name = 'hej'){ this.name = name;};

		Dialog.prototype.test = function(){ return 'Hello World'+this.name; }
		return Dialog;
	}
	if(typeof(Dialog) === 'undefined'){
		window.Dialog = define_dialog();
	}else{
		console.log('Dialog is already Defined');
	}
})(window);

/* 
Use Case
Defining a Title:
	Dialog.title = 'Den flotte Title';

Alternativt
	Dialog.head = 'Den Flotte Title';

Defining the Body/Content

	Dialog.body = 'Lorem ipsum bla bah hien skfhei';

Alternativt

	Dialog.content = '';


Dialog.foot = '';

button1 = new document.createElement('button');
button1 = $elm('button');
Dialog.buttons = [
	button1
] 

*/


// Constructor
/*
function Dialog(
		content = {
			'head' : "Title",
			'body' : "Content",
			'foot' : "Footer"
		},
		options = {
			'id': 'tangora_dialog',
			'overlayClass' : 'tangora-dialog--overlay',
			'containerClass' : 'tangora-dialog--container',
			'headClass' : 'tangora-dialog--head',
			'bodyClass' : 'tangora-dialog--body',
			'footClass' : 'tangora-dialog--foot',
			'headElement' : 'h1',
			'bodyElement' : 'p',
			'footElement' : 'span',
			'closeOnOverlayClick' : true,
			'closeOnEscape' : true
		}
	){
	this.options = options;
	this.content = content;
	this.element = false;


	this.create = function(){
		// create & set elements
		this.overlay = this.createOverlay();
		this.container = this.createContainer();
		this.head = this.createHead();
		this.body = this.createBody();
		this.foot = this.createFoot();

		this.buildDialog();
		this.createEvents();

		// refresh main element
		this.element = document.querySelector('#'+this.options.id);

		return this;
	}
	this.destroy = function(){
		if(this.element)
		{
			this.element.remove();
			this.element = false;
			return true;
		}
		return false;
	}


	this.show = function(){
		this.element.style.visibility = 'visible';
	}
	this.hide = function(){
		this.element.style.visibility = 'hidden';
	}

	this.createOverlay = function(){
		var overlay = document.createElement('div');
		overlay.id = this.options.id;
		overlay.className = this.options.overlayClass;
		return overlay;
	}
	this.createContainer = function(){
		var container = document.createElement('div');
		container.className = this.options.containerClass;
		return container;
	}
	this.createHead = function(){
		var head = document.createElement('div');
		head.className = this.options.headClass;
		
		var content = document.createElement(this.options.headElement);
		content.innerHTML = this.content.head;

		head.appendChild(content);
		return head;
	}
	this.createBody = function(){
		var body = document.createElement('div');
		body.className = this.options.bodyClass;

		var content = document.createElement(this.options.bodyElement);
		content.innerHTML = this.content.body;

		body.appendChild(content);

		return body;
	}
	this.createFoot = function(){
		var foot = document.createElement('div');
		foot.className = this.options.footClass;

		var content = document.createElement(this.options.footElement);
		content.innerHTML = this.content.foot;

		foot.appendChild(content);
		return foot;
	}

	// build
	this.buildDialog = function(){
		this.container.appendChild(this.head);
		this.container.appendChild(this.body);
		this.container.appendChild(this.foot);
		this.overlay.appendChild(this.container);
		document.body.prepend(this.overlay);
	}
	this.createEvents = function(){
		// Overlay Hide functionality
		this.events = [];
		var vm = this;
		if(vm.options.closeOnOverlayClick)
		{
			document.querySelector('#'+vm.options.id).addEventListener('click', function(event){
				if(event.target.id == vm.options.id) dialog.hide();
			});
		}
		if(vm.options.closeOnEscape)
		{
			document.addEventListener('keydown', function(event){
				if( event.keyCode == 27)
					dialog.hide();
			});
		}
	}

	this.create();
}
*/

/*
this.createElement = function(
	options = 
	{
		'containerElement' : 'div', 
		'className' : 'tangora', 
		'contentElement' : 'div',
		'content' : ''
	}){
	
	var container = document.createElement(options.containerElement);
	container.className = options.className;
	var content = document.createElement(options.contentElement);
	content.innerHTML = options.content;

	container.appendChild(content);
	return containter;
}

*/
