<template>
	<users-form-component />
	<users-details-component />
</template>

<script>
import UsersFormComponent from './users/UsersForm.vue';
import UsersDetailsComponent from './users/UsersDetails.vue';
export default {
	name: 'HomeComponent',
	components: { UsersFormComponent, UsersDetailsComponent },
};
</script>

<style scoped></style>
