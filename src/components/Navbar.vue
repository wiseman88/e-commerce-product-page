<template>
    <nav
        class="relative px-6 pt-5 pb-6 md:px-0 md:pt-[28px] md:pb-[34px] md:border-grayish-blue md:border-b-[1px] flex items-center justify-between">
        <div class="flex">
            <button class="md:hidden mr-4" @click="header.showSidebar()">
                <img src="../assets/images/icon-menu.svg" alt="menu">
            </button>
            <span class="md:mr-14">
                <img src="../assets/images/logo.svg" alt="logo">
            </span>
            <ul class="hidden md:flex text-dark-grayish-blue">
                <li v-for="item in navigation" class="relative group mr-8 hover:text-very-dark-blue"><a href="#">{{
                        item.name
                }}</a>
                    <span class="absolute bottom-[-58px] left-0 h-1 w-full bg-transparent group-hover:bg-orange"></span>
                </li>
            </ul>
        </div>
        <div class="flex">
            <button class="relative mr-[22px] md:mr-[46px]" @click="header.showCart()">
                <span v-if="product.inCart"
                    class="absolute top-[-3px] md:top-2 right-[-6px] text-[9px] px-[7px] rounded-[6px] font-bold bg-orange text-white">
                    {{ counter.count }}
                </span>
                <SvgCart :width="22" :height="20" @mouseover="header.toggleColor(header.activeSvgColor)"
                    @mouseleave="header.toggleColor(header.svgColor)">
                    <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        :fill="header.fillColor" fill-rule="nonzero" />
                </SvgCart>
            </button>
            <button>
                <img class="w-6 md:w-[50px]" src="../assets/images/image-avatar.png" alt="avatar">
            </button>
        </div>
        <Cart :show="header.show" />
    </nav>
</template>

<script setup>
import Cart from './Cart.vue';
import SvgCart from './Svg.vue';

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