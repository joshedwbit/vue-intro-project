const app = Vue.createApp({
    // data, functions, lifecycle hooks etc.
    // template: '<h1>Hi there2</h1>'

    data() {
        return {
            title: 'Wuthering heights',
            author: 'Joshua',
            age: 20,
            showBooks: true,
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeTitle() {
            this.title = "Wuthering heights pt 2"
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, integer) {
            console.log(e.type)
            if (integer) {
                console.log(integer);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
})

app.mount('#app')
// creates the app instance and mounts it to the element with id app