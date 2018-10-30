var parent = document.getElementById("list1");
var child = document.getElementById("item1");
var button = document.getElementById("adios");

function removeItem(){
	parent.removeChild(child);
}

button.addEventListener("click", removeItem);