<template>
  <div id="app" class="container">
   <div class="jumbotron">
     <!-- <titulo v-bind:titulo="titulo"></titulo> -->
    <!-- <titulo :titulo="titulo"></titulo> -->
    <titulo> </titulo>
    <!-- Sin pasar valor a titulo cogera el valor default en el componente -->
     <!-- <nueva-tarea v-bind:tasks="tasks"></nueva-tarea> -->
     <nueva-tarea :tasks="tasks"></nueva-tarea>
     <lista-tareas :tasks="tasks"></lista-tareas>
   </div>
  </div>
</template>

<script>

import Titulo from './TituloCompoment';
import NuevaTarea from './NewTaskComponent'; // Anñadirlo a la lista de componente
//Agreando el componente de lista de tareas
import ListaTareas from './ListaTareasComponent';

export default {
  components: {
    Titulo,
    NuevaTarea, //Ahora voy a pasarlo al componente, si es CammelCase <cammel-case></cammel-case> en este caso es
  //<nueva-tarea></nueva-tarea>
    ListaTareas
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
