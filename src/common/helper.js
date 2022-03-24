export function sortWihtCreatedAt(items) {
    return items.sort((a, b) => {
        return b.createdAt - a.createdAt
    })
}


export function sortWithCompleted(items) {
    return items.sort((a, b) => {
        // typeof a.completed === 'boolean'
        if (a.completed === b.completed) {
            return b.createdAt - a.createdAt
        }
        return a.completed - b.completed
    })
}

export function sortWithCreatedAtAndCompleted(items) {
    return items.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.createdAt - a.createdAt
        }
        return a.completed - b.completed
    })
}