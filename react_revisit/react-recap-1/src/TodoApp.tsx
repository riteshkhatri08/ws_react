import React, { useState } from 'react';
import { getTodoList, type TodoListProps } from './TodoList';
import getListControl from './ListControl';
import { Box } from '@mui/material';
const TodoApp: React.FC = () => {

    const [list, setlist] = useState<TodoListProps>({ items: [] });
    const TodoList = getTodoList();
    const ListControl = getListControl();

    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "space-evenly",
                gap: "16px",
                border: "2px solid pink",
                width: "100%"
            }}
        >
            <div>Welcome to TODO App</div>
            <Box sx={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                gap: "16px",
                border: "2px solid yello",
                margin: "5px"
            }}>
                <ListControl listSetter={setlist} list={list} />
                <TodoList {...list} />
                
            </Box>
        </Box>

    );
};


export default TodoApp;