new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        warning: function(){
            alert('WARNING');
        },
        updateValue: function(event){
            this.value = event.target.value;
        }
    }
});