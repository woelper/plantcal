
// The plant component
Vue.component('plant', {
    props: ['info'],
    computed: {
        abs_start: function() {
            // return the absolute start date of an item.
            return moment(moment().year() + "-" + this.info.start);
        },
        next_start: function() {
            // return the absolute start date of an item.
            var duration = moment.duration(moment().diff(this.abs_start)).asDays();
            if (duration > 0) {
                // return -moment.duration(moment().diff(this.abs_start.add(1,'years'))).asDays();
                return moment(moment().add(1,'years').year() + "-" + this.info.start);
            }            
            return moment(moment().year() + "-" + this.info.start);
        },
        abs_start_diff: function() {
            // return the difference as days. Add a year if it's in the past.
            var duration = moment.duration(moment().diff(this.abs_start)).asDays();
            if (duration > 0) {
                // The correct way, but let's just add 365.
                // return -moment.duration(moment().diff(this.abs_start.add(1,'years'))).asDays();
                return -duration + 365;
            }
            return -duration
        },
    },
    template: `
        <div>
            <img class="icon" :src="info.icon"></img>
            {{ info.name }}
            start {{abs_start.format('MMMM DD')}}
            dist {{next_start.fromNow()}}
        </div>
    `
})


var app = new Vue({
    el: '#app',
    data: {
        settings: {
            myplants: []
        },
        now: null,
        sample_data: ["yellow", "blue", "green"],
        plants: plants
    },
    mounted() {
        if (localStorage.settings) {
            this.settings = localStorage.settings;
        }

        let year = moment().year();

        // console.log(year);
        // console.log(moment(year + "-03-08"));
        


    },
    computed: {
        foo: function () {
            return "bar";
        },
    },
    methods: {
        current_time: function() {
            return moment();
        },

    },
    watch: {
        settings(new_settings) {
          localStorage.settings = new_settings;
        }
      }
})