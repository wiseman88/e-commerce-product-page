<template>
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
        <slot></slot>
    </svg>
</template>

<script setup>

// const fillColor = "#69707D";

const props = defineProps({
    fillColor: String,
    width: [Number, String],
    height: [Number, String]
});
</script>

<style lang="scss" scoped>

</style>