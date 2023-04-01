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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
