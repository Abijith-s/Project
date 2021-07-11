import Vue from "vue";
import Router from 'vue-router'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
Vue.use(Router)

export default new Router ({
    mode:'history',
    routes:[
        {path: '/',component: Navbar},
        {path: '/login',component:Login},
        {path: '/signup',component:SignUp},
        {path:'/Home',component:Home}
    ]
})