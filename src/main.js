import Vue from 'vue'
import App from './App.vue'

// Cramos un Bus como una instancia de Vue usando export

//Dentro de la instacia del bus = new Vue();
export var bus = new Vue({
  data: {
    //se puede generar este ojb para compartir
  },
  methods: {
    actualizarContador(numTareas) {
      this.$emit('actualizarContador',numTareas);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
