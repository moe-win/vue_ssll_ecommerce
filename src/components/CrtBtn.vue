<template>
  <div class="crt-btn">
    <RouterLink class="cartbtn" to="/cart"
      ><i class="bi bi-cart4"></i>
    </RouterLink>
    <span class="count">7</span>
  </div>
</template>
<script setup></script>
<style scoped>
.crt-btn {
  display: flex;
  transition: 0.5s;
  align-items: center;
  gap: 5px;
}
.cartbtn {
  font-size: 30px;
  color: #fff;
}
.count {
  /* position: absolute; */
  display: flex;
  /* top: -10px; */
  justify-content: center;
  align-items: center;
  right: 10px;
  width: 30px;
  background-color: #e70d55ff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 1.2rm;
}
</style>
