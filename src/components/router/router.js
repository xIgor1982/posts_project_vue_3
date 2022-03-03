import Main from '@/components/pages/Main.vue';
import PostPage from '@/components/pages/PostPage.vue';
import About from '@/components/pages/About.vue';
import PostIdPage from '@/components/pages/PostIdPage.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/posts',
		component: PostPage,
	},
	{
		path: '/posts/:id',
		component: PostIdPage,
	},
	{
		path: '/about',
		component: About,
	},
	
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});

export default router;
