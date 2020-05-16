new Vue({
    el: '#exercise',

    data: {
        name: 'John Smith',
        age: 89,
        image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80!"
    },
    methods: {
        multiplyAge: function(multiplier){
            return this.age * multiplier;
        }
    }
});