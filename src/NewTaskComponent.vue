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
          bus.$emit("actualizarContador",this.tasks.length); //Emit es emitir, le pasamos el primer arguemnteo
          //actualizarContador y el segunro es la longitud de la tarea, ahora solo falta escuchar el evento , dentro del evento titulo
        }
        this.newTask = '';
      }
    },
    created(){
      bus.$emit("actualizarContador",this.tasks.length);
    }
  }
</script>
