import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
	},
	{
		path: '/simple_counter',
		name: 'SimpleCounter',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ch1_simple-counter/SimpleCounter.vue'),
	},
	{
		path: '/pinia_counter',
		name: 'PiniaCounter',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ch2_pinia-counter/PiniaCounter.vue'),
	},
	{
		path: '/todo_crud',
		name: 'TodoCRUD',
		component: () => import(/* webpackChunkName: "about" */ '../views/ch3_todo-crud/TodoCRUD.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
