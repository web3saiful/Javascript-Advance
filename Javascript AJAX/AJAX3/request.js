const getButton=document.getElementById
('get-button');
const sendButton=document.getElementById
('get-button');

const getData=function(){
  const xhr=new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
  xhr.send();
};

const sendData=function(){

};


getButton.addEventListener("click",getDate);
sendButton.addEventListener("click",sendDate);