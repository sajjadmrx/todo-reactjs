class Stroage {
    constructor(key) {
        this.key = key;

    }

    add(value) {
        localStorage.setItem(this.key, value);
    }



    get() {
        const items = localStorage.getItem(this.key);
        return JSON.parse(items) || []
    }

    addTodo(todo) {
        const items = this.get()
        items.push(todo);
        this.add(JSON.stringify(items));
    }

    deleteOne(id) {
        const items = this.get();
        const newItems = items.filter(item => item.id !== id);
        this.add(JSON.stringify(newItems));
    }

    clear() {
        localStorage.setItem(this.key, JSON.stringify([]));
    }




}

export default Stroage;