<template>
    <nav class="px-6 pt-5 pb-6 flex items-center justify-between">
        <div class="flex">
            <button class="mr-4" @click="header.showSidebar()">
                <img src="../assets/images/icon-menu.svg" alt="menu">
            </button>
            <span>
                <img src="../assets/images/logo.svg" alt="logo">
            </span>
            <ul class="hidden">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="flex">
            <button class="relative mr-[22px]" @click="header.showCart()">
                <span v-if="product.inCart"
                    class="absolute top-[-3px] right-[-6px] text-[9px] px-[7px] rounded-[6px] font-bold bg-orange text-white">
                    {{ counter.count }}
                </span>
                <SvgCart :fillColor="header.fillColor" @mouseover="header.toggleColor(header.activeSvgColor)"
                    @mouseleave="header.toggleColor(header.svgColor)" />
            </button>
            <button>
                <img class="w-6" src="../assets/images/image-avatar.png" alt="avatar">
            </button>
        </div>
    </nav>
</template>

<script setup>
import SvgCart from './SvgCart.vue';

const props = defineProps({
    header: Object,
    product: Object,
    counter: Object
})
</script>

<style scoped>

</style>