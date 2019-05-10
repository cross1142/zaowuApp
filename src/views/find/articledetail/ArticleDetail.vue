<template>
    <div class="article-datail">
            <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">精选文章</a></div>
                <ul class="mesage">
                <li><a class="mesg" href="#"></a></li>
                </ul>
            </div>
            <div class="article-title">
                <p>一起来观看 Wes Anderson的色彩回旋舞</p>
                <p>对称I色彩I构图 </p>
                <span></span>
                <div class="author">
                    <p>auth：刘辛越</p>
                </div>
            </div>
            <div class="article-style">
                <p>风格即永存</p>
                <span></span>
                <ul class="color-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
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
    name: 'ArticleDetail',
    data(){
        return{

        }
    }
}
</script>
<style lang = "scss">
.article-datail{
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
.article-title{
    position: relative;
    width: 280px;
    height: 340px;
    margin: 0 auto;
    margin-top: 20px;
    p{
        font-size: 18px;
        color: #010E0D;
         line-height: 25px;
        &:nth-child(2){
            font-size: 14px;
            color: #999;
            margin-top: 6px;
        }
    }
    span{
        position: absolute;
        top: 100px;
        left: 50%;
        margin-left: -93px;
        display: block;
        width: 186px;
        height: 186px;
        background: url(../../../assets/img/kind/article1.png) no-repeat center;
    }
    .author{
        position: absolute;
        top: 295px;
        left: 100px;;
        width: 203px;
        height: 17px;
        p{
            color: #999;
            font-size: 12px;
        }
    }
}
.article-style{
    width: 280px;
    height: 285px;
    margin: 0 auto;
    p{
        text-align: left;
        color: #010E0D ;
        font-size: 18px;
    }
    span{
        display: block;
        width: 278px;
        height: 193px;
        margin: 0 auto; 
        background: url(../../../assets/img/kind/article2.png) no-repeat center;
        margin-top: 25px;
    }
}
.color-list{
    width: 280px;
    height: 30px;
    margin-top: 10px;
    li{
        width: 33px;
        height: 24px;
        float: left;
        margin-left: 2px;
        &:nth-child(1){
            margin-left: 0;
            background-color: #d1a09c;
        }
        &:nth-child(2){
            background-color: #98656c;
        }
        &:nth-child(3){
            background-color: #56353b;
        }
        &:nth-child(4){
            background-color: #c4a887;
        }
        &:nth-child(5){
            background-color: #daa874;
        }
        &:nth-child(6){
            background-color: #ce8803;
        }
        &:nth-child(7){
            background-color: #c57e38;
        }
        &:nth-child(8){
            background-color: #a65f4a;
        }
    }
}
.view{
    position: relative;
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



