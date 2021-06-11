function compute()
{
    document.getElementById("result").innerHTML="";
    var principal = document.getElementById("principal").value;
    if(principal<=0)
    {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
    }else
    {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    console.log(years);
    var interest = principal * years * rate /100;
    console.log(principal*rate);
var year = new Date().getFullYear()+parseInt(years);
document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br> at an interest rate of <mark>"+rate+"%</mark>. <br>You will receive an amount of <mark>" +interest+"</mark>,<br>in the year <mark>"+year+"</mark><br>";
}
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
                document.getElementById(
                  "rate_val").innerText =rateval;
                  document.getElementById("result").innerHTML="";

}
function clearResult()
{
    document.getElementById("result").innerHTML="";
}
     
    
