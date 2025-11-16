import React, { useState, type ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTask } from "./Common";
import Axios from 'axios';
import { useDispatch } from "react-redux";
import { addNewTask, clearAllTasks } from './store';



const ListControl: React.FC = () => {
    // dispatch to call reducers 
    const dispatch = useDispatch();

    // to hold the task typed in input
    const [inputText, setInputText] = useState<string>("");

    // Adds a new task by calling the createTask reducer
    const addTask = (taskValue: string): boolean => {
        if (taskValue.trim().length !== 0) {
            // Add item to list
            dispatch(addNewTask(createTask(taskValue)));
            return true;
        }
        return false;
    }

    // event handlers

    // keep track of text updates in input 
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    // to add a new task if enter key is pressed
    const handleInputKeyPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            addTask(inputText) && setInputText("");
        }
    };

    // too add a new task on add button click
    const handleAddButtonClick = () => {
        addTask(inputText) && setInputText("");
    };

    // to remove all tasks on clear button click
    const handleClearButtonClick = () => {
        dispatch(clearAllTasks());
    };

    // to add a random task on "add random" button click
    const handleAddRandomButtonClick = () => {
        Axios.get("https://dummyjson.com/todos/random").then((res) => addTask(res.data.todo));
    }
    return (
        <div className="listControl">
            <TextField
                id="new-todo-item-input-filled-basic"
                label="Add new item"
                variant="filled"
                size="small"
                value={inputText}
                onChange={handleChange}
                onKeyDown={handleInputKeyPress}
                className="itemInput"
            />
            <div className="listControlButtonPanel">
                <Button
                    id="addItemButton"
                    variant="contained"
                    onClick={handleAddButtonClick}
                >
                    Add
                </Button>
                <Button
                    id="clearAllButton"
                    variant="contained"
                    onClick={handleClearButtonClick}
                >
                    Clear
                </Button>
                <Button
                    id="addRandomButton"
                    variant="contained"
                    onClick={handleAddRandomButtonClick}
                >
                    Add Random Task
                </Button>
            </div>
        </div>
    );
};


export default ListControl;
