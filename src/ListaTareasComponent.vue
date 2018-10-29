<template>
  <ul class="list-group">
    <li v-for="(task,index) of tasks" v-bind:key="index" class="list-group-item" v-bind:class="{finished: task.finished}">
      {{task.text}}
      <span class="pull-right">
        <button type="button" class="btn btn-xs btn-success glyphicon glyphicon-ok"  v-on:click="estado(index)"></button>
        <button type="button" class="btn btn-xs btn-danger glyphicon glyphicon-remove" v-on:click="borrarTarea(index)"></button>
      </span>
    </li>
  </ul>
</template>
<script>
  export default {
   props: ['tasks'],
   methods: {
     borrarTarea(index) {
       this.tasks.splice(index,1);
     },
     estado(index){
        //Cual es el estado actual
        let terminada = this.tasks[index].finished = ! this.tasks[index].finished;
        let id = this.tasks[index].id;
        //Este metodo nos ayuda hacer un cambio si le pasamos el id
        // se debe pasar como esta en firebase el ID : https://tareas-444b3.firebaseio.com/tareas/-LPujE0uO50v3wexnTTI
        this.$http.patch('tareas/'+id+'.json',{
          finished: terminada
        }).then(respuesta => { console.log(respuesta) });
     }
   }
  }
</script>
<style>
  .finished {
    color: lightgray;
    text-decoration: line-through;
    font-style: italic;
  }
</style>
