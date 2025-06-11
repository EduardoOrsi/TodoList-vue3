import type { Task } from "../../domain/task/Task"

const STORAGE_KEY = "tasks"

export function loadTasks(): Task[] {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
}

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}