import { isValidTaskTitle } from "../../domain/task/taskRules";
import type { Task } from "../../domain/task/Task";

export function createTask(title: string): Task {
    if (!isValidTaskTitle(title)) {
        throw new Error('Título inválido')
    }
    return {
        id: crypto.randomUUID(),
        title: title.trim(),
        done: false
    }
}
