console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New Value';
var img=document.getElementById('madi');
var marginLeft=0;
function moveLeft(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
  
  var interval=setInterval(moveLeft,50);
};