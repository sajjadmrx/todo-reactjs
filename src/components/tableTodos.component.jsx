import React from "react";
import TodoItem from "./todoItem.component";
class TableTodos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table-wrapper table-responsive">
                <table className="table table-hover table-bordered  w-100">
                    <thead>
                        <tr>

                            <th>Todo</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map((todo, index) => {
                            return <TodoItem todo={todo} key={index} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default TableTodos;