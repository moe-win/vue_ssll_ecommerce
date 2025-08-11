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
</style>
