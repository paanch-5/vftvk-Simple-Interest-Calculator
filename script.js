function compute()
{
     p = document.getElementById("principal").value;
     r = document.getElementById("rate").value;
     t = document.getElementById("years").value;
     si=(p*t*r)/100;
     result = document.getElementById("result");
    const d = new Date();
    var n = d.getFullYear();
    var y=t+n;
    
                result.innerHTML ="if you deposit "+p+"<br/>"+"at an intrest rate of "+r+<br/>+"you will receive an amount of "+si+"<br/>""in the year "+y;
       
    
}

    
