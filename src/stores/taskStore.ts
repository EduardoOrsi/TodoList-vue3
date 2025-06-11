import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loadTasks, saveTasks } from '../infrastructure/task/taskRepository'
import type { TaskFilter, Task } from '../domain/task/Task'
import { createTask } from '../application/task/createTask'
import { toggleTask } from '../application/task/toggleTask'
import { removeTask } from '../application/task/removeTask'
import { filterTasks } from '../domain/task/taskRules'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref<Task[]>(loadTasks())
    const filter = ref<TaskFilter>('all')

    function addtask(title: string) {
        const task = createTask(title)
        tasks.value.push(task)
        saveTasks(tasks.value)
    }

    function toggleDone(id: string) {
        tasks.value = toggleTask(tasks.value, id)
        saveTasks(tasks.value)
    }

    function remove(id: string) {
        tasks.value = removeTask(tasks.value, id)
        saveTasks(tasks.value)
    }

    function setFilter(value: TaskFilter) {
        filter.value = value
    }

    const totalDone = computed(() => tasks.value.filter(t => t.done).length)
    const filteredTasks = computed(() => filterTasks(tasks.value, filter.value))


    return {
        tasks,
        filter,
        addtask,
        toggleDone,
        remove,
        setFilter,
        totalDone,
        filteredTasks
    }
})