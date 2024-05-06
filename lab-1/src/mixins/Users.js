import axios from 'axios';

export default {
	data() {
		return {
			DB_URL: process.env.VUE_APP_DB_URL,
			endpoint: process.env.VUE_APP_USERS_ENDPOINT,
		};
	},
	methods: {
		async getUsers() {
			let users = await axios.get(`${this.DB_URL}/${this.endpoint}`);
			users = await users.data;
			return users;
		},
		async addUser(user) {
			await axios.post(`${this.DB_URL}/${this.endpoint}`, user);
		},
		async deleteUser(id) {
			try {
				await axios.delete(`${this.DB_URL}/${this.endpoint}/${id}`);
				console.log(`${id} deleted successfully`);
			} catch (e) {
				console.log(e);
			}
		},
		async getUser(id) {
			let user = await axios.get(`${this.DB_URL}/${this.endpoint}/${id}`);
			user = await user.data;
			return user;
		},
	},
};
