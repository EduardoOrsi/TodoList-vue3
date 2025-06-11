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
        <fieldset role="group">
            <input v-model="newTask" :aria-invalid="!!error || undefined" name="newTask" @input="error = ''">
            <input type="submit" value="Adicionar" />
        </fieldset>
        <small v-if="error" id="invalid-helper" class="error">
            {{ error }}
        </small>
    </form>
</template>

<style>
.error {
    color: #e08383;
}
</style>