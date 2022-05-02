<template>
    <div class="container mt-3">
       <h3 class="border-bottom">Top 24 Free Software Download Sites On The Web</h3>

        <p class="mt-2">
            Over the years various software companies and a lot of talented developers and programmers have created some 
            awesome programs which are available for download online. It’s not always easy to find the perfect software that we 
            really need and which would get the job done for us. This is where the software download sites come in handy.
        </p>

        <div class="bg-light d-flex justify-content-center border p-3" @click="show=!show">
            <h3>Table of Contents</h3>
                <a href="#p-software" class="nav-link">Go content</a>
            <div>
                <transition name="fade-software" >
                <ul class="  flex-column " v-if="show">
                    <li class="nav-item d-block" v-for="item in tblContents" :key="item.id">
                        <router-link to="/" class="nav-link">{{item.ctnName}}</router-link>
                    </li>
                </ul>
                </transition>
                
            </div>
        </div>
        <pre>






<img src="../assets/softwareImage.webp" alt="">









        </pre>

        <p id="p-software">
            FreewareFiles, as the name indicates a website dedicated to Freeware software and have a number of Open Sources programs listed. They have over
             16,000 freeware programs available for download on their website. The programs are arranged in categories and it’s quite easy to navigate and find the ones you are looking for.
            The website interface is busy and keeps you posted about the latest happenings in the technology world. One of the most reliable software download sites,
            FreewareFiles, has excellent picks in antivirus, developer tools, games, and utility sections.
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tblContents:[
                    {id:1,ctnName:'Download.com'},
                    {id:2,ctnName:'FileHippo.com'},
                    {id:3,ctnName:' ZDNet Download'},
                    {id:4,ctnName:'Soft32'},
                    {id:5,ctnName:'File'},
                    {id:6,ctnName:'Download Crew'},
                    {id:7,ctnName:'FilePuma'},
                    {id:48,ctnName:'softwareInformer'},
                ],
                show:true
            }
        }
    }
</script>

<style lang="scss" scoped>
.fade-software-enter-active,
.fade-software-leave-active {
  transition: opacity 0.5s ease;
}

.fade-software-enter-from,
.fade-software-leave-to {
  opacity: 0;
  transform: translateY(15deg);
}

</style>