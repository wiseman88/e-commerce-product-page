<template>
  <div id="product-slider">
    <Carousel />
  </div>
  <div class="product-info p-6">
    <h4 class="product-title text-orange text-[12px] uppercase tracking-widest font-bold mb-2">
      <span>Sneaker Company</span>
    </h4>
    <h2 class="text-very-dark-blue text-[27px] leading-8 font-bold mb-4">
      {{ product.data.name }}
    </h2>

    <p class="product-description text-dark-grayish-blue mb-6">
      {{ product.data.description }}
    </p>

    <div class="product-price flex items-center justify-between font-bold mb-5">
      <div class="flex items-center">
        <span class="text-[27px] tracking-wider mr-4">${{ product.discountPrice }}</span>
        <span class="flex-start px-2.5 py-[1px] text-orange bg-pale-orange rounded-lg">{{ product.data.discount
        }}%</span>
      </div>
      <span class="text-grayish-blue line-through"> ${{ product.data.price.toFixed(2) }} </span>
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
    <Button @click="checkProductCount">
      <figure class="mr-4">
        <SvgCart :fillColor="fillColor" />
      </figure>
      <span> Add to cart </span>
    </Button>
    {{ product.inCart }}
  </div>
</template>

<script setup>
import { useProductStore } from "../stores/product";
import { useCounterStore } from "../stores/counter";
import SvgCart from "./SvgCart.vue";
import Carousel from "./Carousel.vue";
import { computed } from "vue";
import Button from "./Button.vue";

let fillColor = '#fff';

const counter = useCounterStore();
const product = useProductStore();

const checkProductCount = () => {
  counter.count > 0 ? product.addToCart() : null
}

</script>

<style lang="scss" scoped>

</style>
