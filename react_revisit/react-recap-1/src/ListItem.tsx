import React from "react";

const ListItem: React.FC<{ itemText: string; index: number }> = ({
    itemText,
    index,
}) => {
    return (
        <li key={"li-"+index}>
            <input type="checkbox" id={"input-" + index} value={itemText} />{" "}
            <label htmlFor={"input-" + index}>{itemText}</label>{" "}
        </li>
    );
};

export default ListItem;
