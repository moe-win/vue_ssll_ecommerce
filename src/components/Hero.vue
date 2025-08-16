<template>
  <div class="hero">
    <HeroSwiper :items="items" :heroChange="handleHeroChange" />
    <HeroSlide v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import HeroSwiper from "./HeroSwiper.vue";
import HeroSlide from "./HeroSlide.vue";

const items = ref([]);

onMounted(() => {
  fetch("http://localhost:4000/items")
    .then((res) => res.json())
    .then((data) => {
      items.value = data;
    })
    .catch((error) => console.error("error.message"));
});

const handleHeroChange = (id) => {
  items.value.map((item) => {
    item.active = false;
    if (item.id === id) item.active = true;
    return item;
  });
};
</script>
<style scoped>
.hero {
  transition: 1s;
  background-position: var(--bg-color);
  height: 400px;
  width: 100%;
  position: relative;
}
@media (max-width: 768px) {
  .hero {
    height: 300px;
  }
}
</style>
