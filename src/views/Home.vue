<template>
  <div class="home">
    <div class="container mt-3 p-5 bg-light">
        <div class="d-flex justify-content-center">
            <h5>Advertisment</h5>
        </div>

    </div>
        <div class="">
            <ul class="nav">
              <li class="nav-item" v-for="item in navHomeItems" :Key='item.id'>
                <router-link class="nav-link" :to="item.routePath">{{item.navName}}</router-link>
              </li>
            </ul>
        </div>

        <div class="d-flex text-start mt-3">
          <h4>last updated: August 12 ,2020</h4>
        </div>

        <div class="d-flex mt-5">
          <h3 class="display-4">What Does Website Mean?</h3>
        </div>

        <div class="d-flex text-start mt-3 te">
          <p class="p-5">
            A website is a collection of publicly accessible, interlinked Web pages that share 
            a single domain name. Websites can be created and maintained by an individual, group, business or organization to serve a variety of purposes.
            Together, all publicly accessible websites constitute the World Wide Web.
            Although it is sometimes called “web page,” this definition is wrong, since a website 
            consists of several webpages. A website is also known as a “web presence” or simply “site”.
          </p>
        </div>

        <div class="d-flex justify-content-center bg-light p-5">
            <h4>Advertisment</h4>
        </div>

        <div class="border p-5 bg-info text-white">
              <span><i class="fa fa-folder"></i></span>
            <span class="mx-3">SYNONYMS</span>
            <p>Web presence</p>
        </div>

        <div>
          <h5>Sahre this terms</h5>
           <router-link to="/software"><i class="fa fa-facebook mx-2"></i></router-link>
           <router-link to="/software"><i class="fa fa-instagram mx-2"></i></router-link>
           <router-link to="/software"><i class="fa fa-whatsapp mx-2"></i></router-link>
            
           
        </div>

        <div class="flex-column bg-dark">
          <ul class="nav nav-pills flex-column ">
            <li class="nav-item d-block" v-for="item in verticalFooters" :key="item.id">
              <router-link class="nav-link" to="/software">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
    },
    data(){
      return{
        navHomeItems:[
          {id:1,navName:'Dictionary > ',routePath:'/dictinary'},
          {id:2,navName:'Internet > ',routePath:'/internet'},
          {id:3,navName:'Website > ',routePath:'/website'},
        ],
        verticalFooters:[
          {id:1,name:'Satatic webPage'},
          {id:2,name:'Domain Name'},
          {id:3,name:'Domain Name System'},
          {id:4,name:'HyperLink'},
        ]
      }
    }
}
</script>
