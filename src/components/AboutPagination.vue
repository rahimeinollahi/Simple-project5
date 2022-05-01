<template>
    <div class="">
        <ul class="pagination justify-content-center m-2 p-1">
            <li class="page-item " v-for="item in pgnItems" :key="item.id">
                <router-link class="page-link m-1" :to="item.pgnRoute">{{item.pagName}}</router-link>
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
                    {id:1, pagName:'Previous',pgnRoute:"/about"},
                    {id:1, pagName:'1',pgnRoute:"/about/aboutpage1"},
                    {id:1, pagName:'2',pgnRoute:"/about/aboutpage2"},
                    {id:4, pagName:'next',pgnRoute:"/about"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.ts-about-enter-active {
  transition: all 0.3s ease-out;
}

.ts-about-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ts-about-enter-from,
.ts-about-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>