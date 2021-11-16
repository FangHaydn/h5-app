import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/p1'
	},
	{
		path: '/p1',
		component: () => import('../views/page1')
	},
	{
		path: '/p2',
		component: () => import('../views/page2')
	},
	{
		path: '/404',
		component: () => import('../views/404')
	},
	{
		path: '*',
		redirect: '/404'
	},
];

const router = new VueRouter({
	// mode: 'history',
	routes,
	scrollBehavior: () => ({
		y: 0
	}),
});

router.beforeEach((to, from, next) => {
	if (to.path === '/' || !to.path) {
		next('/p1')
	} else {
		next()
	}
})

export default router;
