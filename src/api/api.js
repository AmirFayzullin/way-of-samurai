import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '36e87e7e-c9a8-429e-8b4d-edd9007d0ca8',
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data);
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(data => data.data);
    },
    logout() {
        return instance.delete('auth/login')
            .then(data => data.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
            .then((response) => response.data);
    }
};