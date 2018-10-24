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
    props: ['tasks','actualizarContador'],
    methods: {
      addNewTask() {
        var text = this.newTask.trim();

        if(text) {
          this.tasks.push({
            text: text,
            finished:false
          });
          this.actualizarContador()
        }
        this.newTask = '';
      }
    }
  }
</script>
