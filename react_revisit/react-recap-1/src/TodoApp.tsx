import React from 'react';
import TodoList from './TodoList';
import ListControl from './ListControl';
import { Provider } from 'react-redux';
import { store } from './store';

const TodoApp: React.FC = () => {

    return (
        <Provider store={store}>
            <div className="todoAppContainer">
                <div className='appTitle'>TODO APP</div>
                <>
                    <ListControl />
                    <TodoList />
                </>
            </div>
        </Provider>
    );
};


export default TodoApp;