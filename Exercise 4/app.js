new Vue({
  el: '#exercise',
  data: {
    alternateEffect: '',
    classInput: '',
    progressColor: 'red',
    progressWidth: 50,
    progress: true
  },
  computed: {
    myStyle: function(){
      return {
        backgroundColor: this.progressColor,
        width: this.progressWidth + 'px',
        height: '50px'
      };
    }
  },
  methods: {
    startEffect: function() {
      console.log('Starting Interval');
      var vm = this;
      setInterval(function(){
        vm.alternateEffect = (vm.alternateEffect == 'highlight' ? 'shrink' : 'highlight');
      }, 1000);
    },
    startProgress: function(){
      console.log('Increasing progress.');
      var vm = this;
      setInterval(function(){
        if(vm.progress){
          console.log('Increasing progress.');
          vm.progressWidth += 50;
        }
      }, 1000);
    },
    resetProgress: function(){
      this.progress = false;
      this.progressWidth = 50;
    }
  }
});
