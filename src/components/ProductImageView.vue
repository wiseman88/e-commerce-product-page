<template>
    <div>
        <div class="hidden md:block">
            <a href="#" class="block">
                <figure>
                    <img :src="mainImageUrl" alt="" class="rounded-[14px] w-[445px] mb-[30px]">
                </figure>
            </a>
            <div class=" product-images-navigation flex justify-between">
                <button v-for="(item, index) in product.images" :key="index"
                    class="product-button group w-[92px] rounded-[10px] overflow-hidden" @click="setImageUrl($event)">
                    <figure>
                        <img :src="item.image" :alt="index" class="product-image" :class="{ 'active': index === 0 }">
                    </figure>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '../stores/product';

const product = useProductStore();

let mainImageUrl = ref(product.images[0].image);

const setImageUrl = (event) => {
    let imgElements = document.querySelectorAll('.product-image');

    imgElements.forEach(img => {
        img.classList.remove('active');
    });

    mainImageUrl.value = event.target.src;

    event.target.classList.add('active');
}
</script>

<style scoped>
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