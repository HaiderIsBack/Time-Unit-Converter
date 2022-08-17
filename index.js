var primary = document.getElementById("primary");
var secondary = document.getElementById("secondary");

var primeUnit = document.getElementById("primeUnit");
var secUnit = document.getElementById("secUnit")

primary.value = "1";
secondary.value = "60";

primeUnit.value = "Hr";
secUnit.value = "Min";

function Converter(){
  var result;
  if(primary.value === "" || secondary.value === ""){
    Javascript:alert("Fields are Empty")
  }
  
  //HOUR
  if(primeUnit.value === "Hr" && secUnit.value === "Min"){
    result = primary.value * 60;
    secondary.value = result;
  }
  if(primeUnit.value === "Hr" && secUnit.value === "Sec"){
    result = primary.value * 3600;
    secondary.value = result;
  }
  if(primeUnit.value === "Hr" && secUnit.value === "M-Sec"){
    result = primary.value * 3600000;
    secondary.value = result;
  }
  
  //Minute
  if(primeUnit.value === "Min" && secUnit.value === "Hr"){
    result = primary.value / 60;
    secondary.value = result;
  }
  if(primeUnit.value === "Min" && secUnit.value === "Sec"){
    result = primary.value * 60;
    secondary.value = result;
  }
  if(primeUnit.value === "Min" && secUnit.value === "M-Sec"){
    result = primary.value * (60 * 1000);
    secondary.value = result;
  }
  
  //Seconds
  if(primeUnit.value === "Sec" && secUnit.value === "Min"){
    result = primary.value / 60;
    secondary.value = result;
  }
  if(primeUnit.value === "Sec" && secUnit.value === "Hr"){
    result = primary.value / (60*60);
    secondary.value = result;
  }
  if(primeUnit.value === "Sec" && secUnit.value === "M-Sec"){
    result = primary.value * 1000;
    secondary.value = result;
  }
  
  //Mili-Second
  if(primeUnit.value === "M-Sec" && secUnit.value === "Min"){
    result = primary.value / 60000;
    secondary.value = result;
  }
  if(primeUnit.value === "M-Sec" && secUnit.value === "Sec"){
    result = primary.value / 1000;
    secondary.value = result;
  }
  if(primeUnit.value === "M-Sec" && secUnit.value === "Hr"){
    result = primary.value / 3600000;
    secondary.value = result;
  }
  
  //Same
  if(primeUnit.value === secUnit.value){
    result = primary.value;
    secondary.value = result;
  }
}

var holder;
var obj;

function Clear(num){
  holder = num;
  if(num == "1"){
    obj = primeUnit.value;
    primeUnit.value = "";
  }else{
    obj = secUnit.value;
    secUnit.value = "";
  }
}

function swap(){
  var temp = primeUnit.value;
  primeUnit.value = secUnit.value;
  secUnit.value = temp;
  
  temp = primary.value;
  primary.value = secondary.value;
  secondary.value = temp;
}

document.addEventListener('click',function(e){
  if(e.target.id != "primeUnit" && e.target.id != "secUnit"){
    if(primeUnit.value == "" || secUnit.value == ""){
      if(holder == "1"){
        primeUnit.value = obj;
      }else {
        secUnit.value = obj;
      }
    }
  }
});