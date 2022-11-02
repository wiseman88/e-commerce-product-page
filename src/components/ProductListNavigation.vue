<template>
    <div class="product-images-navigation flex justify-between w-[445px] mx-auto">
        <button v-for="(item, index) in product.images" :key="index"
            class="product-button group w-[92px] rounded-[10px] overflow-hidden" @click="product.setImageUrl($event)">
            <span class="block bg-white">
                <img :src="item.image" :alt="index" class="product-image"
                    :class="{ 'active': item.image === product.mainImageUrl }"></span>
        </button>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
})
</script>

<style scoped>

</style>