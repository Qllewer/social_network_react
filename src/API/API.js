import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "cb888e7c-e087-4f2d-a39d-7ff73872b49f"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`,
		).then(response => {
			return response.data;
		});
	},
	follow(userId) {
		// Для подписки/отписки нужно авторизоваться на сервере: https://social-network.samuraijs.com
		return instance.post(`follow/${userId},`, {},)
	},
	unFollow(userId) {
		// Для подписки/отписки нужно авторизоваться на сервере: https://social-network.samuraijs.com
		return instance.delete(`follow/${userId},`)
	},
	getProfile(userId) {
		return profileAPI.getProfile(userId);
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId)
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
			.then(response => response.data)
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe) {
		return instance.post(`auth/login`, {email, password, rememberMe});
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}
