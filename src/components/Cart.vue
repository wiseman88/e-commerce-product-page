<template>
  <div id="cart"
    class="absolute z-40 w-[360px] top-[76px] right-2 md:top-[94px] md:-right-[76px] rounded-lg bg-white md:drop-shadow-lg"
    :class="show ? '' : 'hidden'">
    <div class="cart-top px-6 pt-5 pb-[23px] border-[#E8E7EC] border-b-[1px]">
      <h3 class="font-semibold">Cart</h3>
    </div>
    <div v-if="!product.inCart" class="card-bottom flex items-center justify-center h-[188px]">
      <p class="font-semibold text-dark-grayish-blue">
        <span>Your cart is empty.</span>
      </p>
    </div>
    <div v-else class="px-6 pt-6 pb-8">
      <div class="flex items-center justify-between pb-[26px]">
        <div class="flex">
          <figure class="mr-4">
            <img class="w-[50px] rounded-sm" :src="product.data.thumbnail" :alt="product.data.name">
          </figure>
          <div class="text-dark-grayish-blue">
            <p>
              Autumn {{ product.data.name.substring(5, 20) }}...
            </p>
            <p class="tracking-[0.7px]">
              ${{ product.discountPrice }} x {{ counter.count }}
              <span class="font-bold text-very-dark-blue">${{ totalPrice.toFixed(2) }}</span>
            </p>
          </div>
        </div>
        <div>
          <button @click="product.removeFromCart">
            <img src="/src/assets/images/icon-delete.svg" alt="clear">
          </button>
        </div>
      </div>
      <Button>
        Checkout
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';
import { useProductStore } from '../stores/product';
import Button from './Button.vue';

const props = defineProps({
  show: Boolean,
});

const product = useProductStore();
const counter = useCounterStore();

const totalPrice = computed(() => {
  return (counter.count * product.discountPrice)
})

</script>

<style scoped>

</style>
