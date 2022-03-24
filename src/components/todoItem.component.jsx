import React from "react"


function todoItem() {
    const todo = {}
    return (
        <tr>

            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>
                <Badge pill bg={`${todo.completed ? "success" : "warning"}`} text="dark">
                    {todo.completed ? "Completed" : "Pending"}
                </Badge>
            </td>
            <td className="d-flex justify-content-center align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={editButtonHandler}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={clickDelete.bind(this, todo.id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    {/* button check */}
                    {todo.completed ? <button type="button" className="btn btn-warning" onClick={clickComplete.bind(this, todo.id)}>
                        <i className="fa fa-times"></i>
                    </button> : <button type="button" className="btn btn-success" onClick={clickComplete.bind(this, todo.id)}>
                        <i className="fa fa-check"></i>
                    </button>}
                </div>
            </td>
        </tr>

    )
}

export default todoItem