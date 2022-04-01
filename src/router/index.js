import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/:id",
    name: "name",
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '',
    name: "notF",
    component: () => import('@/views/to.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;