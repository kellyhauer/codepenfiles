var buttons = document.getElementsByTagName("button");

for(var i = 0; i < buttons.length; i++){
	var button = buttons[i];
	button.addEventListener("click", function() {
		var operation = this.innerHTML;
		var currentResult = parseInt(result.innerHTML);

		var change = operation + "1";
		var changeAsInt = parseInt(change);

		var newResult = currentResult + changeAsInt;

		result.className = "changing";
		setTimeout(function(){
			result.className = " ";
		})

		result.innerHTML = newResult;

	}, 200);
}