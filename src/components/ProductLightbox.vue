<template>
    <div class="fixed flex items-center justify-center z-20 inset-0 bg-black/75"
        :class="product.lightboxShow ? 'block' : 'hidden'">
        <div class="relative w-[550px] mt-[43px]">
            <button class="absolute -top-[36px] right-0" @click="product.lightboxShow = false"
                @mouseenter="fillColor = 'hsl(26, 100%, 55%)'" @mouseleave="fillColor = '#fff'">
                <Svg :width="14" :height="15">
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        :fill="fillColor" fill-rule="evenodd" />
                </Svg>
            </button>
            <div class="relative">
                <figure class="mb-[40px]">
                    <img :src="lightbox.mainImageUrl" :alt="lightbox.mainImageId" class="rounded-[14px] w-full">
                </figure>
                <button class="arrow absolute top-[237px] -left-[28px] transform w-14 h-14 rounded-full bg-white"
                    @click="lightbox.prevImage" @mouseenter="check($event)">
                    <Svg :width="12" :height="18" class="ml-[22px]">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </Svg>
                </button>
                <button class="arrow absolute top-[237px] -right-[28px] transform w-14 h-14 rounded-full bg-white"
                    @click="lightbox.nextImage">
                    <Svg :width="12" :height="18" class="ml-[22px]">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </Svg>
                </button>
            </div>
            <ProductListNavigation :product="lightbox" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useLightboxStore } from "../stores/lightbox";
import { useProductStore } from "../stores/product";
import ProductListNavigation from "./ProductListNavigation.vue";
import Svg from "./Svg.vue";

const product = useProductStore();
const lightbox = useLightboxStore();

let fillColor = ref('#fff');
</script>

<style scoped>
.arrow:hover>svg>path {
    stroke: hsl(26, 100%, 55%);
}
</style>