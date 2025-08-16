<template>
  <Swiper
    :slides-per-view="3"
    :space-between="30"
    :modules="modules"
    :navigation="true"
    class="swiper"
  >
    <SwiperSlide
      v-for="item in items.slice(0, 10)"
      :key="item.id"
      class="swiperslide"
    >
      <img :src="item.image" alt="" @click="heroChange(item.id)" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const modules = [Navigation];
const components = {
  SwiperSlide,
  Swiper,
};

const props = defineProps({
  items: { type: Array, required: true },
  heroChange: { type: Function, required: true },
});
</script>
<style>
.swiper {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 50%;
  padding-top: 30px;
  padding-bottom: 5px;
}
.swiperslide {
  display: flex;
  bottom: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  background-position: center;

  width: 20px;
  gap: 0px;
  height: 80px;
}
.swiper .swiper-button-prev {
  left: 5px;
}
.swiper .swiper-button-next {
  right: 5px;
}
.swiper .swiper-button-next::after,
.swiper .swiper-button-prev::after {
  font-size: 20px;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 2px solid #fff;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
}
.swiper .swiper-button-next:hover,
.swiper .swiper-button-prev:hover {
  border-radius: 50%;
  background: fixed;
  color: #fff;
  transform: scale(1.1);
}
.swiperslide-img {
  display: block;
  width: 20%;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.swiper .swiper-button-prev,
.swiper .swiper-button-next {
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
</style>
