<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
const newTask = ref('')
const error = ref('')

function onSubmit() {
    try {
        store.addtask(newTask.value)
        newTask.value = ''
        error.value = ''
    } catch (e) {
        error.value = (e as Error).message
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <input v-model="newTask" placeholder="Nova tarefa" />
        <button>Adicionar</button>
        <span v-if="error">{{ error }}</span>
    </form>
</template>