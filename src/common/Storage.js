class Storage {
    constructor(key) {
        this.key = key;
    }

    add(value) {
        // if (typeof value )
        localStorage.setItem(this.key, JSON.stringify(value));
    }



    get() {
        const items = localStorage.getItem(this.key);
        if (!items) return [];
        const json = JSON.parse(items)
        return json
    }


    deleteOne(id) {
        const items = this.get();
        const newItems = items.filter(item => item.id !== id);
        this.add(newItems);
    }


    clear() {
        this.add([])
    }



}

export default Storage;