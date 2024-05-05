<template>
	<div class="container">
		<navbar-component />
		<router-view />
	</div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
export default {
	name: 'App',
	components: {
		NavbarComponent,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
