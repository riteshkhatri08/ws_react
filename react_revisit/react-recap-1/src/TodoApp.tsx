import React, { useState, createContext } from 'react';
import { getTodoList } from './TodoList';
import getListControl from './ListControl';
import { type Task } from './interface/Common'

export interface TodoAppContextType {
    list: Task[]
    setList: React.Dispatch<React.SetStateAction<Task[]>>
}

const defaultTodoAppContext: TodoAppContextType = {
    list: [],
    setList: () => { }
}

export const TodoAppContext = createContext<TodoAppContextType>(defaultTodoAppContext);

const TodoApp: React.FC = () => {
    const [list, setList] = useState<Task[]>([]);

    const TodoList = getTodoList();
    const ListControl = getListControl();

    return (
        <TodoAppContext.Provider value={{ list, setList }} >
            <div className="todoAppContainer">
                <div className='appTitle'>TODO APP</div>
                <>
                    <ListControl />
                    <TodoList />
                </>
            </div>
        </TodoAppContext.Provider>
    );
};


export default TodoApp;