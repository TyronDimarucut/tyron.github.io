function addNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) + parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function subNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) - parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function mulNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) * parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function divNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) / parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function reset()
{
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("result").value = "";
}