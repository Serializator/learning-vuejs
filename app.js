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