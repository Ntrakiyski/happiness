/*const element = document.querySelector("expanded-image-section")

document.getElementById('firstimage-section').addEventListener('click',function(){

  document.querySelector('.expanded-image-section').style.visability = 'visible';

  });
document.getElementById('white-line-position').addEventListener('click',function(){


  
  document.querySelector('.expanded-image-section').style.display = 'none';
   

  }); */

  function myFunction() {
   var element = document.getElementById("expanded-image-section");
   element.classList.toggle("show");
   element.classList.remove("hidden");
}
function myFunction2() {
   var element = document.getElementById("expanded-image-section");
   element.classList.toggle("hidden");
   element.classList.remove("show");
}



