import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormTodo from '../components/form.component'
import TableTodos from '../components/tableTodos.component'
import Stroage from '../common/storeage'

const storage = new Stroage('todos')
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: storage.get(),
        }

    }

    render() {
        return (
            <div>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">TODO APP</h1>
                            <p className="lead text-muted">
                                A simple todo app with react and bootstrap
                            </p>

                        </div>
                    </div>
                    <div className="app-container d-flex align-items-center justify-content-center flex-column ng-scope ng-binding" ng-app="myApp" ng-controller="myController">
                        <FormTodo todos={this.state.todos} addTodo={this.addToDo} />
                        <TableTodos todos={this.state.todos} />
                    </div>

                </section>
            </div>
        )
    }

    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
        storage.addTodo(todo)
    }



}


export default Todo