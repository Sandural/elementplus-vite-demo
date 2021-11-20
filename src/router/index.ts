import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Layout from '~/components/layouts/index.vue';
import Home from '~/views/Home.vue';

const defaultRoutes: RouteRecordRaw[] = [
	{
		path: "/",
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: "/home",
				component: Home,
				name: 'DashBoard'
			},
			{
				path: '/demo',
				component: () => import('~/views/Demo.vue'),
				name: 'Demo1-1'
			}
		]
	},

]

export default createRouter({
	history: createWebHistory(),
	routes: defaultRoutes
})
