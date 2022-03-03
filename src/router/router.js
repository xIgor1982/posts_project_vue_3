import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue';
import About from '@/pages/About.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue';

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
	{
		path: '/store',
		component: PostPageWithStore,
	},
	{
		path: '/composition',
		component: PostPageCompositionApi,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});

export default router;
