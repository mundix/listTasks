<template>
  <div>
  <h2>{{tituloMayusculas()}}</h2>
    <h3>Tareas a Realizar: {{NumTareas}}</h3>
  </div>
</template>
<script>
  export default {
   props: ['titulo','NumTareas'],
    methods: {
      tituloMayusculas(){
        return this.titulo.toUpperCase();
      }
    }
  }
</script>
