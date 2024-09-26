const app = Vue.createApp({
    // data, functions, lifecycle hooks etc.
    // template: '<h1>Hi there2</h1>'

    data() {
        return {
            title: 'Wuthering heights',
            author: 'Joshua',
            age: 20,
            showBooks: true,
        }
    },
    methods: {
        changeTitle() {
            this.title = "Wuthering heights pt 2"
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    },
})

app.mount('#app')
// creates the app instance and mounts it to the element with id app