import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import TekaTeki from '../components/TekaTeki';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/tekateki',
        name: 'tekateki',
        component: TekaTeki,
        beforeEnter: (to, from, next) => {
            if (to.params.isBerhasil == true) next()
            else next({ name: 'home' });
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;