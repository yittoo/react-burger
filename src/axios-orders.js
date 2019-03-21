import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bc8c4.firebaseio.com/'
})

export default instance;