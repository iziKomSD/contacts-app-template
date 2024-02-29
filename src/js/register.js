import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { registerUserService } from './api';

const btnRegister = document.querySelector('.sign-up-btn')
const instance = basicLightbox.create(
	document.querySelector('#register')
)

btnRegister.addEventListener('click', openModal)

function openModal() {
    //call form to show
    instance.show();
    //find form and put listener to get data from form
    const form = document.querySelector(".register-form");
    form.addEventListener("submit", registerUser);
    
}
async function registerUser(event) {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value.trim();
    const email = event.currentTarget.elements.email.value.trim();
    const password = event.currentTarget.elements.password.value.trim();
    try {
        const data = await registerUserService({name, email, password})
        localStorage.setItem("token", data.token)
    } catch (error) {

    }

}