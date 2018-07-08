import Vue from 'vue'
import VueRouter from 'vue-router'

import worklist from '../view/worklist/index.vue';
import activeMange from '../view/activeMange/index.vue';

const routes = [
    {
        path: '/worklist',
        name: 'worklist',
        component: worklist
    },
    {
        path: '/activeMange',
        name: 'activeMange',
        component: activeMange
    },
    { path: '*', redirect: '/worklist' }
]

Vue.use(VueRouter);


export default new VueRouter({
    routes
})

