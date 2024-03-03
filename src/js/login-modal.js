import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { loginUserService } from './api';

const btnLogin = document.querySelector('.login-btn');
const instance = basicLightbox.create(document.querySelector('#login'));

btnLogin.addEventListener('click', openModal);

function openModal() {
	//call form to show
	instance.show();
	//find form and put listener to get data from form
	const form = document.querySelector('.login-form');
	form.addEventListener('submit', loginUser);
}
async function loginUser(event) {
	event.preventDefault();
	const email = event.currentTarget.elements.email.value.trim();
	const password = event.currentTarget.elements.password.value.trim();
	try {
		const data = await loginUserService({ email, password });
		localStorage.setItem('token', data.token);
		instance.close();
		location.replace('/contacts.html');
	} catch (error) {
		console.log(error.message);
	}
}
