import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormTodo from '../components/form.component'
import TableTodos from '../components/tableTodos.component'

import { sortWihtCreatedAt, sortWithCompleted, sortWithCreatedAtAndCompleted } from '../common/helper'
import TodoQuerys from '../common/todoQuerys'

const todoQuerys = new TodoQuerys('todos')
class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: sortWithCreatedAtAndCompleted(todoQuerys.getAll()),
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

        const oldTodos = sortWihtCreatedAt(todoQuerys.getAll())
        oldTodos.unshift(todo)
        this.setState({
            todos: oldTodos
        })
        todoQuerys.addTodo(todo)
    }

    deleteTodo(id) {
        todoQuerys.deleteById(id)
        const todos = todoQuerys.getAll();
        this.setState({
            todos: sortWithCreatedAtAndCompleted(todos)
        })
    }

    toggleComplete(id) {
        const todos = todoQuerys.getAll();
        const todo = todos.find(todo => todo.id === id);
        if (!todo) {
            return alert('Todo not found')
        }

        todo.completed = !todo.completed;

        todoQuerys.deleteAll();
        todoQuerys.db.add(todos)
        this.setState({ todos: sortWithCompleted(todos) })

    }


}


export default Todo