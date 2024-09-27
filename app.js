const app = Vue.createApp({
    // data, functions, lifecycle hooks etc.
    // template: '<h1>Hi there2</h1>'

    data() {
        return {
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {
                    title: 'title 1', author: 'author 1', isFav: true
                },
                {
                    title: 'title 2', author: 'author 2', isFav: false
                },
                {
                    title: 'title 3', author: 'author 3', isFav: true
                },
            ],
            url: 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo',
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
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
            // returns a filtered array of books
        }

    }
})

app.mount('#app')
// creates the app instance and mounts it to the element with id app