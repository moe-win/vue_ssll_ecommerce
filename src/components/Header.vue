<template>
  <header id="home">
    <RouterLink to="/" class="logo">
      <span class="logo-icon">🪑</span>
      True Furniture Mart
      <span class="logo-icon">🪑</span>
    </RouterLink>
    <Nav />

    <div class="feature">
      <CrtBtn />
    </div>
  </header>
</template>

<script setup>
import CrtBtn from "./CrtBtn.vue";
import Nav from "./Nav.vue";
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

.feature {
  display: flex;
  align-items: center;
  gap: 10px;
}
@media (max-width: 768px) {
  header {
    padding: 30px 50px;
  }
}
</style>
