function selectCell(x){

	deselectCell();

	x.className = "selected";

	adjust(x);
	        
    
}


function selectRows(x){

	deselectCell();

	var table = document.getElementById("table");
	table.rows[x].classList.toggle("selected");

	

}

function selectColumns(x){

	deselectCell();

	var table = document.getElementById("table");
	for(var i = 1; i < table.rows.length;i++){
		table.rows[i].cells[x].classList.toggle("selected"); 
	}
	
	
	
}


function deselectCell(){

	var table = document.getElementById("table");

	for(var i = 1; i < table.rows.length; i++){
		table.rows[i].classList.toggle("selected", false);
		for(var j = 1; j < table.rows[i].cells.length; j++){
		table.rows[i].cells[j].classList.toggle("selected",false); 
		} 
	}
}

function adjust(x){


	var input = document.createElement("INPUT");
	input.setAttribute("type", "text");
	input.setAttribute("id","input");
	input.setAttribute("value", x.innerHTML);
	x.innerHTML = "";
	x.appendChild(input).focus();


	input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  	event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  	if (event.keyCode === 13) {
    // Trigger the button element with a click
    	x.innerHTML = document.getElementById("input").value;

  	}
	});
}






