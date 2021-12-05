import React from 'react';
import {Form, Input, Button} from 'antd';

function validate(toDo) {
    return toDo
        && toDo.title
        && toDo.description
        && toDo.description.length >= 3
        && toDo.title.length >= 3
        && toDo.title.substr(0, 1) === toDo.title.substr(0, 1).toUpperCase();
}

export const ToDoForm = (props) => {
    const {onSubmit} = props;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (onSubmit ) {
            if(validate(values)) {
                onSubmit(values.title, values.description + ' | ' + (new Date()).toLocaleString());
            } else {
                alert('Validation failed');
            }
        }
        form.resetFields();
    };

    return (
        <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
            <Form.Item name="title" className="todo-form-input">
                <Input placeholder={'Title'}/>
            </Form.Item>
            <Form.Item name="description" className="todo-form-input">
                <Input placeholder={'Description'}/>
            </Form.Item>
            <Form.Item className="todo-form-actions">
                <Button htmlType="submit" type="primary">Add</Button>
            </Form.Item>
        </Form>
    )
};
