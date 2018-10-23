<template>
  <div id="app" class="container">
   <div class="jumbotron">
     <!-- <titulo v-bind:titulo="titulo"></titulo> -->
    <titulo :titulo="titulo"></titulo>
     <!-- <nueva-tarea v-bind:tasks="tasks"></nueva-tarea> -->
     <nueva-tarea :tasks="tasks"></nueva-tarea>
   </div>
  </div>
</template>

<script>

import Titulo from './TituloCompoment';
import NuevaTarea from './NewTaskComponent'; // Anñadirlo a la lista de componente
export default {
  components: {
    Titulo,
    NuevaTarea //Ahora voy a pasarlo al componente, si es CammelCase <cammel-case></cammel-case> en este caso es
  //<nueva-tarea></nueva-tarea>
  },
  data() {
    return {
      titulo : "* Task List *",
      tasks : [
        {
          text: 'Learn Vue.js',
          finished: false
        },
        {
          text: 'Learn Angular ',
          finished: false
        },
        {
          text: 'Learn React',
          finished: false
        },
        {
          text: 'Learn Ionic 2',
          finished: false
        },
      ]
    }
  }
}
</script>

<style>

</style>
