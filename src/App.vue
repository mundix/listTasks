<template>
  <div id="app" class="container">
   <div class="jumbotron">
     <!-- <titulo v-bind:titulo="titulo"></titulo> -->
<!-- <titulo :titulo="titulo"></titulo> -->
     <!-- Ahora pasamos la variabloe NumTareas al componente  para pasarlo al componete  sigueinte -->
    <titulo :titulo="titulo" :NumTareas="NumTareas"></titulo>
    <!-- <titulo> </titulo> -->
    <!-- Sin pasar valor a titulo cogera el valor default en el componente -->
     <!-- <nueva-tarea v-bind:tasks="tasks"></nueva-tarea> -->
     <!-- incrementarContador="NumTareas+= $event" event es e segundo parametros al momento -->
     <!-- this.$emit('incrementarContador',1); en este caso event es 1 -->
     <!-- <nueva-tarea :tasks="tasks" v-on:incrementarContador="NumTareas+= $event"></nueva-tarea> -->
    <!-- Hay otra forma  enviadole nuevaTarea coo una proiedad contador -->
    <nueva-tarea :tasks="tasks" :actualizarContador="actualizarContador"></nueva-tarea>
    <!-- y se agrga en la lista de props de neva tareas component -->

    <!-- Ahora vamos a pasar variables o metodos entre hermos componentes digase desde
    NuevaTareaComponente a ListaTareasComoennte  -->
    <!-- Vamos a ponr el contador al lado del subtitulo Treas a hacer: 3 -->
    <!-- No hay una forma directa, supuestamente  -->


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
      NumTareas: 3,
      tasks : [
        {
          text: 'Learn Vue js 2',
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
  },
  methods: {
      actualizarContador() {
        this.NumTareas ++;
      }
  }
}
</script>

<style>

</style>
