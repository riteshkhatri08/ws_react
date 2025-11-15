import React, { useState, type ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import type { ListProps } from "./interface/Common";
import { v4 as uuidv4 } from 'uuid';



const ListControl: React.FC<ListProps> = ({ list, listSetter }) => {
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
            listSetter([{ id: uuidv4(), value: inputText }, ...list]);

            // Clear text
            setInputText("");
        }
    };
    const handleClearButtonClick = () => {
        listSetter([]);
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
