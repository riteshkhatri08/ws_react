import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string;
    value: string;
    isComplete?: boolean;
}

export const createTask = (value: string, isComplete?: boolean): Task => {
    return { id: uuidv4(), value: value, isComplete: isComplete || false }
}

// type for redux store state
export interface TodoListState {
    tasks: Task[]
}