<template>
    <div 
        id="cart" 
        class="absolute w-[360px] right-2 rounded-lg bg-white"
        :class="show ? '' : 'hidden'" >
        <div class="cart-top px-6 pt-5 pb-[23px] border-[#E8E7EC] border-b-[1px]">
            <h3 class="font-semibold">
                Cart
            </h3>
        </div>
        <div class="card-bottom flex items-center justify-center h-[188px]">
            <p class="font-semibold text-dark-grayish-blue">
                <span>Your cart is empty.</span>
            </p>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        show: Boolean
    })

</script>

<style scoped>
</style>