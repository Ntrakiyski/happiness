var button = document.querySelector('.label-roundbox-creative');
var isColored = false;
var isChanged = false;
button.addEventListener("click", function(){

if(isColored){
document.querySelector('.creative-section').style.background = "#FFFBEC";
isColored = false;
} else{
document.querySelector('.creative-section').style.background = "white";
isColored = true;
}

if(isChanged){
var labelText = document.getElementById('myLabel');
labelText.innerHTML = "Ongoing"; 
document.getElementById('textdis').style.display='block';
document.getElementById('textdis2').style.display='block';
document.getElementById('bulletsdis').style.display='block';
document.getElementById('creative-id').style.height='135px';
document.getElementById('creative-roundbox-id').style.top='75px';
isChanged = false;
} else{
  var labelText = document.getElementById('myLabel');
labelText.innerHTML = "Done"; 
document.getElementById('textdis').style.display='none';
document.getElementById('textdis2').style.display='none';
document.getElementById('bulletsdis').style.display='none';
document.getElementById('creative-id').style.height='90px';
document.getElementById('creative-roundbox-id').style.top='20px';

isChanged = true;

}





});      