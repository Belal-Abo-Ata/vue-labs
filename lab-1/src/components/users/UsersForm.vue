<template>
	<form class="px-3 mt-5">
		<div class="row">
			<div class="mb-3 col-6">
				<label for="exampleInputEmail1" class="form-label">Name</label>
				<input
					type="text"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
			</div>
			<div class="mb-3 col-6">
				<label for="exampleInputPassword1" class="form-label">Age</label>
				<input type="text" class="form-control" id="exampleInputPassword1" />
			</div>
		</div>
		<select class="form-select mb-3" aria-label="Default select example">
			<option value="user">User</option>
			<option value="user">Admin</option>
		</select>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</template>

<script>
export default {
	name: 'UsersFromComponent',
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
