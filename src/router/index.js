import { createWebHistory, createRouter } from "vue-router";

import carrito from "@/views/carrito.vue";


const routes = [
  {
    path: "/",
    name: "carrito",
    component: carrito,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;