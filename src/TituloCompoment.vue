<template>
  <div>
  <!-- <h2>{{titulo}}</h2> -->
  <h2>{{tituloMayusculas}}</h2>
    <h3>Tareas a Realizar</h3>
  </div>
</template>
<script>
  export default {
  //  props: ['titulo']
    props: {
      //Valor por defaul en caso de que no mande valor a <titulo></titulo> en App.vue
      titulo: {
        default: "Tarea Default"
      },
      methods: {
        tituloMayusculas(){
          return this.titulo.toUpperCase();
        }
      }
    }
  }
</script>
