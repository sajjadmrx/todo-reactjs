import React from "react";


class FormTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <form onSubmit={this.#handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                    <div className="form-group mr-3 mb-0">
                        <input ng-model="yourTask" type="text" name="todo" className="form-control ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched" id="formGroupExampleInput" placeholder="Enter a task here">
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary mr-3"  >
                        Add To Todo List
                    </button>

                </div>
            </form>
        )
    }

    #handleSubmit(e) {
        e.preventDefault();
        const target = e.target;
        const todo = target.todo.value;
        console.log(todo);
        // this.props
    }
}

export default FormTodo;