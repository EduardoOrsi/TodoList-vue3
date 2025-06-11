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
    <h3>Task App</h3>
    <TaskForm />
    <h3 v-if="!store.tasks.length">Adicione uma tarefa para começar</h3>
    <h3 v-else>{{ store.totalDone }}/{{ store.tasks.length }} tarefas concluídas.</h3>
    <ButtonFilter v-if="store.tasks.length" v-for="filter in filters" :key="filter" :filter
      :currentFilter="store.filter" @set-filter="store.setFilter" />
    <TaskList :tasks="store.filteredTasks" />
  </main>
</template>