import axios from 'axios';

const api = axios.create({
    baseURL: 'https://book-crud-service-6dmqxfovfq-et.a.run.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const addTokenToHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export { api, addTokenToHeader };
