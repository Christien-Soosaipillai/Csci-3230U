$(document).ready(function(){

   

   $("#table tr td").click(function(){
      var tdata = $(this) +"td" 

      $(this).closest('table').find('td').not(this).removeClass('selected');  
      $(this).toggleClass('selected');

     
 
   });


   $("#table tr th").click(function(){
      console.log($(this).not('th') );

      $(this).closest('table').find('td').not(this).removeClass('selected');  
      $(this).siblings().not('th').toggleClass('selected');
         
   });


   var column_count;
   var row_count;



   $("#table tr:nth-child(1) th").click(function(){
      column_selected =  $( "th").index(this);
      console.log("col: "+ column_selected);
      column_count = $("#table").find('tr')[0].cells.length;
      row_count = $('#table tr').length;
      console.log("Column: " + column_count + "," + "Row:" + row_count );
         

      $("#table tr td").closest('table').find('td').not(this).removeClass('selected');

      for(var i = 1; i <= row_count; i++){
         console.log("for: "+column_selected);
         var select = $("#table tr:nth-child("+ i +") td:eq("+(column_selected-1)+")");
         select.toggleClass('selected');

      }
   });


   var inputField =document.createElement("INPUT");
   inputField.setAttribute("type", "text");
   var val;

   $("#table tr td").click(function(){

      val = $(this).html();
      inputField.setAttribute("value", val);
      $(this).html(inputField);
      inputField.focus();

   });

   $("#table tr td").keypress(function(k){
      if(event.keyCode == 13){
      val = inputField.value;

      $(this).html(val);
      inputField.blur();

      
   }
   });











});



