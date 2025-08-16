<template>
  <div class="hero-slide" :class="{ active: item.active }">
    <div class="content">
      <h1>{{ item.name }}</h1>
      <p>{{ item.description }}</p>
      <div class="color">
        <h4>Available Colors:</h4>
        <div class="color-name">
          <span
            v-for="color in item.colors"
            :key="color.id"
            :style="{ backgroundColor: color.color }"
            :class="{ active: color.active }"
          ></span>
        </div>
      </div>
      <div class="actions">
        <button class="btn btn-primary">Buy Now</button>
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
        <span
          class="price"
          v-if="item.discount !== 0"
          :style="{
            fontSize: item.discount ? '1.3rem' : '1rem',
            fontWeight: 'bold',
            color: '#e70d55ff',
          }"
          >${{ (item.price - item.discount).toFixed(0) }}</span
        >
        <div class="rating">
          <h4>Rating: {{ item.rating }}</h4>
        </div>
        <RouterLink :to="`/product/${item.id}`" :class="add - to - cart"
          >Larn More</RouterLink
        >
      </div>
    </div>
    <div class="hero-img">
      <div
        class="img-container"
        :class="{ active: item.active }"
        :style="{ background: item.color }"
      >
        <img :src="item.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: { type: Object, required: true },
});
</script>
<style scoped>
.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: 1s;
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
}
.hero-slide.active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 200px;
}
.content h1 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 10px;
}
.content p {
  color: #ffffff;
  margin-bottom: 50px;
  font-size: 1.2rem;
}
.content .color h4 {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.2rem;
}
.content .color .color-name {
  display: flex;
  gap: 10px;
  align-items: center;
}
.content .color .color-name span {
  padding: 10px;
  content: "";
  display: inline-block;
  border: #10104f 1px solid;
  border-radius: 50%;
  transition: 0.3s;
  position: 20px;
}
.content .color .color-name span:hover,
.content .color .color-name span:active {
  box-shadow: 0 0 10px #10104f;
}
.actions {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: first baseline;
  margin-top: 20px;
}
.hero-img {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.img-container img {
  width: 600px;
  height: auto;
  max-height: 600px;
  object-fit: contain;
  transition: 0.1s;
  border-radius: 50px;
}
@media (max-width: 768) {
  .hero-slide {
    flex-direction: column-reverse;
  }
  .content {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
  .hero-img {
    width: 100%;
    display: flex;
    height: 50px;
    padding: 20px 20px 0 200px;
  }
  .img-container img {
    width: 100%;
    max-width: 400px;
  }
}
@media (max-width: 1440px) {
  .content {
    padding-bottom: 100px;
  }
  .content h1 {
    font-size: 3rem;
  }
  .content p {
    font-size: 1rem;
    margin-bottom: 30px;
    font-style: italic;
    color: #e0e0e0;
  }
}
</style>
