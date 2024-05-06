<template>
	<div class="mt-5 d-flex justify-content-center align-items-center gap-5">
		<button class="btn btn-lg btn-primary" @click="filterUsers('user')">Users</button>
		<button class="btn btn-lg btn-primary" @click="filterUsers('admin')">Admin</button>
	</div>
	<component :is="UserComponent" />
</template>

<script>
import Users from '../../mixins/Users';
import AdminsTableComponent from './AdminsTable.vue';
import UsersTableComponent from './UsersTable.vue';
export default {
	name: 'UsersDetailsComponent',
	components: { UsersTableComponent, AdminsTableComponent },
	data() {
		return {
			UserComponent: UsersTableComponent,
		};
	},
	mixins: [Users],
	provide() {
		return {
			handleDelete: this.handleDelete,
		};
	},
	methods: {
		async handleDelete(id) {
			await this.deleteUser(id);
		},
		filterUsers(role) {
			this.UserComponent = role === 'user' ? UsersTableComponent : AdminsTableComponent;
		},
	},
};
</script>

<style scoped></style>
