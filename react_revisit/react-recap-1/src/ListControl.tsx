import React, { useState, type ChangeEvent } from 'react'
import type { TodoListProps } from './TodoList';

// const handleAddItemButtonClick = (changeEvent: React.ChangeEvent<HTMLInputElement>, listSetter: React.Dispatch<React.SetStateAction<TodoListProps>>, list: TodoListProps) => {
//     listSetter({ items: list.items.concat([changeEvent.target.value]) });
// }

interface ListControlProps {
    list: TodoListProps
    listSetter: React.Dispatch<React.SetStateAction<TodoListProps>>
}


const ListControl: React.FC<ListControlProps> = ({ list, listSetter }) => {
    const [inputText, setInputText] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddButtonClick();
        }
    }
    const handleAddButtonClick = () => {
        if (inputText.trim().length !== 0) {
            // Add item to list
            listSetter({ items: list.items.concat(inputText) })
            // Clear text 
            setInputText('');
        }
    }
    const handleClearButtonClick = () => {
        listSetter({ items: [] })
    }

    return (
        <div>
            <input id="addItemInput" value={inputText} onChange={handleChange} onKeyDown={handleInputKeyPress} />
            <button id="addItemButton" onClick={handleAddButtonClick}> Add </button>
            <button id="clearAllButton" onClick={handleClearButtonClick}> Clear </button>
        </div>
    );

};


function getListControl() {
    return ListControl;
}
export default getListControl;