<template>
  <div>
    <div class="sideBar">
      <a
        href=""
        class="Menu"
        :class="{ active: active }"
        @click.stop.prevent="showToggleMenu"
        ><i class="bi bi-menu-app-fill"></i
      ></a>
      <ul class="smi">
        <li v-for="smi in smis" :key="smi.id">
          <a href=""><i :class="smi.icon"></i></a>
        </li>
      </ul>
    </div>
    <SideMenu :active="active" />
    <!-- active variable sideBar.vue(parent) to
    SideMenu.vue(child) passing boolean value bind active property -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideMenu from "./sideMenu.vue";
const smis = [
  { id: 1, icon: "bi bi-facebook" },
  { id: 2, icon: "bi bi-instagram" },
  { id: 3, icon: "bi bi-twitter" },
  { id: 4, icon: "bi bi-youtube" },
];

const active = ref(false);
const showToggleMenu = () => {
  active.value = !active.value;
};
</script>

<style scoped>
.sideBar {
  position: fixed;
  width: 5px;
  min-height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2000;
  transition: 1s;
}
.Menu {
  color: var(--white-color);
  font-size: 1.6rem;
  transition: ease 0.1s;
  z-index: 1000;
}
.Menu.active {
  transform: rotateZ(180deg);
}
</style>
