import React from "react"
import { Badge } from 'react-bootstrap'

import 'font-awesome/css/font-awesome.min.css';

function TodoItem(props) {
    const todo = props.todo
    return (
        <tr>
            <td>{todo.name}</td>
            <td>
                <Badge pill bg={`${todo.completed ? "success" : "warning"}`} text="dark">
                    {todo.completed ? "Completed" : "Pending"}
                </Badge>
            </td>
            <td className="d-flex justify-content-center align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary"  >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                    {/* button check */}
                    {todo.completed ? <button type="button" className="btn btn-warning" >
                        <i className="fa fa-times"></i>
                    </button> : <button type="button" className="btn btn-success" >
                        <i className="fa fa-check"></i>
                    </button>}
                </div>
            </td>
        </tr>

    )
}

export default TodoItem