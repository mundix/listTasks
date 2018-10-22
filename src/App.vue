<template>
  <div id="app" class="container">
   <div class="jumbotron">
     <titulo v-bind:titulo="titulo"></titulo>
   </div>
  </div>
</template>

<script>

import Titulo from './TituloCompoment';
export default {
  components: {
    Titulo
  },
  data() {
    return {
      titulo : "Task List"
    }
  }
}
</script>

<style>

</style>
