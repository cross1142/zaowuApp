<template>
    <div class="article">
        <div class="banner">
            <ul class="article-list">
                <router-link v-for = "i in imgs" :key = "i.id" to ="/find/articledetail" tag = "li">
                <p class="p1">{{i.title}}</p>
                     <p class="p2">{{i.ctitle}}</p>
                <span><img :src="i.img" alt=""></span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Article',
    data(){
        return{
            imgs:[
                {
                    id: Math.random(),
                    title: '用不同角度诠释丹麦设计的热情和个性',
                    ctitle: '对称I色彩I构图',
                    img: require('@/assets/img/find/1.png')
                },
                {
                    id: Math.random(),
                    title: '用不同角度诠释丹麦设计的热情和个性',
                    ctitle: '对称I色彩I构图',
                    img: require('@/assets/img/find/1.png')
                },
                {
                    id: Math.random(),
                    title: '北欧人爱 “赶集”：去跳蚤市场',
                    ctitle: '对称I色彩I构图',
                    img: require('@/assets/img/find/1.png')
                },
                {
                    id: Math.random(),
                    title: '你离英剧里的下午茶，还差了这些',
                    ctitle: '对称I色彩I构图',
                    img: require('@/assets/img/find/1.png')
                },
                {
                    id: Math.random(),
                    title: '一起来观看 Wes Anderson的色彩回旋舞',
                    ctitle: '对称I色彩I构图',
                    img: require('@/assets/img/find/1.png')
                },
            ]
        }
    }
}
</script>
<style lang = "scss">
.article{
    .banner{
        width: 100%;
        height: 730px;
        margin-top: 18px;
        .article-list{
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #1C4B47;
            li{
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                color: #020F0E;
                overflow: hidden;
                background-color: #fff;
                &:nth-child(1){
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -140px;
                    width: 280px;
                    height: 461px;
                    p{
                        width: 99px;
                        height: 26px;
                        margin: 20px auto;
                        font-size: 9px;
                        line-height: 13px;
                        
                    }
                }
                &:nth-child(2){
                    position: absolute;
                    top: 30px;
                    left: 50%;
                    margin-left: -150px;
                    width: 300px;
                    height: 461px;
                      p{
                        width: 132px;
                        height: 34px;
                        margin: 20px auto;
                        font-size: 12px;
                        line-height: 17px;
                    }
                }
                  &:nth-child(3){
                      position: absolute;
                      top: 68px;
                      left: 50%;
                      margin-left: -157px;
                      width: 314px;
                      height: 473px;
                      p{
                        width: 148px;
                        height: 40px;
                        margin: 20px auto;
                        font-size: 14px;
                        line-height: 20px;
                      }
                }
                      &:nth-child(4){
                    position: absolute;
                    top: 110px;
                    left: 50%;
                    margin-left: -169px;
                    width: 338px;
                    height: 409px;
                    p{
                        width: 176px;
                        height: 44px;
                        margin: 20px auto;
                        font-size: 16px;
                        line-height: 22px;
                    }
                }
                        &:nth-child(5){
                    position: absolute;
                    top: 171px;
                    left: 50%;
                    margin-left: -180px;
                    width: 360px;
                    height: 473px;
                    .p1{
                        width: 220px;
                        height: 50px;
                        margin: 0 auto;
                        margin-top: 20px;
                        font-size: 18px;
                        line-height: 25px;
                    }
                    .p2{
                        width: 88px;
                        height: 17px;
                        color: #999999;
                        margin: 0 auto;
                        font-size: 12px;
                    }
                    span{
                        display: block;
                        width: 265px;
                        height: 358px;
                        background-color: #000;
                        margin: 15px auto;
                        background: url(../../assets/img/find/1.png) no-repeat center;
                    }
                }

            }
        }
    }

}

</style>


