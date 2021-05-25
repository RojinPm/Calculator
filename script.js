function buttonclick(val)
{

   document.getElementById("Screen-output").value=document.getElementById("Screen-output").value+val;


}
function clearDisplay(){

    document.getElementById("Screen-output").value=""
}
function Equalclick()
{

  var text=document.getElementById("Screen-output").value

   var result =eval(text)

   document.getElementById("Screen-output").value=result
}