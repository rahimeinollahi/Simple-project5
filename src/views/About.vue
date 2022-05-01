<template>
  <div class="container-fluid mt-3">
    <div class="">
      <div class="row">
        <div class="col-md-4 border bg-light p-2">
          <img src="../../src/assets/profile_img.jpg" alt="user-image" class="rounded-circle mx-auto d-block " style="max-width:150px">

          <button class="btn btn-block btn-info mt-3 p-2"> See image</button>
          <hr class="text-dark">

            <div class="d-block">
              <button class="btn-block btn-secondary btn" @click="showChange()"> See more</button>
                <div v-show="showProfile">
                  <ul class="nav flex-column">
                    <li class="nav-item" v-for="item in aboutItem" :key="item.id">
                      <router-link class="nav-link  text-info" :to="item.pathRoute">{{item.nameItem}}</router-link>
                    </li>
                  </ul>
                </div>
            </div>

        </div>
          <div class="col-md-8">
               <router-view />
          </div>
      </div>
      <about-pagination  class="fixed-bottom"/>
    </div>
  </div>
</template>

<script>
import AboutPagination from '../components/AboutPagination.vue'
export default {
  components:{
    AboutPagination,
    },
    data(){
      return{
        showProfile:true,
        aboutItem:[
          {id:1,nameItem:'Skills',pathRoute:'/about/skills'},
          {id:1,nameItem:'Ctiy',pathRoute:'/about/city'},
          {id:1,nameItem:'Certificat',pathRoute:'/about/certificate'},
          {id:1,nameItem:'Prop of me',pathRoute:'/about/propofme'},
          {id:1,nameItem:'Register Survey',pathRoute:'/about/reigstersurvey'},

        ],
       
      }
    },
    methods:{
      showChange(){
        this.showProfile=!this.showProfile
      }
    }
    
  
}
</script>
