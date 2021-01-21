import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard', // 重定向
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },

    {
        path: '/content',
        component: Layout,
        redirect: '/content/article',
        name: 'Content',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '内容管理', icon: 'el-icon-s-help' },
        children: [{
                path: 'article',
                name: 'Article',
                component: () =>
                    import ('@/views/content/article/index'),
                meta: { title: '文章管理', icon: 'table' }
            },
            {
                path: 'addarticle',
                name: 'Addarticle',
                hidden: true,
                component: () =>
                    import ('@/views/content/addarticle/index'),
                meta: { title: '新增文章', icon: 'el-icon-document', activeMenu: '/content/article' }
            },
            {
                path: 'source',
                name: 'Source',
                component: () =>
                    import ('@/views/content/source/index'),
                meta: { title: '素材列表', icon: 'el-icon-loading' }
            },
        ]
    },
    {
        path: '/market',
        component: Layout,
        redirect: '/market/limitAd',
        name: 'market',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '营销管理', icon: 'el-icon-goods' },
        children: [{
                path: 'limitAd',
                name: 'LimitAd',
                component: () =>
                    import ('@/views/market/limitAd/index'),
                meta: { title: '限时活动', icon: 'table' }
            },
            {
                path: 'adList',
                name: 'AdList',
                component: () =>
                    import ('@/views/market/adList/index'),
                meta: { title: '广告列表', icon: 'el-icon-document', activeMenu: '/content/article' }
            }
        ]
    },
    {
        path: '/order',
        component: Layout,
        name: 'order',
        redirect: '/order/orderlist',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '订单管理', icon: 'el-icon-tickets' },
        children: [{
                path: 'orderlist',
                name: 'Orderlist',
                component: () =>
                    import ('@/views/order/orderlist/index'),
                meta: { title: '订单列表', icon: 'el-icon-mobile' }
            },
            {
                path: 'reduceorder',
                name: 'Reduceorder',
                component: () =>
                    import ('@/views/order/reduceorder/index'),
                meta: { title: '退单列表', icon: 'el-icon-delete' }
            },
            {
                path: 'adress',
                name: 'Adress',
                component: () =>
                    import ('@/views/order/adress/index'),
                meta: { title: '地址管理', icon: 'el-icon-film' }
            },
            {
                path: 'orderInfo',
                name: 'OrderInfo',
                hidden: true,
                component: () =>
                    import ('@/views/order/orderInfo/index'),
                meta: { title: '订单详情', activeMenu: '/order/orderlist' }
            },
            {
                path: 'reduceInfo',
                name: 'ReduceInfo',
                hidden: true,
                component: () =>
                    import ('@/views/order/reduceInfo/index'),
                meta: { title: '订单详情', activeMenu: '/order/reduceorder' }
            }
        ]
    },
    {
        path: '/goods',
        component: Layout,
        name: 'goods',
        redirect: '/goods/goodslist',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '商品管理', icon: 'el-icon-box' },
        children: [{
            path: 'goodslist',
            name: 'Goodslist',
            component: () =>
                import ('@/views/goods/goodslist/index'),
            meta: { title: '商品列表', icon: 'el-icon-sell' }
        }, {
            path: 'brand',
            name: 'Brand',
            component: () =>
                import ('@/views/goods/brand/index'),
            meta: { title: '品牌管理', icon: 'el-icon-present' }
        }, {
            path: 'goodscat',
            name: 'Goodscat',
            component: () =>
                import ('@/views/goods/goodscat/index'),
            meta: { title: '商品分类', icon: 'el-icon-menu' }
        }, {
            path: 'addGoods',
            name: 'AddGoods',
            hidden: true,
            component: () =>
                import ('@/views/goods/addGoods/index'),
            meta: { title: '新增商品', icon: 'el-icon-shopping-cart-full', activeMenu: '/goods/goodslist' }
        }]
    },
    {
        path: '/limits',
        name: 'Limits',
        component: Layout,
        redirect: '/limits/account',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '权限管理', icon: 'el-icon-user' },
        children: [{
                path: 'account',
                name: 'Account',
                component: () =>
                    import ('@/views/limits/account/index'),
                meta: { title: '账号管理', icon: 'el-icon-c-scale-to-original' }
            },
            {
                path: 'role',
                name: 'Role',
                component: () =>
                    import ('@/views/limits/role/index'),
                meta: { title: '角色管理', icon: 'el-icon-headset' }
            },
            {
                path: 'source',
                name: 'Source',
                component: () =>
                    import ('@/views/limits/source/index'),
                meta: { title: '资源管理', icon: 'el-icon-finished' }
            }
        ]
    },
    {
        path: '/register',
        name: 'Register',
        component: Layout,
        redirect: '/register/userlist',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '注册用户管理', icon: 'el-icon-headset' },
        children: [{
            path: 'userlist',
            name: 'Userlist',
            component: () =>
                import ('@/views/register/userlist/index'),
            meta: { title: '用户列表', icon: 'el-icon-place' }
        }]
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Layout,
        redirect: '/personal/perpage',
        alwaysShow: true, // 当子路由只有一个时候,也让他展开
        meta: { title: '个人中心', icon: 'el-icon-user' },
        children: [{
            path: 'perpage',
            name: 'Perpage',
            component: () =>
                import ('@/views/personal/perpage/index'),
            meta: { title: '个人主页', icon: 'el-icon-user' }
        }, {
            path: 'personseting',
            name: 'Personseting',
            component: () =>
                import ('@/views/personal/personseting/index'),
            meta: { title: '个人设置', icon: 'el-icon-setting' }
        }]
    },
    // *代表所有路由注册的页面,如果访问的路由不存在,则导向404
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router