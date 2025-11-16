import React, { useContext, useState, type ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTask } from "./interface/Common";
import Axios from 'axios';
import { TodoAppContext } from "./TodoApp";




const ListControl: React.FC = () => {
    const { list, setList } = useContext(TodoAppContext);
    const [inputText, setInputText] = useState<string>("");

    const addTask = (taskValue: string): boolean => {
        if (taskValue.trim().length !== 0) {
            // Add item to list
            setList([createTask(taskValue), ...list]);
            return true;
        }
        return false;
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleInputKeyPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            handleAddButtonClick();
        }
    };
    const handleAddButtonClick = () => {
        addTask(inputText) && setInputText("");
    };
    const handleClearButtonClick = () => {
        setList([]);
    };

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

function getListControl() {
    return ListControl;
}
export default getListControl;
