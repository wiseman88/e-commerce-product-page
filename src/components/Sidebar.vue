<template>
    <aside class="fixed top-0 left-0 z-10 bg-black/75 w-screen h-screen" :class="display ? '' : 'hidden'">
        <div class="relative bg-white h-screen w-[250px]">
            <button class="absolute left-[26px] top-[25px]" @click="$emit('closeSidebar')">
                <img src="/images/icon-close.svg" alt="close">
            </button>
            <nav class="pt-[92px] pl-[26px]">
                <ul class="font-bold text-very-dark-blue" style="font-size: 17px;">
                    <li v-for="item in navigation" class="pb-5 last:pb-0">
                        {{ item.name }}
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup>
const props = defineProps({
    display: Boolean
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