<template>
    <div class="container-fluid mt-3">
        <ul class="nav nav-tabs justify-content-center fixed-top"> 
            <div  v-for="item in navbarItems" :key="item.id">
                <li class="nav-item" v-if="item.id!=5">
                    <router-link :class="item.className" :to="item.routePath" >{{item.routeName}}</router-link>
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
                            {id:0, routeName:'Create New Account',routePath:'/createaccount',className:'nav-link text-white bg-warning '},
                            {id:1, routeName:'Home',routePath:'/',className:'nav-link'},
                            {id:2, routeName:'About me',routePath:'/about',className:'nav-link'},
                            {id:3, routeName:'Support',routePath:'/supportpage',className:'nav-link'},
                            {id:4, routeName:'Setting',routePath:'/setting',className:'nav-link'},
                            {id:5, routeName:'Products',routePath:
                                                            [
                                                                {id:51, routeName:'SoftWare',routePath:'/software',className:'nav-link'},
                                                                {id:52, routeName:'Hardware',routePath:'/',className:'nav-link'},
                                                                {id:53, routeName:'Mis',routePath:'/',className:'nav-link'},
                                                            ]},
                            {id:6, routeName:'/vuejs',routePath:'/vuejs',className:'nav-link bg-success text-white'}
        ]
           }
       }
        
    }
</script>

<style lang="scss" scoped>

</style>