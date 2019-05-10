<template>
    <div class="find">
         <div class="header">
                  <router-link class="article shops-link" to="/find/article">精选文章</router-link>
                  <router-link class="shops shops-link" to="/find/shops">好物推荐</router-link>
              </div>
              <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Find',
    data(){
        return{
            
        }
    }
}
</script>
<style lang = "scss">
.find{
    .header{
    position: relative;
    height: 25px;
    width: 100%;
    margin-top: 18px;
    .shops-link{
        display: block;
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: 25px;
        font-size: 18px;
        color: #999999;
        &.shops{
            position: absolute;
            top : 0;
            right : 0;

        }
        &.router-link-active{
            color: #010E0D;
        }
    }
}
}

</style>


