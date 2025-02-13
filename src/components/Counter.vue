<script setup>
    import { useCounterStore } from '@/stores/counter'

    const storeCounter = useCounterStore()
</script>

<template>
    <div class="count">{{ storeCounter.count }}</div>
</template>