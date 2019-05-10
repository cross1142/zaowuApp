<template>
            <div class="footer">
                <ul class="footer-nav">
                    <li class="link home"><router-link class="home" to="/home">首页</router-link> </li>
                    <li class="link kind"><router-link class="kind" to="/kind">分类</router-link></li>
                    <li class="link find"><router-link class="find" to="/find">发现</router-link></li>
                    <li class="link main"><router-link class="main" to="/main">我的</router-link></li>
                </ul>      
            </div>
</template>
<script>
export default {
    name: 'FooterBar',
    data(){
        return{
        }
    }
}
</script>
<style lang = "scss">
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 86px;
    border-top: 1px solid #bfbfbf;
    background-color: #fff;
    z-index: 100;
    .footer-nav{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .link{
            width: 30px;
            height: 100%;
            float: left;
            margin-left: 15%;
         
            &:nth-child(1){
                margin-left: 35px;
            }
            a{
                display: block;
                width: 100%;
                height: 80%;
                color: #8E8E93 ;
                font-size: 12px;
                line-height: 100px;
                margin-top: 10px;
                background-repeat: no-repeat;
                background-position: center 10px;
                background-size: 30px 30px;
                &.home{
                    background-image: url('../assets/img/icons/home.png');
                }
                &.kind{
                    background-image: url('../assets/img/icons/kind.png');
                }
                &.find{
                    background-image: url('../assets/img/icons/find.png');
                }
                &.main{
                    background-image: url('../assets/img/icons/main.png');
                }
                &.router-link-active{
                    color: #1C4B47;
                }
                &.router-link-active.home{
                    background-image: url('../assets/img/icons/home-active.png');
                }
                &.router-link-active.kind{
                    background-image: url('../assets/img/icons/kind-active.png');
                }
                &.router-link-active.find{
                    background-image: url('../assets/img/icons/find-active.png');
                }
                &.router-link-active.main{
                    background-image: url('../assets/img/icons/main-active.png');
                }
            }
        }
    }
}
</style>


