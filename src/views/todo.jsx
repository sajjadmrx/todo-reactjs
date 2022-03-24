import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormTodo from '../components/form.component'
import TableTodos from '../components/tableTodos.component'
import Stroage from '../common/storeage'
import { sortWihtCreatedAt, sortWithCompleted, sortWithCreatedAtAndCompleted } from '../common/helper'

const storage = new Stroage('todos')
class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: sortWithCreatedAtAndCompleted(storage.get()),
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
                        <TableTodos todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} toggleComplete={this.toggleComplete.bind(this)} />
                    </div>

                </section>
            </div>
        )
    }

    addToDo = (todo) => {
        const newStates = [...this.state.todos, todo]

        const oldTodos = sortWihtCreatedAt(storage.get())
        oldTodos.unshift(todo)
        this.setState({
            todos: oldTodos
        })
        storage.addTodo(todo)
    }

    deleteTodo(id) {
        storage.deleteOne(id)
        const todos = storage.get();
        this.setState({
            todos: sortWithCreatedAtAndCompleted(todos)
        })
    }

    toggleComplete(id) {
        const todos = storage.get();
        const todo = todos.find(todo => todo.id === id);
        if (!todo) {
            return alert('Todo not found')
        }

        todo.completed = !todo.completed;

        storage.clear();
        storage.add(todos)
        this.setState({ todos: sortWithCompleted(todos) })

    }


}


export default Todo