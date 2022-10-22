<template>
    <div class="fixed z-20 inset-0 bg-black/75" :class="product.lightboxShow ? 'block' : 'hidden'">

    </div>
</template>

<script setup>
import { useProductStore } from "../stores/product";

const product = useProductStore();
</script>

<style scoped>

</style>