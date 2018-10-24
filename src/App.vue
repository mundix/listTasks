<template>
  <div id="app" class="container">
   <div class="jumbotron">
      <titulo :titulo="titulo" ></titulo>
      <!-- Borramos :NumTareas="NumTareas" -->
      <nueva-tarea :tasks="tasks" :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tasks="tasks"></lista-tareas>

      <!-- Si la app es muy grande es dificil usd el metodo anterior ahora vmaos a usar algo llamad bus -->
      <!-- como una nueva instancia de vue en  mail.js -->
   </div>
  </div>
</template>

<script>

import Titulo from './TituloCompoment';
import NuevaTarea from './NewTaskComponent';
import ListaTareas from './ListaTareasComponent';

export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data() {
    return {
      titulo : "* Lista de Tareas *",
      // NumTareas: 3, ya no es encesario
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
