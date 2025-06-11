import type { Task, TaskFilter } from "./Task";

export function isValidTaskTitle(title: string): boolean {
    return !!title && title.trim().length > 0
}

export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
    if (filter === "todo") return tasks.filter(task => !task.done)
    if (filter === "done") return tasks.filter(task => task.done)
    return tasks
}
