<template>
    <div class="md:ml-12 md:mr-[102px]">
        <div class="products-slider-wrapper relative md:hidden">
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
        <div class="hidden md:block">
            <a href="#" class="block w-[445px] mb-[30px]">
                <figure>
                    <img :src="mainImageUrl" alt="" class="rounded-[14px]">
                </figure>
            </a>
            <div class="product-images-navigation flex justify-between">
                <button v-for="(item, index) in images" :key="index"
                    class="product-button group w-[92px] rounded-[10px] overflow-hidden" @click="setImageUrl($event)">
                    <figure>
                        <img :src="item.image" :alt="index" class="product-image" :class="{ 'active': index === 0 }">
                    </figure>
                </button>
            </div>
        </div>
    </div>
    <ProductLightbox />
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue';
import ProductLightbox from './ProductLightbox.vue';

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

let mainImageUrl = ref(images[0].image);

const setImageUrl = (event) => {
    let imgElements = document.querySelectorAll('.product-image');

    imgElements.forEach(img => {
        console.log(img.classList.remove('active'));
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