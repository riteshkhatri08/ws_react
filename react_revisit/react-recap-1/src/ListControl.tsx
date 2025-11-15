import React, { useState, type ChangeEvent } from "react";
import type { TodoListProps } from "./TodoList";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// const handleAddItemButtonClick = (changeEvent: React.ChangeEvent<HTMLInputElement>, listSetter: React.Dispatch<React.SetStateAction<TodoListProps>>, list: TodoListProps) => {
//     listSetter({ items: list.items.concat([changeEvent.target.value]) });
// }

interface ListControlProps {
    list: TodoListProps;
    listSetter: React.Dispatch<React.SetStateAction<TodoListProps>>;
}

const ListControl: React.FC<ListControlProps> = ({ list, listSetter }) => {
    const [inputText, setInputText] = useState<string>("");

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
        if (inputText.trim().length !== 0) {
            // Add item to list
            listSetter({ items: [inputText, ...list.items] });
            // Clear text
            setInputText("");
        }
    };
    const handleClearButtonClick = () => {
        listSetter({ items: [] });
    };
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
            </div>
        </div>
    );
};

function getListControl() {
    return ListControl;
}
export default getListControl;
