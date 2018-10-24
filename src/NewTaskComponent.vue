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
    props: ['tasks'], //asi se recibe la variable enviada en v-on:tasks
    methods: {
      addNewTask() {

        var text = this.newTask.trim();

        if(text) {
          this.tasks.push({
            text: text,
            finished:false
          });
          // Este es el primer metood para pasar agumentos al padre
          this.$emit('incrementarContador',1);
        }
        this.newTask = '';
        //if(text)

      }
    }
  }
</script>
