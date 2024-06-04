import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/destination', component: Destination },
    { path: '/crew', component: Crew },
    { path: '/technology', component: Technology },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;