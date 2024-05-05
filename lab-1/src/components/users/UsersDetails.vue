<template>
	<div class="mt-5 d-flex justify-content-center align-items-center gap-5">
		<button class="btn btn-lg btn-primary">Users</button>
		<button class="btn btn-lg btn-primary">Admin</button>
	</div>
	<table class="table mt-5">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">Age</th>
				<th scope="col">Role</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>29</td>
				<td>Admin</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: 'UsersDetailsComponent',
};
</script>

<style scoped></style>
