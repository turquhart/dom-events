var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("list1");

function addItemOnClick(){
	if(input.value.length > 0){
		addItem();
	}
}

function addItemOnEnter(event){
	if(input.value.length > 0 && event.keyCode==13){
		addItem();
	}
}

function addItem(){
	li = document.createElement("li");
	li.classList.add("listItem");
	li.appendChild(document.createTextNode(input.value + "  "));
	erase = document.createElement("button");
	erase.classList.add("deleteBtn");
	erase.appendChild(document.createTextNode("X"));
	erase.addEventListener("click", deleteItem);
	li.appendChild(erase);
	ul.appendChild(li);
	input.value = "";
}

function deleteItem(){
	this.parentNode.remove();
}

button.addEventListener("click", addItemOnClick);
input.addEventListener("keypress", addItemOnEnter);