<template>
    <div class="fixed flex items-center justify-center z-20 inset-0 bg-black/75"
        :class="product.lightboxShow ? 'block' : 'hidden'">
        <div class="relative w-[550px]">
            <button class="absolute -top-[36px] right-0" @click="product.showLightbox"
                @mouseenter="fillColor = 'hsl(26, 100%, 55%)'" @mouseleave="fillColor = '#fff'">
                <Svg :width="14" :height="15">
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        :fill="fillColor" fill-rule="evenodd" />
                </Svg>
            </button>
            <div class="relative">
                <figure class="mb-[40px]">
                    <img :src="imageUrl" :alt="galleryItem" class="rounded-[14px] w-full">
                </figure>
                <button class="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                    @click="prevImage(galleryItem)">
                    <figure>
                        <img class="mx-auto mr-[16px] w-[9px]" src="../assets/images/icon-previous.svg" alt="prev">
                    </figure>
                </button>
                <button class="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                    @click="nextImage(galleryItem)">
                    <figure>
                        <img class="mx-auto ml-[16px] w-[9px]" src="../assets/images/icon-next.svg" alt="next">
                    </figure>
                </button>
            </div>
            <div class=" product-images-navigation flex justify-between w-[445px] mx-auto">
                <button v-for="(item, index) in productGallery" :key="index"
                    class="product-button group w-[92px] rounded-[10px] overflow-hidden" @click="setImgUrl($event)">
                    <figure class="bg-white">
                        <img :src="item.image" :alt="index" class="product-image"
                            :class="{ 'active': item.image === imageUrl }">
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
let galleryItem = ref(0)
let fillColor = ref('#fff');

const setImgUrl = (event) => {
    imageUrl.value = event.target.attributes.src.value;
    galleryItem.value = event.target.alt;
}

const nextImage = (id) => {
    if (id < productGallery.length - 1) {
        id++;
        imageUrl.value = productGallery[id].image;
        galleryItem.value = id;
    } else {
        return;
    }
}

const prevImage = (id) => {
    if (id > 0) {
        id--;
        imageUrl.value = productGallery[id].image;
        galleryItem.value = id;
    } else {
        return;
    }
}
</script>

<style scoped>

</style>