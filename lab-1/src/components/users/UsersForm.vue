<template>
	<form class="px-3 mt-5" @submit.prevent="handleSubmit()">
		<div class="row">
			<div class="mb-3 col-6">
				<label for="exampleInputEmail1" class="form-label">Name</label>
				<input
					type="text"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					v-model="name"
				/>
				<!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
			</div>
			<div class="mb-3 col-6">
				<label for="exampleInputPassword1" class="form-label">Age</label>
				<input type="text" class="form-control" id="exampleInputPassword1" v-model.number="age" />
			</div>
		</div>
		<select class="form-select mb-3" aria-label="Default select example" v-model="role">
			<option value="user">User</option>
			<option value="admin">Admin</option>
		</select>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</template>

<script>
import Users from '../../mixins/Users';
export default {
	name: 'UsersFromComponent',
	data() {
		return {
			name: '',
			age: '',
			role: 'user',
		};
	},
	methods: {
		handleSubmit() {
      if (this.name !== '' && this.age > 0) {
        const id = Math.round(Math.random() * 1000);
        this.addUser({id: id, name: this.name, age: this.age, role: this.role})
      }
      this.$router.push('/')
		},
	},
  mixins: [Users],
};
</script>

<style scoped>
@media screen and (width >= 980px) {
	form,
	select {
		width: 50%;
		margin-inline: auto;
		text-align: center;
	}
}
</style>
