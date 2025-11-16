
import React from "react";
import type { Task } from "./Common";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { completeTask, removeTask } from './store';
import { useDispatch } from "react-redux";
const ListItem: React.FC<{ task: Task }> = ({
    task,
}) => {
    const dispatch = useDispatch();
    return (
        <li key={"li-" + task.id} className="listItem">
            <input type="checkbox" id={"input-" + task.id} value={task.value} />{" "}
            <label className="listItemLabel" htmlFor={"input-" + task.id} style={{ textDecorationStyle: "double", textDecoration: task.isComplete ? 'line-through' : 'none' }}>
                {task.value}
            </label>
            <IconButton aria-label="complete" sx={{ color: "green" }} disabled={task.isComplete} onClick={() => dispatch(completeTask(task.id))}>
                <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label="delete" color="error" onClick={() => dispatch(removeTask(task.id))}>
                <DeleteIcon />
            </IconButton>

        </li>
    );
};

export default ListItem;
