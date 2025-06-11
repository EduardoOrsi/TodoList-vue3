<script setup lang="ts">
import type { TaskFilter } from '../domain/task/Task';

const props = defineProps<{
    filter: TaskFilter,
    currentFilter: TaskFilter
}>()

const emit = defineEmits<{
    setFilter: [TaskFilter]
}>()

const filterLabels: Record<TaskFilter, string> = {
    all: 'Todas',
    todo: 'Pendentes',
    done: 'Concluídas'
}
</script>

<template>
    <button :class="{ active: props.filter === props.currentFilter }" @click="emit('setFilter', props.filter)">
        {{ filterLabels[props.filter] }}
    </button>
</template>
