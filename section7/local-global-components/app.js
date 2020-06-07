var cmp = {
    data: function() {
        return {
            status : 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }}(<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
};

//This uses a local component (only gets declared within one app).
new Vue({
    el: '#app',
    components: {
        'mpc-my-cmp': cmp
    }
})

//A global Component requires Vue.component('name', ...)