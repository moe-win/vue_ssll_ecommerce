<template>
  <div class="item-card">
    <div class="card-bg">
      <div>color:</div>
      <span
        v-for="color in item.colors"
        :key="color.id"
        :style="{ background: color.color }"
        :class="{ active: color.active }"
      ></span>
    </div>
    <div class="image-box">
      <img :src="item.image" alt="Item Image" class="item-image" />
    </div>
    <h4 class="item-title">{{ item.title }}</h4>
    <p class="item-description">{{ item.description }}</p>
    <div class="item-price">
      <span class="price" v-if="item.discount !== 0"
        >${{ (item.price - item.discount).toFixed(0) }}</span
      >
      <span
        class="price"
        :style="{
          textDecoration: item.discount ? 'line-through' : 'none',
          fontSize: item.discount ? '1rem' : '1.5rem',
          fontWeight: item.discount ? 'normal' : 'bold',
          color: item.discount ? 'blue' : '#e70d55ff',
        }"
        >${{ item.price }}</span
      >
    </div>
    <RouterLink :to="`/product/${item.id}`"> Learn More </RouterLink>
    <button class="add-to-cart-btn">Add to Cart</button>
  </div>
</template>
<script setup>
const props = defineProps({
  item: { type: Object, required: true },
});
</script>
<style scoped>
.item-card {
  position: relative;
  min-height: 100px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0px 15px rgba(255, 255, 255, 0.2);
}
.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  transition: ease-in-out 0.3s ease;
  clip-path: circle(150px at 80% 20%);
}
.item-card:hover .card-bg {
  clip-path: circle(100px at 80% 20%);
}
.item-image {
  width: 200px;
  height: 200px;
  border-radius: 20px 20px 0 0;
}
.item-card ::after {
  content: "Furniture";
  position: absolute;

  left: -10px;
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  font-style: italic;
}
.item-card .image-box {
  position: absolute;
  top: 20px;
  width: 100px;
  height: 100px;
  transition: 0.2s;
  left: 50%;
  transform: translateX(-50%);
}
.item-card:hover .image-box {
  top: 20px;
}
.item-card .image-box img {
  width: 100%;
  top: 10%;
  left: 20%;
  transform: rotate(0deg);
  transition: 0.5s;
}
.item-card .item-title {
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
  position: relative;
  width: 100%;
  bottom: 0%;
  height: 100px;
  text-align: center;
  transition: 0.2s;
  z-index: 10;
}
.item-card:hover .item-title {
  height: 100%;
}
.item-card .item-description {
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
  position: relative;
  width: 100%;
  bottom: 0%;
  height: 100px;
  text-align: center;
  transition: 0.2s;
  z-index: 10;
}
.item-card:hover .item-description {
  height: 100%;
}
.item-card .item-price .price {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 10px 0;
  text-align: center;
  position: relative;
  display: block;
}
.item-card .add-to-cart-btn {
  display: block;
  width: 25%;
  padding: 10px;
  background: var(--primary);
  font-size: 10px;
  text-align: center;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
</style>
