<template>
    <div class="container-fluid mt-3">
        <ul class="nav nav-tabs justify-content-center"> 
            <div  v-for="item in navbarItems" :key="item.id">
                <li class="nav-item" v-if="item.id!=5">
                    <router-link class="nav-link" :to="item.routePath">{{item.routeName}}</router-link>
                </li>

                <li v-else class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{item.routeName}}</a>
                    <ul class="dropdown-menu">
                        <li v-for="itemDrop in item.routePath" :key="itemDrop.id">
                             <router-link class="dropdown-item text-center" :to="itemDrop.routePath">{{itemDrop.routeName}}</router-link>
                        </li>
                    </ul >
                </li>
            </div>
        </ul>

    </div>
</template>

<script>
    export default {
        name:'MainNavbar',
       data(){
           return{
                navbarItems:[
                            {id:1, routeName:'Home',routePath:'/'},
                            {id:2, routeName:'About me',routePath:'/about'},
                            {id:3, routeName:'Support',routePath:'/support'},
                            {id:4, routeName:'Setting',routePath:'/setting'},
                            {id:5, routeName:'Products',routePath:
                                                            [
                                                                {id:51, routeName:'SoftWare',routePath:'/software'},
                                                                {id:52, routeName:'Hardware',routePath:'/hardware'},
                                                                {id:53, routeName:'Mis',routePath:'/mis'},
                                                            ]},
        ]
           }
       }
        
    }
</script>

<style lang="scss" scoped>

</style>