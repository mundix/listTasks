import Vue from 'vue'
import App from './App.vue'

// const urlFireBase  = 'https://tareas-444b3.firebaseio.com/';
// Vamos a usar una libreria de la DB para Vue PerformanceResourceTiming
// https://github.com/pagekit/vue-resource
// $ npm install vue-resource --save
//--save guarda en nuestra dependencia la libreria
// Usaremos firebase
import VueResource from 'vue-resource';
Vue.use(VueResource);





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
