import React from "react";
import ListItem from "./ListItem";
import { type Task } from './Common'
import { useSelector } from "react-redux";

const TodoList: React.FC = () => {
    const list = useSelector((state: any) => state.todoList.tasks);
    // const {list} = useContext(TodoAppContext);
    return (
        <ul className="todoList-ul">
            {list.map((task: Task) => (
                // Add a list item for each item
                <ListItem key={"listItem-" + task.id} task={task} />
            ))}
        </ul>
    );
};

export default TodoList;