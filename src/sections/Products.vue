<template>
  <section class="product" id="product">
    <div class="container">
      <div class="row">
        <h3 class="section-title">PRODUCTS</h3>
      </div>
      <div class="row mt-4">
        <div
          class="col-xl-3 col-lg-4 col-md-6 mt-4"
          v-for="item in items"
          :key="item.id"
        >
          <ItemCard :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ItemCard from "@/components/ItemCard.vue";
import { onMounted, ref } from "vue";

const items = ref([]);
onMounted(() => {
  fetch("http://localhost:4000/items")
    .then((Response) => Response.json())
    .then((data) => {
      items.value = data;
    })
    .catch((error) => console.log(error.message));
});
</script>
<style scoped>
.product {
  background: #1e1e1e !important;
}
</style>
