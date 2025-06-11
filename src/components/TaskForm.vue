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
        <label for="new-task">Nova Tarefa</label>
        <input v-model="newTask" :aria-invalid="!!error || undefined" name="newTask" @input="error = ''">
        <small v-if="error" id="invalid-helper">
            {{ error }}
        </small>
        <div class="button-container">
            <button>
                Adicionar Tarefa
            </button>
        </div>
    </form>
</template>