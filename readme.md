# Tangora Dialog v0.1

A Dialog consists of 3 parts. The `Head` which contains the `Title`, the`Body` which contains the `Content`, the `Foot` which contains the `Buttons`

##### Title
The title is by default an `<h1>` tag and is contained within the `.dialog--head` `<div>`
##### Content
##### Buttons 
The Dialog object contains 3 buttons

- `Confirm`
- `Cancel`
- `Close`

The `Close` and `Confirm` buttons are always present unless otherwise specified. The `Close` button is represented as a small `x` in the top right corner.
The `Confirm` Button is located in the `Foot` section and is used to close the dialog.

When the Dialog is closed an [Event](#events) is emitted defining what happened, by default the `Confirm` button returns `true` while the `Close` & `Cancel` buttons return false.  

##How to use:

###Example

####Simple Dialog
Simple example to show a dialog with a title, message and a close button

	Dialog.title = 'Hello World';
	Dialog.content = 'Smile to the World and the World smiles back';
	Dialog.show();

Dialog with confirm and cancel buttons

	Dialog.title = 'Hello World';
	Dialog.content = 'Smile to the World and the World smiles back';
	Dialog.showConfirmButton = true;
	Dialog.show();

*note:* You can also pass these as an options object to the Dialog

	var dialog = new Dialog({
			'title' : 'Hello world',
			'content' : 'Smile to the World and the World smiles back',
			'showConfirmButton' : true
		});
	dialog.show();

####Dialog with

####Main Object
Once loaded you have access to a `Dialog` object

	Dialog

If you need a new Dialog instance you can instantiate a new object

	var dialog = new Dialog();

You can pass an `Options` object to the `Dialog` object. These [Options](#options)

####Define a Title

	Dialog.head = 'title';
Alternative

	Dialog.title = 'Title';



##Options

##Events