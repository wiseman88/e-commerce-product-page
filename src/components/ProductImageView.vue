<template>
    <div>
        <div class="hidden md:block">
            <a href="#" @click.prevent="product.showLightbox" class="flex justify-center">
                <figure>
                    <img :src="product.mainImageUrl" alt="" class="rounded-[14px]" :class="styles">
                </figure>
            </a>
            <div class=" product-images-navigation flex justify-between w-[445px] mx-auto">
                <button v-for="(item, index) in product.images" :key="index"
                    class="product-button group w-[92px] rounded-[10px] overflow-hidden"
                    @click="product.setImageUrl($event)">
                    <figure class="bg-white">
                        <img :src="item.image" :alt="index" class="product-image" :class="{ 'active': index === 0 }">
                    </figure>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../stores/product';

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