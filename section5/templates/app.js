var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second instance'
  },
  methods: {
    onChange: function(){
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

//Vue apps can be 'mounted' at runtime instead of defined at build.
//This could be useful if the div doesn't yet exist in the DOM until the app is needed.
vm1.$mount('#app1');

//This method is very rare...
//Creates off screen
vm3.$mount();
//$el stores the compiled template of the instance.
document.getElementById('app3').appendChild(vm3.$el);

vm1.$refs.heading.innerText = 'Something Else';

setTimeout(function(){
  vm1.title = 'Changed by timer';
  vm1.show();
}, 5000)

//This new prop will exist on the instance
//But won't have Vue functionalities as wasn't in the constructor.
vm1.newProp = 'test';
console.log(vm1);