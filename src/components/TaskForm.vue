<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
    addTask: [newTask: string]
}>()

const newTask = ref('')
const error = ref('')

function onSubmit() {
    if (newTask.value.trim()) {
        emit("addTask", newTask.value.trim())
        newTask.value = ''
    } else {
        error.value = "Tarefa não pode ser vazia."
        newTask.value = ''
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
                Add
            </button>
        </div>
    </form>
</template>
