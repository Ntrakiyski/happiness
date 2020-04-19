var isColored = false;
document.getElementById('settings-icon').addEventListener("click", function(){

if(isColored){
   document.querySelector('body').style.background = '#181C22';
  document.querySelector('.back-arrow').style.background = '#181C22';
  document.querySelector('.settings-icon').style.background = '#181C22';
  document.querySelector('.playimage').style.background = '#181C22';
  document.querySelector('.playimage2').style.background = '#181C22';
  document.querySelector('.playimage3').style.background = '#181C22';
  document.querySelector('.playimage4').style.background = '#181C22';
  document.querySelector('.playimage5').style.background = '#181C22';
  document.querySelector('.preview-anounce').style.color = '#fff';
  document.querySelector('.main-title').style.color = '#fff';
  document.querySelector('.preview-title').style.color = '#fff';
  document.querySelector('.preview-image').style.opacity = '1';
isColored = false;
} else{
  document.querySelector('body').style.background = '#fff';
  document.querySelector('.back-arrow').style.background = '#fff';
  document.querySelector('.settings-icon').style.background = '#fff';
  document.querySelector('.playimage').style.background = '#fff';
  document.querySelector('.playimage2').style.background = '#fff';
  document.querySelector('.playimage3').style.background = '#fff';
  document.querySelector('.playimage4').style.background = '#fff';
  document.querySelector('.playimage5').style.background = '#fff';
  document.querySelector('.preview-anounce').style.color = '#A6A5AF';
  document.querySelector('.main-title').style.color = '#181C22';
  document.querySelector('.preview-title').style.color = '#181C22';
  document.querySelector('.preview-image').style.opacity = '0.9';
isColored = true;
}


});

  var dots = document.getElementById("dots");
  var moreText = document.getElementById("moretextlink1");
  var moreT = document.getElementById("moreT");
   var moreText2 = document.getElementById("moretextlink2");
  

function readmoreFunction() {

    dots.style.display = "none";
    moreText.style.display = "none";
  	moreT.style.display = "inline";
    moreText2.style.display = "inline";
  


};

function readlessFunction() {

    dots.style.display = "inline";
    moreText.style.display = "inline";
  	moreT.style.display = "none";
    moreText2.style.display = "none";
 
}

