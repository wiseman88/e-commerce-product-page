<template>
    <nav
        class="px-6 pt-5 pb-6 md:pt-[43px] md:pb-[45px] md:border-grayish-blue md:border-b-[1px] flex items-center justify-between">
        <div class="flex">
            <button class="md:hidden mr-4" @click="header.showSidebar()">
                <img src="../assets/images/icon-menu.svg" alt="menu">
            </button>
            <span class="md:mr-14">
                <img src="../assets/images/logo.svg" alt="logo">
            </span>
            <ul class="hidden md:flex text-dark-grayish-blue">
                <li v-for="item in navigation" class="relative group mr-[34px] hover:text-very-dark-blue"><a href="#">{{
                item.name
                }}</a>
                    <span class="absolute bottom-[-58px] left-0 h-1 w-full bg-transparent group-hover:bg-orange"></span>
                </li>
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
                <img class="w-6 md:w-[50px]" src="../assets/images/image-avatar.png" alt="avatar">
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

const navigation = [
    { name: 'Collections' },
    { name: 'Men' },
    { name: 'Woman' },
    { name: 'About' },
    { name: 'Contact' }
]
</script>

<style scoped>

</style>