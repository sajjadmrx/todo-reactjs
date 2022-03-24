import React from "react"
import { Badge } from 'react-bootstrap'

import 'font-awesome/css/font-awesome.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


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
                    <button type="button" className="btn btn-primary" onClick={() => handleEdit(todo, props.updateTodo)}  >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={props.deleteHandle}>
                        <i className="fa fa-trash"></i>
                    </button>
                    {/* button check */}
                    {todo.completed ? <button type="button" className="btn btn-warning" onClick={props.toggleHandle} >
                        <i className="fa fa-times"></i>
                    </button> : <button type="button" className="btn btn-success" onClick={props.toggleHandle} >
                        <i className="fa fa-check"></i>
                    </button>}
                </div>
            </td>
        </tr>

    )
}

function handleEdit(todo, cb) {

    MySwal.fire({
        title: 'Edit Todo',
        input: 'text',
        inputValue: todo.name,
        showCancelButton: true,
        confirmButtonText: 'Edit',
        cancelButtonText: 'Cancel',
        inputValidator: (value) => {
            return !value && 'You need to write something!'
        },
        preConfirm: (value) => {
            todo.name = value
            cb(todo)
        },

    })
}


export default TodoItem