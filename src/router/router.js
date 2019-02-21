import Vue from 'vue'
import Router from 'vue-router'

import Main from "@/components/main-page"
import Login from "@/components/login/login"
import Search from "@/components/search/search-page"

Vue.use(Router);


export default new Router({
    linkActiveClass: 'active'
    , routes: [
        {
            path: '/'
            , redirect: '/main'
        }
        , {
            path: '/main'
            , name: "main"
            , component: Main
            , meta: {
                keepAlive: true, //此组件不需要被缓存
            }

        }
        , {
            path: '/login'
            , name: "login"
            , component: Login
            , meta: {
                keepAlive: false, //此组件不需要被缓存
            }

        }
        , {
            path: '/search'
            , name: "search"
            , component: Search
            , meta: {
                keepAlive: false, //此组件不需要被缓存
            }

        }
    ]
})