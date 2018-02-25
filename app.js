Vue.component('posts', {
    template: `
        <ul class="list-group">
            <slot></slot>
        </ul>
    `
});

Vue.component('post', {
    props: ['name', 'message', 'email', 'date'],
    template: `
        <li class="list-group-item card post">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ message }}</p>
            <a :href="\`mailto:$\{email\}\`" class="btn btn-primary">Send Email</a>
            <p class="post-date">{{ date }}</p>
        </li>
    `
});

var vue = new Vue({
    el: "#app",
    data: {
        name: "",
        email: "",
        message: "",
        posts: [],
    },
    computed: {
        charactersLeft: function() {
            return 140 - this.message.length;
        },
        outOfCharacters: function() {
            return this.charactersLeft < 0;
        },
        canSubmit: function() {
            return this.name.length > 0 && this.email.length > 0 && this.message.length > 0;
        }
    },
    methods: {
        onSubmit: function() {
            if(this.canSubmit) {
                this.posts.unshift({
                    id: this.posts.length,
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    date: new Date().toUTCString()
                });

                this.name = '';
                this.email = '';
                this.message = '';
            }
        }
    }
});