function hiddenfunc(){

       var clicks = document.getElementById("chat_pop");
    
        if(clicks.style.display === "none"){
            clicks.style.display = "block";
        }else{
            clicks.style.display = "none";
        } 
    
};

function chatTime(event){
	if(event.keyCode == 13){
		var text = document.getElementById("messages");	
		var input = document.getElementById("messsageField");

		text.innerHTML += "You: " + input.value + "<br>";

		input.value =  "";
	}
};


