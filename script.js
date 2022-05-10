function ShowDate(){
  document.getElementById("pDate").innerHTML=new Date();
}

function upperCase(){
  let inputText=document.getElementById("fname")
  inputText.value=inputText.value.toUpperCase();
}

document.getElementById("divA").addEventListener("click",changeColorA)
document.getElementById("divA").addEventListener("click",changeTextClickA)
document.getElementById("divA").addEventListener("mouseover",changeTextA)
document.getElementById("divA").addEventListener("mouseout",changeTextOutA)

function changeColorA(){
  document.getElementById("divA").style.backgroundColor="lightblue";
  
}

function changeTextA(){
  document.getElementById("divA").innerHTML="Text changed after mouseover event !"
}

function changeTextOutA(){
  document.getElementById("divA").innerHTML="Text changed after mouseout event !";
  document.getElementById("divA").style.backgroundColor="white";
}

function changeTextClickA(){
  document.getElementById("divA").innerHTML="Text changed after click event !"
}

// Event bubbling : child element events get triggered 1st and get propagated upwards towards the parent elements
// Event Capturing :setting the useCapture parameter to true would mean the events are propagated from parent to child which is called event capturing
document.getElementById("PARENT").addEventListener("click",function(){
  alert('I am the PARENT');
},true)

document.getElementById("CHILD").addEventListener("click",function(){
  alert('I am the CHILD');
},true)