<template>
    <header>
        <Navbar :header="header" :product="product" :counter="counter" />
        <Cart :show="header.show" />
    </header>
    <Sidebar @closeSidebar="header.showSidebar()" :display="header.display" />
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import { useProductStore } from '../stores/product';
import { useHeaderStore } from '../stores/header';
import Cart from './Cart.vue';
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';

const counter = useCounterStore();
const product = useProductStore();
const header = useHeaderStore();
</script>

<style lang="scss" scoped>

</style>