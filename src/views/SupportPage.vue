<template >
    <div class="container mt-3">
        <div class="w-100 bg-light p-4 ">
            <h2>Guide and train of basalam</h2>
            <div class="input-group">
                <!-- <span><img src="../../src/assets/searchIcon.png" alt="search image" style="width:40px;"></span> -->
                <input type="text" id="txt-search" name="txt-search" class="w-75 form-control text-start " placeholder="Searrch item">
                <button class=" btn"><i class="fa fa-search"></i></button>
            </div>
        </div>
       <navbar-search />
       <div class="row">
           <div class="col-sm-2"></div>
           <div class="col-sm-8">
                <div >
                    <router-link to='/'>
                    <img src="../../public/01.jpg" alt="image1" class="col-sm-4 p-2">
                    </router-link>

                    <router-link to='/'>
                    <img src="../../public/02.jpg" alt="image1" class="col-sm-4 p-2">
                    </router-link>

                    <router-link to='/'>
                    <img src="../../public/03.jpg" alt="image1" class="col-sm-4 p-2">
                    </router-link>

                    <router-link to='/'>
                    <img src="../../public/04.jpg" alt="image1" class="col-sm-4 p-2">
                    </router-link>

                    <router-link to='/'>
                    <img src="../../public/05.jpg" alt="image1" class="col-sm-4 p-2">
                    </router-link>

                    <router-link to='/'>
                    <img src="../../public/06.jpg" alt="image1" class="col-sm-4 p-2">
                    </router-link>
                    
                </div>
           </div>
           <div class="col-sm-2"></div>
           <footer class="bottom bg-light p-5">
            کلیه حقوق مادی و معنوی «بازار باسلام» برای شرکت «توسعه و تدبیر جوامع سلام (سهامی خاص)» محفوظ است.
        </footer>
       </div>
    </div>
</template>

<script>
import NavbarSearch from '../../src/components/NavbarSearch.vue'
export default {
  components:{
      NavbarSearch,
      },
      data(){
          return{
              images:[
                  {id:1,imgAlt:'image1',imgSrc:'../../public/01.jpg'},
                  {id:2,imgAlt:'image2',imgSrc:'../../src/02'},
                  {id:3,imgAlt:'image3',imgSrc:'../../src/03'},
                  {id:4,imgAlt:'image4',imgSrc:'../../src/04'},
                  {id:5,imgAlt:'image5',imgSrc:'../../src/05'},
                  {id:6,imgAlt:'image6',imgSrc:'../../src/06'},
                  
              ]
          }
  }
     
}
</script>

<style lang="scss" scoped>

</style>