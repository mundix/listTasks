<template>
  <ul class="list-group">
    <li v-for="(task,index) of tasks" class="list-group-item" v-bind:class="{finished: task.finished}">
      {{task.text}}
      <span class="pull-right">
        <button type="button" class="btn btn-xs btn-success glyphicon glyphicon-ok" v-on:click="task.finished = !task.finished"></button>
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
