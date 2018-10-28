<template>
  <div class="input-group">
    <input type="text" placeholder="Write a new Task" v-model="newTask"
      class="form-control" v-on:keyup.enter="addNewTask"/>
    <span class="input-group-btn">
      <button type="button"
      v-on:click="addNewTask"
      class="btn btn-primary"> Add </button>
    </span>
  </div>
</template>
<script>

  // Importamos el bue
  import {bus} from './main.js'; //acon esto importamos la variable bus
  export default {
    data() {
      return {
        newTask: ''
      }
    },
    props: ['tasks','actualizarContador'],
    methods: {
      addNewTask() {
        var text = this.newTask.trim();

        if(text) {
          this.tasks.push({
            text: text,
            finished:false
          });
          // this.actualizarContador()
          // Sustituimos por el bus importado
          // bus.$emit("actualizarContador",this.tasks.length); //Emit es emitir, le pasamos el primer arguemnteo
          bus.actualizarContador(this.tasks.length); //metoo comun para importar

          //actualizarContador y el segunro es la longitud de la tarea, ahora solo falta escuchar el evento , dentro del evento titulo
        }
        this.newTask = '';
        //elementos de Vue Resource $http
        //la direcion dentro de post desde firebase es la del proyecto
        //Al final le agregamos un nodo , .json, en este caso tareas.json
        //url: https://tareas-444b3.firebaseio.com/ + tareas.json
        const urlFireBase  = 'https://tareas-444b3.firebaseio.com/tareas.json';
        this.$http.post(urlFireBase, {
          text: text,
          finished:false
          //Esto genera un Promise "then" , esto es asincronous por que es POST
        }).then(respuesta => console.log(respuesta));
      }
    },
    created(){
      // bus.$emit("actualizarContador",this.tasks.length);
      bus.actualizarContador(this.tasks.length); //metoo comun para importar

    }
  }
</script>
