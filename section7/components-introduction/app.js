//Components should be named with a pre-fix to avoid conflict with existing components and components in other libraries.
Vue.component('mpc-my-cmp', {
    //Data is a function when it's not in main Vue creation.
    //Otherwise will interfere with existing object.
    //A shared data object could be used (declared outside the component)
    //But then it would be shared across every instance of this component...
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
});

new Vue({
    el: '#app',
})