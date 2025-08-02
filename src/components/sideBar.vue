<template>
  <div class="sideBar">
    <a href="" class="sideMenu"><i class="bi bi-menu-button-wide-fill"></i></a>
    <ul class="smi">
      <li v-for="smi in smis" :key="smi.id">
        <a href=""><i :class="smi.icon"></i></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const smis = [
  { id: 1, icon: "bi bi-facebook" },
  { id: 2, icon: "bi bi-instagram" },
  { id: 3, icon: "bi bi-twitter" },
  { id: 4, icon: "bi bi-youtube" },
];
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
.sideMenu {
  color: var(--white-color);
  font-size: 1.6rem;
  transition: ease 0.1s;
  z-index: 2000;
}
.sideMenu:active {
  transition: rotateZ(360deg);
}
</style>
