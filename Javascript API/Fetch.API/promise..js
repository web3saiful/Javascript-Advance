const display=document.getElementById("display");
 
async function getDate(){
    const res= await fetch("http://127.0.0.1:5500/Fetch.API/data.txt")
    const data=res.text();


    display.innerHTML=data;
    

} 