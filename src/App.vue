<template>
  <div id="app" class="container">
   <div class="jumbotron">
      <titulo :titulo="titulo" ></titulo>
      <nueva-tarea :tasks="tasks" :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tasks="tasks"></lista-tareas>
   </div>
  </div>
</template>

<script>

import Titulo from './TituloCompoment';
import NuevaTarea from './NewTaskComponent';
import ListaTareas from './ListaTareasComponent';

//Vamos a  leer desde la base de datos en el gancho de ciclo de vida created()

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
        // {
        //   text: 'Learn Vue js 2',
        //   finished: false
        // },
        // {
        //   text: 'Learn Angular ',
        //   finished: false
        // },
        // {
        //   text: 'Learn React',
        //   finished: false
        // },
        // {
        //   text: 'Learn Ionic 2',
        //   finished: false
        // },
      ]
    }
  },
  methods: {
      actualizarContador() {
        this.NumTareas ++;
      }
  },
  created(){
    this.$http.get('https://tareas-444b3.firebaseio.com/tareas.json')
      .then(respuesta => {
        return respuesta.json();
      })
      .then(respuestaJson => {
        // console.log(respuestaJson)
        for(let id in respuestaJson) {
          console.log(respuestaJson[id]);
          this.tasks.push(respuestaJson[id])
        }
      })
      ;
  }
}
</script>

<style>

</style>
