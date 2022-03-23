import React from "react";

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
                            <th>ID</th>
                            <th>Todo</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }

}

export default TableTodos;