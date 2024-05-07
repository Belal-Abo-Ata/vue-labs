<template>
	<div class="p-4 sm:ml-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<div
			v-for="{ id, firstName, lastName, age, image } in users"
			:key="id"
			class="mt-20 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-300 dark:border-gray-700"
		>
			<div class="flex flex-col items-center pb-10 mt-5">
				<img
					class="w-24 h-24 mb-3 rounded-full shadow-lg"
					:src="image ? image : `https://robohash.org/Oleta.png?set=set4`"
					alt="Bonnie image"
				/>
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{{ firstName }} {{ lastName }}
				</h5>
				<span class="text-sm text-white dark:text-white">{{ age }}</span>
				<div class="flex mt-4 md:mt-6">
					<routerLink
						:to="`/users/${id}`"
						class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Show</routerLink
					>
					<routerLink
						:to="`/edit-user/${id}`"
						class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
					>
						Edit</routerLink
					>
					<a
						@click="deleteUser(id)"
						class="inline-flex items-center mr-2 px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
						>Delete</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'User-comp',
	setup() {
		let store = useStore();
		let users = computed(() => store.state.users);

		watch(users, (newUser) => {
			if (newUser !== users) {
				store.dispatch('getAllUsers');
			}
		});

		onMounted(() => {
			store.dispatch('getAllUsers');
		});
		const deleteUser = (id) => {
			store.dispatch('deleteUser', id);
		};
		return {
			users,
			deleteUser,
		};
	},
};
</script>

<style scoped></style>
