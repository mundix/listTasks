import Vue from 'vue'
import App from './App.vue'

// Cramos un Bus como una instancia de Vue usando export

export var bus = new Vue(); //un Bus de eventos y monitorear lo que pase dentor del bus
// vamos al titulo component dentro de del componetne nueva tarea componente

new Vue({
  el: '#app',
  render: h => h(App)
})
