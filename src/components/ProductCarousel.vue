<template>
    <div class="products-slider-wrapper relative">
        <Carousel ref="carousel" v-model="currentSlide">
            <Slide v-for="slide in images" :key="slide">
                <img :src="slide.image" alt="product_1" class="object-cover w-full h-[300px]" />
            </Slide>
        </Carousel>
        <div>
            <button class="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                @click="currentSlide--">
                <figure>
                    <img class="mx-auto mr-[16px] w-[9px]" src="../assets/images/icon-previous.svg" alt="prev">
                </figure>
            </button>
            <button class="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                @click="currentSlide++">
                <figure>
                    <img class="mx-auto ml-[16px] w-[9px]" src="../assets/images/icon-next.svg" alt="next">
                </figure>
            </button>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const currentSlide = ref(1);

const images = [
    {
        "id": 1,
        "image": "/src/assets/images/image-product-1.jpg",
        'thumbnail': "/src/assets/images/image-product-1-thumbnail.jpg"
    },
    {
        "id": 2,
        "image": "/src/assets/images/image-product-2.jpg",
        'thumbnail': "/src/assets/images/image-product-2-thumbnail.jpg"
    },
    {
        "id": 3,
        "image": "/src/assets/images/image-product-3.jpg",
        'thumbnail': "/src/assets/images/image-product-3-thumbnail.jpg"
    },
    {
        "id": 4,
        "image": "/src/assets/images/image-product-4.jpg",
        'thumbnail': "/src/assets/images/image-product-4-thumbnail.jpg"
    },
]

</script>

<style scoped>

</style>