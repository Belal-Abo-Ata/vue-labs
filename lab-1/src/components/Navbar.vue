<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<router-link class="navbar-brand" to="/">
					<img class="img-fluid mw-100 logo" src="../assets/logo.png" />
				</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/users">Users</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/users/add">Add user</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavbarComponent',
};
</script>

<style scoped>
.logo {
	height: 30px;
}
</style>
