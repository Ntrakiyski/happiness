var isColored = false;
var isClicked = false;

document.getElementById('settings-icon').addEventListener("click", function(){

if(isColored){
   document.querySelector('body').style.background = '#181C22';
  document.querySelector('.back-arrow').style.background = '#181C22';
  document.querySelector('.settings-icon').style.background = '#181C22';
  document.querySelector('.main-title').style.color = '#fff';
   document.querySelector('.image-nextsong-title').style.color = '#fff';
   document.querySelector('.previous-circle').style.background = '#181C22';
   document.querySelector('.next-circle').style.background = '#181C22';
   document.querySelector('.stopedmusic').style.background = '#181C22';
   

isColored = false;
} else{
  document.querySelector('body').style.background = '#fff';
  document.querySelector('.back-arrow').style.background = '#fff';
  document.querySelector('.settings-icon').style.background = '#fff';
  document.querySelector('.main-title').style.color = '#181C22';
  document.querySelector('.image-nextsong-title').style.color = '#181C22';
   document.querySelector('.previous-circle').style.background = '#fff';
   document.querySelector('.next-circle').style.background = '#fff';
   document.querySelector('.stopedmusic').style.background = '#fff';
isColored = true;
}


});

document.getElementById('pause-circle').addEventListener("click", function(){

if(isClicked){
   document.querySelector('.pausebutton').style.display = 'block';
  document.querySelector('.playmusic').style.display = 'none';
  document.querySelector('.stopedmusic').style.display = 'none';


isClicked = false;
} else{
 document.querySelector('.pausebutton').style.display = 'none';
  document.querySelector('.playmusic').style.display = 'block';
  document.querySelector('.stopedmusic').style.display = 'block';

isClicked = true;
}


});