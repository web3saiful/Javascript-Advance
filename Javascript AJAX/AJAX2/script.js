function loadData(callbackF){
    const xhr=new XMLHttpRequest();


    xhr.onload=function(){
    callbackF(this);
    };

    xhr.open("GET", "./data/data.txt" );

    xhr.send();  
}


  
function myCallback1(xhr){
    const container=document.getElementById("demo");
    container.innerHTML=xhr.responseText;
}
  
function myCallback2(xhr){
    const container=document.getElementById("demo2");
    container.innerHTML=xhr.responseText;
}