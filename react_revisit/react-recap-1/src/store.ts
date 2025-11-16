import type { Task } from "./Common";
import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TodoListState {
    tasks: Task[]
}
const initialState: TodoListState = { tasks: [] };

// create a slice for Task list
const todoListSlice = createSlice(
    {
        name: "todoList",
        initialState: initialState,
        reducers: {
            // Add task reducer
            addNewTask: (state, action: PayloadAction<Task>) => {
                state.tasks = [action.payload, ...state.tasks];
            },
            // delete task reducer
            removeTask: (state, action: PayloadAction<string>) => {
                state.tasks = state.tasks.filter((task: Task) => task.id === action.payload ? false : true);
            },
            // clear all tasks reducer
            clearAllTasks: (state) => {
                state.tasks = initialState.tasks
            },
            // mark a task as completed , reducer
            completeTask: (state, action: PayloadAction<string>) => {
                state.tasks = state.tasks.map(task => { return task.id === action.payload ? { ...task, isComplete: true } : task; });
            }
        }

    }
);

export const {addNewTask, removeTask, clearAllTasks, completeTask} = todoListSlice.actions;

// Create a store
// Reducer takes in an Action and takes in a previous state then it will return a new updated stat
export const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
    }
});
