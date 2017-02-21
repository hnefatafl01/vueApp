const app = new Vue({
  el: "#app",
  data: {
    message: this.message,
    method: {
      toggle: function() {
      toggleBox.onOff = !toggleBox.onOff;
      console.log('toggles');
    }}
  }
})

const toggleBox = new Vue({
  el: '#toggleBox',
  data: {
    onOff: false
  }
})
