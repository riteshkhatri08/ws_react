import React, { useState } from 'react';
import { getTodoList, type TodoListProps } from './TodoList';
import getListControl from './ListControl';
const TodoApp: React.FC = () => {

    const [list, setlist] = useState<TodoListProps>({ items: [] });
    const TodoList = getTodoList();
    const ListControl = getListControl();

    return (<>
        <div>
            <div>Welcome to TODO App</div>
            <div>
                <TodoList {...list} />
                <ListControl listSetter={setlist} list={list} />
            </div>
        </div>

    </>);
};


export default TodoApp;