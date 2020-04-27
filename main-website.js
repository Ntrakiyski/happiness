var isShown = false;

document.getElementById('profile-header1').addEventListener("click", function(){

	if(isShown){
	document.querySelector('.left-section1').style.display = 'block';
   document.querySelector('.left-section').style.display = 'none';



   isShown = false;
  }
   else{
	document.querySelector('.left-section1').style.display = 'none';
   document.querySelector('.left-section').style.display = 'block';
   isShown = true;
   }

   });

document.getElementById('profile-header').addEventListener("click", function(){

	if(isShown){
	document.querySelector('.left-section').style.display = 'none';
   document.querySelector('.left-section1').style.display = 'block';
  isShown = false;
  }
   else{
	document.querySelector('.left-section').style.display = 'block';
   document.querySelector('.left-section1').style.display = 'none';

   isShown = true;

   }

   });