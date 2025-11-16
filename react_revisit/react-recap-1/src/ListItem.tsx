
import React, { useContext } from "react";
import type { Task } from "./interface/Common";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TodoAppContext } from "./TodoApp";
const ListItem: React.FC<{ task: Task }> = ({
    task,
}) => {
    const { list, setList } = useContext(TodoAppContext);
    const removeTask = (id: string) => {
        setList(list.filter((current) => current.id === id ? false : true));
    }
    const completeTask = (id: string) => {
        setList(list.map((current) => { return current.id === id ? { ...current, isComplete: true } : current }));
    }

    return (
        <li key={"li-" + task.id} className="listItem">
            <input type="checkbox" id={"input-" + task.id} value={task.value} />{" "}
            <label className="listItemLabel" htmlFor={"input-" + task.id} style={{ textDecorationStyle: "double", textDecoration: task.isComplete ? 'line-through' : 'none' }}>
                {task.value}
            </label>
            <IconButton aria-label="delete" sx={{ color: "green" }} disabled={task.isComplete} onClick={() => completeTask(task.id)}>
                <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label="delete" color="error" onClick={() => removeTask(task.id)}>
                <DeleteIcon />
            </IconButton>

        </li>
    );
};

export default ListItem;
