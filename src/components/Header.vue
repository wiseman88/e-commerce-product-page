<template>
    <header>
        <nav class="px-6 pt-5 pb-6 flex items-center justify-between">
            <div class="flex">
                <button class="mr-4">
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
                <button class="mr-[22px]">
                    <img src="../assets/images/icon-cart.svg" alt="cart">
                </button>
                <button>
                    <img class="w-6" src="../assets/images/image-avatar.png" alt="avatar">
                </button>
            </div>
        </nav>
        <CartVue />
    </header>
</template>

<script setup>
import CartVue from './Cart.vue';
</script>

<style lang="scss" scoped>

</style>