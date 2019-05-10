import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(Router)

var router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [{
                path: '/home',
                name: 'Home',
                component: Home,
                meta: {
                    footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                }
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ './views/About.vue'),
                meta: {
                    footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                }
            },
            {
                path: '/Kind',
                name: 'Kind',
                component: () =>
                    import ( /* webpackChunkName: "Kind" */ './views/kind/Kind.vue'),
                meta: {
                    footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                }
            },
            {
                path: '/kind/:id/goodsList', // kind/1234234/goodsList
                name: 'kindGoodsList',
                component: () =>
                    import ( /* webpackChunkName: "kindGoodsList" */ './views/kind/goodslist/GoodsList.vue'),
                meta: {
                    footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                }
            },
            {
                path: '/kind/:id/goodsList/:id/goodsdetail', // kind/1234234/goodsList
                name: 'GoodsDetail',
                redirect: '/kind/:id/goodsList/:id/goodsdetail/detail',
                component: () =>
                    import ( /* webpackChunkName: "GoodsDetail" */ './views/kind/goodslist/goodsdetail/GoodsDetail.vue'),
                children: [{
                        path: 'detail',
                        name: 'Detail',
                        component: () =>
                            import ( /* webpackChunkName: "Detail" */ './views/kind/goodslist/goodsdetail/Detail.vue')
                    },
                    {
                        path: 'evaluation',
                        name: 'Evaluation',
                        component: () =>
                            import ( /* webpackChunkName: "ArtEvaluationicle" */ './views/kind/goodslist/goodsdetail/Evaluation.vue')
                    }
                ]
            },
            {
                path: '/detail/:id/buy',
                name: 'Buy',
                component: () =>
                    import ( /* webpackChunkName: "Buy" */ './views/kind/goodslist/goodsdetail/buy/Buy.vue')
            },
            {
                path: '/kind/:id/goodsList/car',
                name: 'MyCar',
                component: () =>
                    import ( /* webpackChunkName: "MyCar" */ './views/kind/goodslist/car/MyCar.vue')
            },
            {
                path: '/find',
                name: 'Find',
                redirect: '/find/article',
                component: () =>
                    import ( /* webpackChunkName: "Find" */ './views/find/Find.vue'),
                meta: {
                    footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                },
                children: [{
                        path: 'article',
                        name: 'Article',
                        component: () =>
                            import ( /* webpackChunkName: "Article" */ './views/find/Article.vue'),
                        meta: {
                            footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                        },
                    },
                    {
                        path: 'shops',
                        name: 'Shops',
                        component: () =>
                            import ( /* webpackChunkName: "Shops" */ './views/find/Shops.vue'),
                        meta: {
                            footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                        },
                    }
                ]
            },
            {
                path: '/find/articledetail',
                name: 'ArticleDetail',
                component: () =>
                    import ( /* webpackChunkName: "ArticleDetail" */ './views/find/articledetail/ArticleDetail.vue'),
            },
            {
                path: '/find/goodsdetail',
                name: 'GoodsDetail',
                component: () =>
                    import ( /* webpackChunkName: "GoodsDetail" */ './views/find/goodsdetail/GoodsDetail.vue'),
            },
            {
                path: '/main',
                name: 'Main',
                component: () =>
                    import ( /* webpackChunkName: "Main" */ './views/main/Main.vue'),
                meta: {
                    footerShow: true, //如果携带的有元信息 footerShow 则显示footerBar
                }
            },
            {
                path: '*',
                redirect: '/home'
            }
        ]
    })
    // 开启导航守卫 用于监听每一个导航的变化
router.beforeEach((to, from, next) => {
    // ...
    // 放行
    next();
})
export default router;