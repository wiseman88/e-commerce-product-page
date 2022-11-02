<template>
    <div>
        <div class="product-image-main hidden md:block">
            <button @click.prevent="product.showLightbox" class="flex justify-center">
                <img :src="product.mainImageUrl" alt="" class="rounded-[14px]" :class="styles">
            </button>
            <ProductListNavigation :product="product" />
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../stores/product';
import ProductListNavigation from './ProductListNavigation.vue';

defineProps({
    styles: String,
})

const product = useProductStore();
</script>

<style>
.product-button {
    border: 2px solid transparent;
}

.product-button:has(.product-image.active) {
    border: 2px solid hsl(26, 100%, 55%);
}

.product-image:hover {
    opacity: 0.5;
}

.product-image.active {
    opacity: 0.4;
}
</style>