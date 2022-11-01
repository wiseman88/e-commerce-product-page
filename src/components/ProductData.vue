<template>
    <div class="product-info p-6 md:mt-[39px] md:mr-[23px] md:w-[494px]">
        <h4 class="product-title text-orange text-[12px] uppercase tracking-widest font-bold mb-2 md:mb-5">
            <span>Sneaker Company</span>
        </h4>
        <h2 class="text-very-dark-blue text-[29.5px] md:text-[44px] leading-9 md:leading-[3rem] font-bold mb-4 md:mb-7">
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
                <button @click="counter.decrement" class="counter-button">
                    <Svg :width="12" :height="4" fill="#FF7E1B">
                        <path
                            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                            id="a" />
                    </Svg>
                </button>
                <span> {{ counter.count }} </span>
                <button @click="counter.increment" class="counter-button">
                    <Svg :width="12" :height="12" fill="#FF7E1B">
                        <path
                            d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                            id="b" />
                    </Svg>
                </button>
            </div>
            <Button @click="product.checkProductCount" class="add-product-button hover:bg-orange/50">
                <figure class="mr-4">
                    <Svg :width="22" :height="20" fill="#fff">
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill-rule="nonzero" />
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

const counter = useCounterStore();
const product = useProductStore();

</script>

<style scoped>
.counter-button:hover>svg {
    fill: hsl(26, 100%, 55%, 0.50);
}
</style>