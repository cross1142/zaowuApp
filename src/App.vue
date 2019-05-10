<template>
  <div id="app">
    <footer-bar v-show="$route.meta.footerShow"></footer-bar>
    <!-- 缓存页面 -->
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'App',
  components:{
    FooterBar
  },
  data(){
    return{

    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
