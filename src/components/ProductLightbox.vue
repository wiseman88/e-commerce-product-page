<template>
    <div class="fixed flex items-center justify-center z-20 inset-0 bg-black/75"
        :class="product.lightboxShow ? 'block' : 'hidden'">
        <div class="relative w-[550px]">
            <button class="absolute -top-[36px] right-0" @click="product.lightboxShow = false"
                @mouseenter="fillColor = 'hsl(26, 100%, 55%)'" @mouseleave="fillColor = '#fff'">
                <Svg :width="14" :height="15">
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        :fill="fillColor" fill-rule="evenodd" />
                </Svg>
            </button>
            <figure class="mb-[40px]">
                <img :src="imageUrl" alt="" class="rounded-[14px] w-full">
            </figure>
            <div class=" product-images-navigation flex justify-between w-[445px] mx-auto">
                <button v-for="(item, index) in productGallery" :key="index"
                    class="product-button group w-[92px] rounded-[10px] overflow-hidden" @click="setImgUrl($event)">
                    <figure>
                        <img :src="item.image" :alt="index" class="product-image" :class="{ 'active': index === 0 }">
                    </figure>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/product";
import Svg from "./Svg.vue";

const product = useProductStore();

let productGallery = [
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

let imageUrl = ref(productGallery[0].image);
let fillColor = ref('#fff');

const setImgUrl = (event) => {
    let imgElements = document.querySelectorAll('.product-image');
    imgElements.forEach(img => {
        img.classList.remove('active');
    });
    imageUrl.value = event.target.src;

    console.log(event.target)
    event.target.classList.add('active');
}
</script>

<style scoped>

</style>