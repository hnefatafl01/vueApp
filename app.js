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

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var todoApp = new Vue({
  el: '#todo-app',
  data: {
    groceryList: [
      { text: 'Veggies'},
      { text: 'Meat'},
      { text: 'Fruit'},
      { text: 'Potatoes'}
  ]}
})
