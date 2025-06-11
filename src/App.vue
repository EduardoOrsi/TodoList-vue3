<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import type { Task, TaskFilter } from './types'
import ButtonFilter from './components/ButtonFilter.vue'

const message = ref('Task App')
const tasks = ref<Task[]>([])
const filter = ref<TaskFilter>("all")

const totalDone = computed(() => tasks
  .value
  .reduce((total, tasks) => tasks.done ? total + 1 : total, 0))

function addTask(newTask: string) {
  tasks.value.push({
    id: crypto.randomUUID(),
    title: newTask,
    done: false
  })
}

function toggleDone(id: string) {
  const task = tasks.value.find((task) => task.id === id)
  if (task) {
    task.done = !task.done
  }
}

const filteredTasks = computed(() => {
  switch (filter.value) {
    case 'all':
      return tasks.value
    case 'todo':
      return tasks.value.filter((task) => !task.done)
    case 'done':
      return tasks.value.filter((task) => task.done)
  }
  return tasks.value
})

function removeTask(id: string) {
  const index = tasks.value.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}

function setFilter(value: TaskFilter) {
  filter.value = value
}
</script>

<template>
  <main>
    <h3>{{ message }}</h3>
    <TaskForm @add-task="addTask" />
    <h3 v-if="!tasks.length">Adicione uma tarefa para começar</h3>
    <h3 v-else>{{ totalDone }}/ {{ tasks.length }} tarefas concluídas.</h3>
    <div v-if="tasks.length" class="button-container">
      <ButtonFilter :currentFilter="filter" :filter="'all'" @set-filter="setFilter" />
      <ButtonFilter :currentFilter="filter" :filter="'todo'" @set-filter="setFilter" />
      <ButtonFilter :currentFilter="filter" :filter="'done'" @set-filter="setFilter" />
    </div>
    <TaskList :tasks="filteredTasks" @toggle-done="toggleDone" @remove-task="removeTask" />
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
