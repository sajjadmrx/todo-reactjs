import Storage from "./Storage";
class ThemeQuerys {

    constructor(key) {
        this.db = new Storage(key);
    }

    get() {
        return this.db.get()
    }

    set(theme) {
        this.db.add(theme)
    }

}

export default ThemeQuerys;