import Vue from 'vue'
import Router from 'vue-router'
import Library from './views/Library.vue'
import RecentlyRead from './views/RecentlyRead.vue'
import Downloaded from './views/Downloaded.vue'
import Settings from './views/Settings.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Library',
      component: Library
    },
    {
      path: '/recentlyread',
      name: 'RecentlyRead',
      component: RecentlyRead
    },
    {
      path: '/downloaded',
      name: 'Downloaded',
      component: Downloaded
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})
