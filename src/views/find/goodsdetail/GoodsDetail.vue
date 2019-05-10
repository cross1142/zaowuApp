<template>
    <div class="goods-detail">
            <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">好物推荐</a></div>
                <ul class="mesage">
                <li><a class="mesg" href="#"></a></li>
                </ul>
            </div>
            <div class="goods-pic">
                <img src="../../../assets/img/kind/item1.png" alt="">
            <p>可居家可外出的cozy look。它适合床，沙发，咖啡店，美术馆，森林公园…… ​​​​</p>
            </div>
            <div class="goods-play">
                <img src="../../../assets/img/kind/item2.png" alt="">
                <ul>
                    <li>$475.80</li>
                    <li>
                        <span></span>
                    </li>
                    <li>1180人喜欢</li>
                    <li>查看详情</li>
                </ul>
            </div>
            <div class="ctext">
                <p>Foundation无缝吊带＆In Bed睡裤与睡袍</p>
                <p>一套舒适的家居服，是我们缓解疲劳与想家情绪的最佳良品。直筒罗纹睡裤，蓬松柔软，搭配同色系的无</p>
            </div>
            <div class="view">
               <span><input class="input" placeholder="发表你的观点吧" type="text"></span>
               <div class="mesg"></div>
               <div class="hert"></div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'GoodsDetail',
    data(){
        return{

        }
    }
}
</script>
<style lang = "scss">
.goods-detail{
.header{
    position: relative;
    width: 100%;
    height: 28px;
    margin-top: 30px;
    overflow: hidden;
    .search{
        width: 20px;
        height: 20px;
        margin-top: 4px;
        margin-left: 16px;
        background-position: 0 0;
        background: url(../../../assets/img/kind/goback.png) no-repeat center;
    }
    .logo{
        position: absolute;
        top: 0;
        left: 120px;
        width: 140px;
        height: 100%;
        a{
            display: block;
            width: 100%;
            height: 100%;
            font-size: 20px;
            line-height: 28px;
            color: #000;
            font-family: 'PingFangSC-Medium';
        }
    }
    .mesage{
        position: absolute;
        right: 0;
        top: 0;
        width: 80px;
        height: 100%;
        li{
            width: 100%;
            height: 100%;
            float: left;
            &:nth-child(1){
                margin-left: 0;
            }
            a{
                display: block;
                width: 100%;
                height: 100%;
                &.mesg{
                background: url(../../../assets/img/kind/enjoy.png) no-repeat center;
                }
            }
        }
    }
} 
.goods-pic{
    width: 337px;
    height: 250px;
    margin: 18px auto;
    p{  
        width: 333px;
        color: #494949 ;
        font-size: 14px;
        line-height: 20px;
        margin-top: 15px;
        text-align: left;
    }
}
.goods-play{
    width: 335px;
    height: 300px;
    margin: 0 auto;
    ul{
        width: 100%;
        height: 48px;
        li{
            width: 25%;
            height: 100%;
            float: left;
            line-height: 48px;
            &:nth-child(1){
                font-size: 12px;
                width: 50px;
            }
            &:nth-child(2){
                font-size: 12px;
                width: 32px;
                margin-left: 80px;
                background: url(../../../assets/img/kind/hert.png) no-repeat center;
            }
            &:nth-child(3){
                font-size: 12px;
                width: 70px;
                margin-left: 20px;
            }
            &:nth-child(4){
                font-size: 12px;
                width: 70px;
                height: 24px;
                margin-left: 10px;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                margin-top: 12px;
                line-height: 24px;
            }
        }
    }
}
.ctext{
    width: 339px;
    height: 80px;
    /* background-color: #000; */
    margin: 0 auto;
    margin-top: 20px;
    p{
        font-size: 14px;
        color: #1F1F1F ;
        line-height: 20px;
        text-align: left;
        &:nth-child(1){
            font-size: 14px;
            color: #010E0D;
        }
        &:nth-child(2){
            font-size: 14px;
            margin-top: 6px;
            letter-spacing: 1px;
        }
    }
}
.view{
    position: relative;
    top: 20px;
    width: 100%;
    height: 30px;
    span{
        position: absolute;
        left: 30px;
        display: block;
        width: 220px;
        height: 28px;
        border: 2px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 6px;
    .input{
        width: 210px;
        height: 100%;
        margin-left: 0;
        border: none;
        outline: none;
    }
    }
    .mesg{
        position: absolute;
        left: 280px;
        width: 28px;
        height: 28px;
        background-color: #000;
        background: url(../../../assets/img/find/mesg.png) no-repeat center;
    }
    .hert{
        position: absolute;
        left: 340px;
        width: 28px;
        height: 28px;
        background-color: #000;
        background: url(../../../assets/img/find/xin.png) no-repeat center;
        background-size: cover;
    }
}
}
</style>

