import React, { useState } from 'react';
import { getTodoList, type TodoListProps } from './TodoList';
import getListControl from './ListControl';
const TodoApp: React.FC = () => {

    const [list, setlist] = useState<TodoListProps>({ items: [] });
    const TodoList = getTodoList();
    const ListControl = getListControl();

    return (
        <div className="todoAppContainer">
            <div className='appTitle'>Welcome to TODO App</div>
            <ListControl listSetter={setlist} list={list} />
            <TodoList {...list} />
        </div>

    );
};


export default TodoApp;