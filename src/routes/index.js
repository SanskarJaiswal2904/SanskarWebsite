import { createWebHistory, createRouter } from "vue-router";

import Home from "@/Home.vue";
import ContactMe from "@/components/secondpage/ContactInfo.vue";
import PageNotFound from "@/components/PageNotFound.vue";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,  // Use Home as the default route
    },
    {
        name: 'ContactMe',
        path: '/contactme',
        component: ContactMe
    },
    {
        name: 'PageNotFound',
        path: '/:catchAll(.*)',  // Catch all undefined routes
        component: PageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
