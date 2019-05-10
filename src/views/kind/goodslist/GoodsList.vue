<template>
    <div class="good-list">
            <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">内衣</a></div>
                <ul class="mesage">
                <li><a class="mesg" href="#"></a></li>
                <router-link class="detail link" tag = "li" to = "/kind/:id/goodsList/car"><a class="car" href="#"></a></router-link>
                </ul>
            </div>
            <div class="header-nav">
                <ul>
                    <li>新品</li>
                    <li>销量
                        <span class="up"></span>
                        <span class="down"></span>
                    </li>
                    <li>价格
                        <span class="up"></span>
                        <span class="down"></span>
                    </li>
                    <li>筛选</li>
                </ul>
            </div>
            <div class="goods-style">
                <ul>
                    <li @click = "getPrice">无痕</li>
                    <li @click = "getPrice">美背</li>
                    <li @click = "getPrice">运动</li>
                    <li @click = "getPrice">性感</li>
                </ul>
            </div>
            <div class="goods-list">
                <ul>
                    <router-link :to = "{name: 'GoodsDetail',params: {id: g.id}}" v-for = "g in goodsdata" :key = "g.id" tag = 'li'>
                        <img :src="g.img" alt="">
                        <span>{{g.title}}</span>
                        <p class="cname">{{g.ctitle}}</p>
                        <p class="price">${{g.price}}</p>
                    </router-link>
                </ul>
            </div>
    </div>
</template>
<script>
import GoodsData from '@/api/GoodsData'
export default {
    name : 'GoodList',
    data(){
        return{
    goodsdata: ''
        }
    },
    created(){
        this.getPrice();
    },
    methods:{
        getPrice(){
            GoodsData.goodslist()
            .then(res=>{
                console.log(res);
                this.goodsdata = res;
            })
        }
    }
}
</script>
<style lang = "scss">
.good-list{
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
            width: 23px;
            height: 22px;
            margin-top: 3px;
            float: left;
            margin-left: 18px;
            &:nth-child(1){
                margin-left: 0;
            }
            a{
                display: block;
                width: 100%;
                height: 100%;
                &.mesg{
                    background: url(../../../assets/img/home/search.png) no-repeat center;
                }
                &.car{
                    background: url(../../../assets/img/home/car.png) no-repeat center;
                }
            }
        }
    }
}
.header-nav{
    width: 100%;
    height: 44px;
    margin-top: 18px;
    ul{
        width: 92%;
        height: 100%;
        margin: 0 auto;
        li{
            position: relative;
            width: 25%;
            height: 100%;
            float: left;
            line-height: 44px;
            font-size: 14px;
            color: #010E0D;
            span{
                position: absolute;
                top: 14px;
                right: 15px;
                display: block;
                width: 16px;
                height: 20%;
                /* background-color: #000; */
                &.up{
                    background: url(../../../assets/img/kind/up.png) no-repeat center;
                }
                &.down{
                    position: absolute;
                    top: 22px;
                    background: url(../../../assets/img/kind/down.png) no-repeat center;
                }
            }
        }
    }
}
.goods-style{
    width: 92%;
    margin: 0 auto;
    height: 23px;
    ul{
        width: 100%;
        height: 100%;
        li{
            width: 52px;
            height: 100%;
            float: left;
            color: #010E0D;
            font-size: 12px;
            line-height: 23px;
            margin-left: 10%;
            background-color: #F9F9F9 ;
            &:nth-child(1){
                margin-left: 30px;
            }
        }
    }
}
.goods-list{
    width: 90%;
    li{
        width: 40%;
        height: 200px;
        margin-top: 15px;
        margin-left: 10%;
        font-size: 12px;
        line-height: 17px;
        color: #494949;
        float: left;
        span{
            display: block;
            margin-top: 10px;
        }
        .cname{
            /* margin-top: 6px; */
        }
        .price{
            color: #010E0D ;
        }
    }
}
}
</style>

