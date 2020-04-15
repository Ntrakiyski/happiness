 function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
 
}



/* Pop up - slider */
document.getElementById('toggle').addEventListener('click',function(){

  document.querySelector('.bg-modal').style.display = 'flex';

  });

document.querySelector('.close').addEventListener('click', function() {

  document.querySelector('.bg-modal').style.display ="none";

}); 

/* Gallery pop up */

document.getElementById('imageGallery').addEventListener('click',function(){

  document.querySelector('.bg-modal2').style.display = 'flex';
  document.querySelector('.bg-modal2').classList.toggle('animated');

  });




document.querySelector('.close2').addEventListener('click', function() {

 
  
   document.querySelector('.bg-modal2').style.display ="none";
   
  });

