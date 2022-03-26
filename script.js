function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rateval;
}

function checkprinc(){
    var princ = document.getElementById("principal");
    if(princ.value <= 0)
        {
            alert("enter positive number");
            princ.focus();
    } 
        
}


function compute()
{
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100 ; 
   var year  = new Date().getFullYear() + parseInt(years); 
   var result = document.getElementById("result");
   result.innerHTML =
    "if you deposite " + "<mark>"+principal + "</mark>"+", <br/>" 
   + "at an interest rate of " + "<mark>"+rate+"</mark>" +"%. <br/>"
   + "you will receive an aamount of " + "<mark>"+interest+"</mark>"+",<br/>"
   + "in the year " + "<mark>"+year+"</mark>" ; 
}
