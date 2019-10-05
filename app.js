Vue.component('plant', {
    props: ['info'],
    template: `
        <div>
            {{ info.name }}
            <img class="icon" :src="info.icon"></img>
        </div>
    `
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