<template>
  <div>
  <!-- <h2>{{titulo}}</h2> -->
  <h2>{{tituloMayusculas()}}</h2>

    <h3>Tareas a Realizar: {{NumTareas}}</h3>
  </div>
</template>
<script>
  export default {
   props: ['titulo','NumTareas'], //Agregamos {{NumTareas}} a las props que vamos a recibir
    // props: {
    //   //Valor por defaul en caso de que no mande valor a <titulo></titulo> en App.vue
    //   titulo: {
    //     // default: "Tarea Default"
    //     default: 1, //Esto da error
    //     //se agrega la propedad type a titulo para que sea cadena de carateres
    //     type: String
    //     // required:true //Esto es cuando no se manda la propiedad titulo da un error
    //   },
    methods: {
      tituloMayusculas(){
        return this.titulo.toUpperCase();
      }
    }
  }
</script>
