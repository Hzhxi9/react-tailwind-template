import { defaultLazyLoad } from './loadable';


export default [
    { path: '/', meta: '今日待办', component: defaultLazyLoad(() => import('../pages/Todo')) },
    { path: '/recently-todo', meta: '最近待办', component: defaultLazyLoad(() => import('../pages/recentlyTodo')) },
    { path: '/overview', meta: '日期概览', component: defaultLazyLoad(() => import('../pages/Overview')) },
    { path: '/tody-box', meta: '待办箱', component: defaultLazyLoad(() => import('../pages/TodyBox')) },
    { path: '/search', meta: '搜索', component: defaultLazyLoad(() => import('../pages/Search')) },
]