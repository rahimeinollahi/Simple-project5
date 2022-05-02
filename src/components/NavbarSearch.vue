<template>
    <div class="container mt-3">
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item " v-for="item in navsearchItems" :key="item.id">
                <router-link :to="item.routePath" class="nav-link">{{item.searchName}}</router-link>
            </li>
        </ul>

        
    </div>
</template>

<script>
    export default {
        name:'NavbarSearch',
        data(){
            return{
                navsearchItems:[
                    {id:1,searchName:'Home',routePath:'/'},
                    {id:2,searchName:'Education',routePath:'/'},
                    {id:3,searchName:'Frequnelty questions',routePath:'/'},
                    {id:4,searchName:'Forbid products',routePath:'/'},
                    {id:4,searchName:'Lows',routePath:'/'},
                    {id:4,searchName:'Call us',routePath:'/'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>