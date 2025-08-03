<template>
  <div class="side-menu" :class="{ active: active }">
    <p>Side Menu Here</p>
  </div>
</template>
<script setup>
const props = defineProps({
  active: {
    type: boolean,
    required: true,
  },
});
</script>
<style scoped>
.side-menu {
  position: fixed;
  left: -300px;
  height: 100%;
  width: 300px;
  background: var(--primary);
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: 1s;
  z-index: 1000;
}
.side-menu.active {
  left: 0;
}
.side-menu .nav {
  height: 100%;
}
</style>
