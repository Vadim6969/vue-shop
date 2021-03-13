import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue';
import product from '../views/Product.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/shop',
		name: 'Shop',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Shop.vue'),
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound,
	},
	{
		path: '/shop/:id',
		name: 'product',
		component: product,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
