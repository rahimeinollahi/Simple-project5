<template>
    <div class="container mt-3 ">
        <div class="progrees mt-3 p-2" v-for="item in skillItems" :key="item.id">
            <div :class="item.skillClass" :style="{width:item.skillProgress}" >{{item.skillName}}</div>
        </div>
        <h1 class="display-1 text-start">Rahim einollahi</h1>
        <p>I will try improve my tech skill in the future...</p>
    </div>
</template>

<script>
    export default {
    data(){
        return{
             skillItems:[
          {id:1,skillName:'Html5 60%',skillProgress:'60%',skillClass:'bg-success'},
          {id:2,skillName:'CSS3 50%',skillProgress:'50%',skillClass:'bg-info'},
          {id:3,skillName:'JS+es6 70%',skillProgress:'70%',skillClass:'bg-warning'},
          {id:4,skillName:'BootStrap 80%',skillProgress:'80%',skillClass:'bg-danger'},
          {id:5,skillName:'Vuejs 60%',skillProgress:'60%',skillClass:'bg-secondary'},
          {id:6,skillName:'Vue Router 40%',skillProgress:'40%',skillClass:'bg-secondary'},
        ]
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>