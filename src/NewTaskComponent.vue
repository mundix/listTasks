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
  export default {
    data() {
      return {
        newTask: ''
      }
    },
    props: ['tasks','actualizarContador'], //asi se recibe la variable enviada en v-on:tasks
    //se agrgo actualizarContador para poder enviar la variable al padre desde aqui
    methods: {
      addNewTask() {

        var text = this.newTask.trim();

        if(text) {
          this.tasks.push({
            text: text,
            finished:false
          });
          // Este es el primer metood para pasar agumentos al padre
          // this.$emit('incrementarContador',1);
          this.actualizarContador()
        }
        this.newTask = '';
        //if(text)

      }
    }
  }
</script>
