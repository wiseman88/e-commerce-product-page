<template>
    <div class="product-info p-6 md:mt-[39px] md:mr-[23px] md:w-[494px]">
        <h4 class="product-title text-orange text-[12px] uppercase tracking-widest font-bold mb-2 md:mb-5">
            <span>Sneaker Company</span>
        </h4>
        <h2 class="text-very-dark-blue text-[44px] leading-6 md:leading-[3rem] font-bold mb-4 md:mb-7">
            {{ product.data.name }}
        </h2>

        <p class="product-description md:leading-[1.6rem] text-dark-grayish-blue mb-6 md:mb-7">
            {{ product.data.description }}
        </p>

        <div class="product-price flex md:block items-center justify-between font-bold mb-5 md:mb-[34px]">
            <div class="flex items-center md:mb-1">
                <span class="text-[27px] tracking-wider mr-4">${{ product.discountPrice }}</span>
                <span class="flex-start px-2.5 py-[1px] text-orange bg-pale-orange rounded-lg">{{ product.data.discount
                }}%</span>
            </div>
            <span class="text-grayish-blue line-through"> ${{ product.data.price.toFixed(2) }} </span>
        </div>
        <div class="md:flex md:gap-[17px]">
            <div
                class="product-counter flex justify-between items-center px-4 py-4 bg-light-grayish-blue text-center font-bold rounded-lg mb-4 md:grow md:mb-0 md:w-[246px]">
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
                    <Svg :width="22" :height="20">
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            :fill="fillColor" fill-rule="nonzero" />
                    </Svg>
                </figure>
                <span> Add to cart </span>
            </Button>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from "../stores/product";
import { useCounterStore } from "../stores/counter";
import Svg from "./Svg.vue";
import Button from "./Button.vue";

let fillColor = '#fff';

const counter = useCounterStore();
const product = useProductStore();

const checkProductCount = () => {
    counter.count > 0 ? product.addToCart() : null
}
</script>

<style scoped>

</style>