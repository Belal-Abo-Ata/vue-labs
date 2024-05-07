import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'http://localhost:3000/users';

const store = createStore({
	state() {
		return {
			users: [],
			user: {},
		};
	},

	mutations: {
		GET_ALL_USERS(state, users) {
			state.users = users;
		},

		GET_USER_BY_ID(state, id) {
			state.users = users;
		},

		// CREATE_USER(state, userInfo) {

		// },

		// UPDATE_USER(state, userInfo) {

		// },

		// DELETE_USER(state, id) {

		// }
	},

	actions: {
		async getAllUsers({ commit }) {
			try {
				const response = await axios.get(baseURL);
				commit('GET_ALL_USERS', response.data);
			} catch (error) {
				console.error(error);
			}
		},

		async getUserById({ commit }, id) {
			try {
				const response = await axios.get(`${baseURL}/${id}`);
				commit('GET_USER_BY_ID', response.data);
			} catch (error) {
				console.error(error);
			}
		},

		async createUser({ commit }, userInfo) {
			try {
				await axios.post(baseURL, userInfo);
			} catch (error) {
				console.error(error);
			}
		},

		async updateUser({ commit }, userInfo) {
			try {
				await axios.put(`${baseURL}/${userInfo.id}`, userInfo);
			} catch (error) {
				console.error(error);
			}
		},

		async deleteUser({ commit }, id) {
			try {
				await axios.delete(`${baseURL}/${id}`);
			} catch (error) {
				console.log(error);
			}
		},
	},

	getters: {},
});

export default store;
