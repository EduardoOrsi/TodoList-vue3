import type { Task } from "../../domain/task/Task";

export function removeTask(tasks: Task[], id: string): Task[] {
    return tasks.filter(task => task.id !== id)
}
