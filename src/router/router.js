import Vue from 'vue'
import Router from 'vue-router'

import Main from "@/components/main-page"
import Login from "@/components/login/login"

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
        }
        , {
            path: '/login'
            , name: "login"
            , component: Login
        }
    ]
})