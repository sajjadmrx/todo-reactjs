import Storage from "./Storage";
const todoStorage = new Storage
class TodoQuerys {

    constructor(key) {
        this.db = new Storage(key);
    }

    getAll() {
        return this.db.get()
    }


    addTodo(todo) {
        todo.createdAt = new Date().getTime();
        const items = this.db.get()
        items.push(todo);
        this.db.add(items);
    }

    deleteById(id) {
        this.db.deleteOne(id)
    }


    deleteAll() {
        this.db.clear()
    }
}

export default TodoQuerys;