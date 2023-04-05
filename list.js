'use strict';


let isOpen1=false;
const check1=document.querySelector("#list_1");
check1.addEventListener("click", function(){
    if(isOpen1 == false){
      document.querySelector("#hidden_content1").style.display="block";
      check1.innerHTML="X";
      isOpen1=true;
    }
    else{
      document.querySelector("#hidden_content1").style.display="none";
      check1.innerHTML="+";
      isOpen1=false;
    }
});

let isOpen2=false;
const check2=document.querySelector("#list_2");
check2.addEventListener("click", function(){
    if(isOpen2 == false){
      document.querySelector("#hidden_content2").style.display="block";
      check2.innerHTML="X";
      isOpen2=true;
    }
    else{
      document.querySelector("#hidden_content2").style.display="none";
      check2.innerHTML="+";
      isOpen2=false;
    }
});

let isOpen3=false;
const check3=document.querySelector("#list_3");
check3.addEventListener("click", function(){
    if(isOpen3 == false){
      document.querySelector("#hidden_content3").style.display="block";
      check3.innerHTML="X";
      isOpen3=true;
    }
    else{
      document.querySelector("#hidden_content3").style.display="none";
      check3.innerHTML="+";
      isOpen3=false;
    }
});

let isOpen4=false;
const check4=document.querySelector("#list_4");
check4.addEventListener("click", function(){
    if(isOpen4 == false){
      document.querySelector("#hidden_content4").style.display="block";
      check4.innerHTML="X";
      isOpen4=true;
    }
    else{
      document.querySelector("#hidden_content4").style.display="none";
      check4.innerHTML="+";
      isOpen4=false;
    }
});

let isOpen5=false;
const check5=document.querySelector("#list_5");
check5.addEventListener("click", function(){
    if(isOpen5 == false){
      document.querySelector("#hidden_content5").style.display="block";
      check5.innerHTML="X";
      isOpen5=true;
    }
    else{
      document.querySelector("#hidden_content5").style.display="none";
      check5.innerHTML="+";
      isOpen5=false;
    }
});

let isOpen6=false;
const check6=document.querySelector("#list_6");
check6.addEventListener("click", function(){
    if(isOpen6 == false){
      document.querySelector("#hidden_content6").style.display="block";
      check6.innerHTML="X";
      isOpen6=true;
    }
    else{
      document.querySelector("#hidden_content6").style.display="none";
      check6.innerHTML="+";
      isOpen6=false;
    }
});

let isOpen7=false;
const check7=document.querySelector("#list_7");
check7.addEventListener("click", function(){
    if(isOpen7 == false){
      document.querySelector("#hidden_content7").style.display="block";
      check7.innerHTML="X";
      isOpen7=true;
    }
    else{
      document.querySelector("#hidden_content7").style.display="none";
      check7.innerHTML="+";
      isOpen7=false;
    }
});