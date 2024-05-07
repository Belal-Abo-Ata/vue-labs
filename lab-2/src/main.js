import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/userStore'
import axios from "axios"
import User from './components/composition/Users-comp.vue';
import AddUser from './components/AddUser.vue';
import Profile from './components/Profile.vue';
import EditUser from './components/EditUser.vue';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

const axiosInstance = axios.create({
    baseURL: "http://localhost:2000/users",
});

app.config.globalProperties.$axios = axiosInstance;

const routes = [
    { path: '/', component: User },
    { path: '/users', component: User },
    { path: '/users/:id', component: Profile },
    { path: '/create-user', component: AddUser },
    { path: '/edit-user/:id', component: EditUser }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(store).use(router).mount('#app')
