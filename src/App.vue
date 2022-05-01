<template>
  <div id="nav">
    <main-navbar />
  </div>
  <router-view v-slot="{Component, route}">
      <transition :name="route.meta.transition || 'bounce'">
          <component :is="Component"/>
      </transition>
  </router-view>
</template>

<script>
import MainNavbar from '../src/components/MainNavbar.vue'
export default {
    components:{
      MainNavbar
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
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
.ts-fade-enter-active {
  transition: all 0.3s ease-out;
}

.ts-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ts-fade-enter-from,
.ts-fade-leave-to {
  transform: scale(2);
    opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
