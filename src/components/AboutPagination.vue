<template>
    <div class="">
        <ul class="pagination justify-content-center m-2 p-1">
            <li class="page-item" v-for="item in pgnItems" :key="item.id">
                <router-link class="page-link" to="/">{{item.pagName}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'AboutPagination',
        data(){
            return{
                pgnItems:[
                    {id:1, pagName:'Previous',pgnRoute:"/aboutus"},
                    {id:1, pagName:'1',pgnRoute:"/aboutus/one"},
                    {id:1, pagName:'2',pgnRoute:"/aboutus/two"},
                    {id:4, pagName:'next',pgnRoute:"/aboutus"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>