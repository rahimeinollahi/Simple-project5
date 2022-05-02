<template>
    <div class="container mt-3">
        <div class="bg-primary p-5">
            <h3 class="text-dark ">Create New Aaccount</h3>
        </div>
        <div class="d-flex justify-content-center">
            <h5>If you're already a member</h5>
            <span> <router-link to="/" class="nav-link font-weight-bold">sign here</router-link> </span>
        </div>

        <div>
            <h4 id="text-register" class="text-info text-center mt-3" >Register New Account</h4>
        </div>
        <register-body />
    </div>
</template>

<script>
import RegisterBody from '../components/RegisterBody.vue'
    export default {
        components:{
            RegisterBody
        }
    }
</script>

<style lang="scss" scoped>

</style>