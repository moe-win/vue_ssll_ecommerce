<template>
  <header id="home">
    <RouterLink to="/" class="logo">
      True Chair
    </RouterLink>
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
    <div class="feature">
      <CrtBtn />
    </div>
  </header>
</template>

<script setup>
import { navsData } from "@/data/data";
import { ref } from "vue";
import CrtBtn from "./CrtBtn.vue";

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
header {
  position: relative;

  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px 30px 200px;
  z-index: 1100;
}

.logo {
  font-size: 35px;
  color: #dcef13;
  letter-spacing: 5px;
  font-weight: 300px;
}

.nav {
  display: flex;
}

.nav li {
  list-style: none;
  margin: 0% 10px;
}
.nav li a {
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
.feature {
  display: flex;
  align-items: center;
  gap: 10px;
}
@media (max-width: 768px) {
  header {
    padding: 30px 50px;
  }
  .nav {
    display: none;
  }
}
</style>
