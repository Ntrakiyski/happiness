const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const name = document.getElementById('name')
const password = document.getElementById('password')
const newpassword = document.getElementById('newpassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) =>{
	let messages =[]
	if (name.value==='' || name.value==null){
		messages.push('Name is required.')
	}

	if (password.value.length >= 0 & password.value.length <=6){
		messages.push('Password must be longer than 6 charecters.')
	}

	if (newpassword.value != password.value){
		messages.push('The passwords are not the same.')
	}

	if(messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(' ')
	}
	
})