<template>
    <header>
        <nav class="px-6 pt-5 pb-6 flex items-center justify-between">
            <div class="flex">
                <button class="mr-4" @click="showSidebar">
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
                <button class="relative mr-[22px]" @click="showCart">
                    <span v-if="product.inCart"
                        class="absolute top-[-3px] right-[-6px] text-[9px] px-[7px] rounded-[6px] font-bold bg-orange text-white">
                        {{ counter.count }}
                    </span>
                    <SvgCart :fillColor="fillColor" @mouseover="toggleColor(activeSvgColor)"
                        @mouseleave="toggleColor(svgColor)" />
                </button>
                <button>
                    <img class="w-6" src="../assets/images/image-avatar.png" alt="avatar">
                </button>
            </div>
        </nav>
        <Cart :show="show" />
    </header>
    <Sidebar @closeSidebar="showSidebar" :display="display" />
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter';
import { useProductStore } from '../stores/product';
import Cart from './Cart.vue';
import Sidebar from './Sidebar.vue';
import SvgCart from './SvgCart.vue';

const show = ref(false);
const display = ref(false);
const activeSvgColor = '#69707D';
const svgColor = 'hsl(220, 14%, 75%)';
let fillColor = ref(svgColor);

const showCart = () => {
    show.value = !show.value;
    toggleColor(activeSvgColor);
}

const showSidebar = () => {
    display.value = !display.value;
}

const toggleColor = (color) => {
    show.value === true ? fillColor.value = activeSvgColor : fillColor.value = color;
}

const counter = useCounterStore();
const product = useProductStore();
</script>

<style lang="scss" scoped>

</style>