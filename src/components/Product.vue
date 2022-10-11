<template>
  <div id="product-slider">
    <Carousel />
  </div>
  <div class="product-info p-6">
    <h4 class="product-title text-orange text-[12px] uppercase tracking-widest font-bold mb-2">
      <span>Sneaker Company</span>
    </h4>
    <h2 class="text-very-dark-blue text-[27px] leading-8 font-bold mb-4">
      {{product.name}}
    </h2>

    <p class="product-description text-dark-grayish-blue mb-6">
      {{ product.description }}
    </p>

    <div class="product-price flex items-center justify-between font-bold mb-5">
      <div class="flex items-center">
        <span class="text-[27px] tracking-wider mr-4">${{ discountPrice }}.00</span>
        <span class="flex-start px-2.5 py-[1px] text-orange bg-pale-orange rounded-lg">{{product.discount}}%</span>
      </div>
      <span class="text-grayish-blue line-through"> ${{product.price}} </span>
    </div>

    <div
      class="product-counter flex justify-between items-center px-4 py-4 bg-light-grayish-blue text-center font-bold rounded-lg mb-4">
      <button>
        <figure>
          <img src="../assets/images/icon-minus.svg" alt="minus" @click="counter.decrement" />
        </figure>
      </button>
      <span> {{ counter.count }} </span>
      <button>
        <figure>
          <img src="../assets/images/icon-plus.svg" alt="plus" @click="counter.increment" />
        </figure>
      </button>
    </div>
    <button
      class="w-full flex items-center justify-center text-center text-white bg-orange shadow-orange/30 shadow-xl rounded-lg p-4 font-bold">
      <figure class="mr-4">
        <SvgCart :fillColor="fillColor" />
      </figure>
      <span class="tracking-wide"> Add to cart </span>
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
import SvgCart from "./SvgCart.vue";
import Carousel from "./Carousel.vue";
import { computed } from "vue";

let fillColor = '#fff';

const counter = useCounterStore();

const product = {
  "name": "Fall Limited Edition Sneakers",
  "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  "price": "250.00",
  "discount": 50,
}

const discountPrice = computed(() => {
  return product.price - product.price / 100 * product.discount;
})
</script>

<style lang="scss" scoped>

</style>
