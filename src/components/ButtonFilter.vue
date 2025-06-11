<script setup lang="ts">
import type { TaskFilter } from '../types';


const props = defineProps<{
    filter: TaskFilter
    currentFilter: TaskFilter
}>()

const emit = defineEmits<{
    setFilter: [filter: TaskFilter]
}>()

</script>

<template>
    <button class="secondary" :class="{ contrast: props.currentFilter === props.filter }"
        @click="emit('setFilter', props.filter)">
        {{ props.filter }}
    </button>
</template>

<style>
button {
    text-transform: capitalize;
}
</style>