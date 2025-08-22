import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/View/HomeView.vue";
import ProductsDetailView from "@/View/ProductsDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductsDetailView,
    },
  ],
});

export default router;
