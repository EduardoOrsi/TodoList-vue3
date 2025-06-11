import type { Task } from "../../domain/task/Task";

export function toggleTask(tasks: Task[], id: string): Task[] {
    return tasks.map(task => task.id === id ? { ...task, done: !task.done } : task)
}
