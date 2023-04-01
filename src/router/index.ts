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
	{
		path: '/fetch_todo',
		name: 'FetchTodo',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ch4_fetch-todo/FetchTodo.vue'),
	},
	{
		path: '/todo/detail/:todoId',
		name: 'TodoDetail',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ch4_fetch-todo/TodoDetail.vue'),
	},
	{
		path: '/template_ref',
		name: 'TemplateRef',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ch5_TemplateRef/TemplateRef.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
