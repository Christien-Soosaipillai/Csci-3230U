function Hello(){
	document.getElementById("thisButton").innerHTML = "Hello World";
}

function selectCell(x){
	
	document.getElementById(x.id).classList.add('danger');

	//document.getElementById(x.id).classList.remove('danger');
	        
    
}

function selectRow(x){

	//deselectCell();

	var table = document.getElementById("unitInfo");
	table.x[rows].classList.toggle('danger');

	

}
	
function selectColumns(x){

	//deselectCell();

	var table = document.getElementById("unitInfo");
	for(var i = 1; i < table.rows.length;i++){
		table.rows[i].cells[x].classList.toggle("selected"); 
	}
	
	

function deselectCell(){

	var table = document.getElementById("unitInfo");
	for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
   }  
}
}

	
}