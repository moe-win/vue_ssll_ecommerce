<template>
  <div class="nav-container">
    <ul class="nav">
      <li v-for="nav in navs" :key="nav.id">
        <RouterLink
          v-if="nav.name === 'Home'"
          :class="nav.active && 'active'"
          @click="activeNav(nav.id)"
          ><i class="bi bi-house-heart-fill"></i
        ></RouterLink>
        <RouterLink
          to="/"
          v-else
          :class="{ active: nav.active }"
          @click="activeNav(nav.id)"
          >{{ nav.name }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { navsData } from "@/data/data";
import { ref } from "vue";
const navs = ref(navsData);

const activeNav = (id) => {
  navs.value.map((nav) => {
    nav.active = false;
    if (nav.id === id) {
      nav.active = true;
      return nav;
    }
  });
};
</script>

<style scoped>
.nav {
  display: flex;
}

.nav li {
  list-style: none;
  margin: 0% 10px;
}
.nav li a,
.nav li {
  color: #2b15a7;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
}
.nav li:hover a,
.nav li a.active {
  color: var(--primary);
}
</style>
