import { createApp } from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import UsersFormComponent from './components/users/UsersForm.vue';

const routes = [
	{ path: '/', component: HomeComponent },
	{ path: '/users/add', component: UsersFormComponent },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
