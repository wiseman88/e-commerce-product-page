<template>
    <div class="md:ml-12 md:mr-[102px]">
        <div class="products-slider-wrapper relative md:hidden">
            <Carousel ref="carousel" v-model="currentSlide">
                <Slide v-for="slide in product.images" :key="slide">
                    <img :src="slide.image" alt="product_1" class="object-cover w-full h-[300px]" />
                </Slide>
            </Carousel>
            <div>
                <button class="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                    @click="currentSlide--">
                    <img class="mx-auto mr-[16px] w-[9px]" src="/images/icon-previous.svg" alt="prev">
                </button>
                <button class="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                    @click="currentSlide++">
                    <img class="mx-auto ml-[16px] w-[9px]" src="/images/icon-next.svg" alt="next">
                </button>
            </div>
        </div>
        <ProductImageView :styles="'w-[445px] mb-[30px]'"></ProductImageView>
    </div>
    <ProductLightbox />
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue';
import ProductLightbox from './ProductLightbox.vue';
import { useProductStore } from '../stores/product';
import ProductImageView from './ProductImageView.vue';

const currentSlide = ref(1);
const product = useProductStore();

</script>

<style scoped>

</style>