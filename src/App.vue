<script setup lang="ts">
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import { useTaskStore } from './stores/taskStore'
import ButtonFilter from './components/ButtonFilter.vue'
import { type TaskFilter } from './domain/task/Task'
const store = useTaskStore()

const filters: TaskFilter[] = ['all', 'todo', 'done']
</script>

<template>
  <main>
    <TaskForm />
    <h3 v-if="!store.tasks.length">Adicione uma tarefa para começar</h3>
    <h3 v-else>{{ store.totalDone }} / {{ store.tasks.length }} tarefas concluídas.</h3>
    <div v-if="store.tasks.length" class="button-container">
      <ButtonFilter class="button-container" v-if="store.tasks.length" v-for="filter in filters" :key="filter" :filter
        :currentFilter="store.filter" @set-filter="store.setFilter" />
    </div>
    <TaskList :tasks="store.filteredTasks" />
  </main>
</template>

<style>
main {
  max-width: 800px;
  margin: 1rem auto;
}

.button-container {
  display: flex;
  justify-content: end;
  gap: 0.5rem
}
</style>