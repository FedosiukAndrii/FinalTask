import React from 'react';
import {Button, Checkbox, Image} from 'antd';

export const ToDoItem = (props) => {
    const {item, onCheck, onRemove} = props;
    const onRemoveItem = (e) => {
        e.preventDefault();

        if (onRemove) {
            onRemove(item.id);
        }
    }

    const onCheckItem = () => {
        if (onCheck) {
            onCheck(item.id);
        }
    }

    return (
        <li className="todo-item" key={item.id}>
            <Checkbox
                checked={item.checked}
                onChange={onCheckItem}
            >{item.title + ' | ' + item.description}</Checkbox>
            <Button danger onClick={onRemoveItem}>
                <Image className="delete-todo"
                    src="https://icon-library.com/images/trash-icon-vector/trash-icon-vector-2.jpg"></Image></Button>
        </li>
    )
}