function selectCell(x){

	deselectCell();

	x.className = "selected";
	        
    
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