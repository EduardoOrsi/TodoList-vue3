<script setup lang="ts">
import type { Task } from '../domain/task/Task';
import { useTaskStore } from '../stores/taskStore';

defineProps<{
    tasks: Task[]
}>()

const store = useTaskStore()
</script>

<template>
    <TransitionGroup class="task-list" name="task-list" tag="div">
        <article v-for="task in tasks" :key="task.id" class="task">
            <label>
                <input type="checkbox" :checked="task.done" @change="store.toggleDone(task.id)" />
                <span :class="{ done: task.done }">{{ task.title }}</span>
            </label>
            <button class="outline" @click="store.remove(task.id)">Remover</button>
        </article>
    </TransitionGroup>
</template>

<style scoped>
.task-list {
    margin-top: 1rem;
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.done {
    text-decoration: line-through;
}

.task-list-enter-active,
.task-list-leave-active {
    transition: all 0.5s ease;
}

.task-list-enter-from,
.task-list-leave-to {
    opacity: 0;
    transform: translateX(300px);
}
</style>