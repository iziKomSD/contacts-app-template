import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const registerUserService = async (user) => {
    try {
            const response =  await axios.post('/users/signup', user)
            return response
    } catch (error) {
            console.log(error.message)
        }
}

export {registerUserService}
//
//