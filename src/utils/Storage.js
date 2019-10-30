export default {
    set(...item) {
        if(item.length==2) {
            window.sessionStorage.setItem(item[0],item[1])
        }
        else {
            const entries = Object.entries(item[0])
            entries.forEach(a => {
                window.sessionStorage.setItem(a[0],a[1])
            })
        }
    },
    get(item) {
        return window.sessionStorage.getItem(item)
    },
    remove(item) {
        window.sessionStorage.removeItem(item)
    },
    clear() {
        window.sessionStorage.clear()
    }
}