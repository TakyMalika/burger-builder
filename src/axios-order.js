import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a2ebe.firebaseio.com/'
});

export default instance;