<template>
    <div class="p-4 sm:ml-64">
        <section class="bg-white">
            <div class="py-4 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900">Edit User</h2>
                <form action="#" @submit.prevent="editUser(FormValue)">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label
                                for="firstName"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >First Name</label
                            >
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                v-model.trim="FormValue.firstName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="Enter Name..."
                                required=""
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="lastName"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >lastName</label
                            >
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                v-model.trim="FormValue.lastName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="Enter Name..."
                                required=""
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="name"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Email</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                v-model.trim="FormValue.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="Enter Email..."
                                required=""
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="age"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Age</label
                            >
                            <input
                                type="text"
                                name="age"
                                id="age"
                                v-model.number="FormValue.age"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="Enter Age..."
                                required=""
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                    >
                        Save
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "EditUser",
        data() {
            return {
                id: "",
                FormValue: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    age: 0,
                },
            };
        },

        computed: {
            ...mapState({
                user: "user",
            }),
        },

        watch: {
            user(newUser) {
                if (newUser) {
                    this.FormValue = { ...newUser };
                }
            },
        },

        created() {
            this.id = this.$route.params.id;
            this.$store.dispatch("getUserById", this.id);
        },

        methods: {
            editUser() {
                const { firstName, lastName, email, age } = this.FormValue;
                const userInfo = { firstName, lastName, email, age };
                userInfo["id"] = this.id;
                this.$store.dispatch("updateUser", userInfo);
                this.$router.push("/");
            },
        },
    };
</script>

<style lang="scss" scoped></style>
