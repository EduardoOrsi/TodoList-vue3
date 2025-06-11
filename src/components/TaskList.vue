<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore';

const store = useTaskStore()
</script>

<template>
    <div v-for="task in store.filteredTasks" :key="task.id">
        <label>
            <input type="checkbox" :checked="task.done" @change="store.toggleDone(task.id)" />
            <span :class="{ done: task.done }">{{ task.title }}</span>
        </label>
        <button @click="store.remove(task.id)">Remover</button>
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>