<template>
	<table class="table mt-5">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">Age</th>
				<th scope="col">Role</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in data" :key="user.id">
				<th scope="row">{{ user.id }}</th>
				<td>{{ user.name }}</td>
				<td>{{ user.age }}</td>
				<td>{{ user.role }}</td>
				<td>
					<button class="btn btn-sm btn-danger" type="button" @click="handleDelete(user.id)">
						Delete
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import Users from '../../mixins/Users';
export default {
	name: 'UsersTableComponent',
	data() {
		return {
			data: {},
		};
	},
	mixins: [Users],
	mounted() {
		this.getData();
	},
	methods: {
		async handleDelete(id) {
			await this.deleteUser(id);
			this.getData();
		},

		async getData() {
			this.data = await this.getUsers();
			this.data = this.data.filter((user) => user.role === 'admin');
		},
	},
};
</script>

<style scoped></style>
