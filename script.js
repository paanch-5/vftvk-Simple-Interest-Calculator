function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var si=(p*t*r)/100;
    const d = new Date();
    var n = d.getFullYear();
    var y=t+n;
    document.getElementById ('num').innerHTML ="if you deposit "+p;
    document.getElementById ('num1').innerHTML ="at an intrest rate of "+r;
    return y ;
}

    document.getElementById("demo").innerHTML= "if you deposit "+p+"<br/>"+"at an intrest rate of "+r+<br/>+"you will receive an amount of "+si+"<br/>""in the year "+y;
      
