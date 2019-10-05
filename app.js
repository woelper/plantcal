Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app = new Vue({
    el: '#app',
    data: {
        now: null,
        sample_data: ["yellow", "blue", "green"],
        plants: plants
    },
    mounted: function () {
        var now = moment();
        this.now = moment();

    },
    computed: {
        foo: function () {
            return "bar";
        },
    },
    methods: {
        current_time: function () {
            return moment();
        },
    }
})