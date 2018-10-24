<template>
  <div>
  <h2>{{tituloMayusculas()}}</h2>
    <h3>Tareas a Realizar: {{NumTareas}}</h3>
  </div>
</template>
<script>
  // Importamos el bue
  import {bus} from './main.js'; //acon esto importamos la variable bus, apra escuchar evento
  export default {
    // props: ['titulo','NumTareas'],
    props: ['titulo'],//Dejamis de recibir NumTareas
    data(){
      return{
        NumTareas:0
      }
    },
    methods: {
      tituloMayusculas(){
        return this.titulo.toUpperCase();
      }
    },
    // Usamos un Hook dentro del ciclo de vida que se llama Created
    created() {
      // Asi es como escuchamos "Listening", esto viene desde NewTaskComponente
      bus.$on("actualizarContador", (NumTareas)=> {
        console.log("Evento Actualziar el Contador usando bus.$on()")
        this.NumTareas = NumTareas;
      })
    }
  }
</script>
