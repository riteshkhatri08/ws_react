import React, { useState } from 'react';
import { getTodoList } from './TodoList';
import getListControl from './ListControl';
import {type Task, type ListProps} from './interface/Common'

const TodoApp: React.FC = () => {
  
    const [list, setList] = useState<Task[]>([]);

    const TodoList = getTodoList();
    const ListControl = getListControl();
    
    return (
        <div className="todoAppContainer">
            <div className='appTitle'>Welcome to TODO App</div>
            <>
                <ListControl listSetter={setList} list={list} />
                <TodoList listSetter={setList} list={list} />
            </>
        </div>

    );
};


export default TodoApp;