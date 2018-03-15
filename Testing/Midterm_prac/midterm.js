$(document).ready(function(){
$("#unitInfo tbody tr").click(function(){
   $(this).addClass('danger').siblings().removeClass('danger');   
   
   var SID = $(this).children().eq(0).text();
   var FN = $(this).children().eq(1).text();
   var LN = $(this).children().eq(2).text();
   var GRADE = $(this).children().eq(3).text();
   
   alert("SID: " +SID + "\n" +
   		 "First Name: " +FN + "\n" +
   		 "Last Name: " +LN + "\n" +
   		 "Grade: " +GRADE + "\n");

 $("#SID").val($(this).children().eq(0).text());
 $("#FN").val($(this).children().eq(1).text());
 $("#LN").val($(this).children().eq(2).text());
 $("#GRADE").val($(this).children().eq(3).text());



});


$('#Add').click(function(){
	alert("button");
   $('#unitInfo tbody:last-child').append(
            '<tr>'// need to change closing tag to an opening `<tr>` tag.
            +'<td>'+ $('#SID').val()+'</td>'
            +'<td>'+ $('#FN').val()+'</td>'
            +'<td>'+ $('#LN').val()+'</td>'
            +'<td>'+ $('#GRADE').val()+'</td>'
            +'</tr>').html();




});


function getRow() {
    return $('.danger');
}

$("#Update").click(function(){
      var newrow = getRow();
      newrow.children().eq(0).text($('#SID').val());
      newrow.children().eq(1).text($('#FN').val());
      newrow.children().eq(2).text($('#LN').val());
      newrow.children().eq().text($('#GRADE').val());
      return false;
      });




});



