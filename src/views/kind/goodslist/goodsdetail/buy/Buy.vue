<template>
    <div class="buy">
            <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">确认订单</a></div>
            </div>
            <div class="order">
                <p class="address">添加收货地址
                    <span></span>
                </p>
                <div v-for = "b in goodsdata" :key= "b.id" class="goods-list">
                    <span>
                        <img :src="b.img" alt="">
                    </span>
                    <p>{{b.title}}</p>
                    <p>{{b.text}}</p>
                    <p>${{b.price}}</p>
                </div>
                <p class="address coupons">优惠券
                    <span></span>
                </p>
                <div class="note">
                    <p>备注</p>
                    <span>选填</span>
                </div>
                <div class="totle">
                   <ul  v-for = "c in goodsdata" :key= "c.id">
                       <li>
                           <p>商品总额</p>
                           <p>${{c.price}}</p>
                       </li>
                       <li>
                           <p>运费</p>
                           <p>$10.00</p>
                       </li>
                   </ul>
                </div>
                <div class="pay">
                    <p>实付金额</p>
                    <span>${{}}</span>
                </div>
                <div class="pay-say">
                    <ul v-for = " d in goodsdata" :key = "d.id">
                        <li>
                            <span>
                                <img src="../../../../../assets/img/kind/wx.png" alt="">
                            </span>
                            <p class="p1">微信支付</p>
                            <p class="p2">微信安全支付</p>
                            <div @click = "show(d.id)" class="true">
                                <img v-show = "d.isShow" src="../../../../../assets/img/kind/true.png" alt="">
                            </div>
                        </li>
                        <li>
                            <span>
                                <img src="../../../../../assets/img/kind/zfb.png" alt="">
                            </span>
                            <p class="p1">支付宝支付</p>
                            <p class="p2">支付宝安全支付</p>
                            <div @click = "show(d.id)" class="true">
                                <img v-show = "!d.isShow" src="../../../../../assets/img/kind/true.png" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="btn-pay">
                    <p>立即支付¥ </p>
                    <p>{{}}</p>
                </div>
            </div>
    </div>
</template>
<script>
import MyCarApi from '@/api/MyCar'
export default {
    name: 'Buy',
    data(){
        return{
            goodsdata: [],
            showId: ''
        }
    },
    created(){
        this.geteBuyData();
    },
    methods:{
        geteBuyData(){
            MyCarApi.buyData(this.$route.params.id)
            .then(res=>{
                console.log(res);
                this.goodsdata = res;
            })
        },
        show(id){
            this.goodsdata.map(item=>{
                if(item.isShow == false){
                    if(item.id == id){
                        item.isShow = true; 
                    }
                }else{
                    item.isShow = false;
                }
            })
        }
    }
}
</script>
<style lang = "scss">
.buy{
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
        background: url(../../../../../assets/img/kind/goback.png) no-repeat center;
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
}
    .order{
        width: 100%;
        /* height: 52px; */
        /* background-color: lightblue; */
        overflow: hidden;
        p{
            color: #010E0D;
            font-size: 16px;
            text-align: left;
            width: 90%;
            margin: 0 auto;
            line-height: 60px;
            height: 60px;
            /* box-shadow: 1px 1px 8px 1px #e5e5e5; */
            span{
                display: block;
                width: 30px;
                height: 100%;
                margin-top: -60px;
                margin-left: 300px;
                background: url(../../../../../assets/img/kind/gonext.png) no-repeat center;
            }
        &.address{
            border-bottom: 1px solid #e5e5e5;
            box-shadow: 1px 1px 8px 1px #e5e5e5;
            border-radius: 6px;
        }
        &.coupons{
            margin-top: 18px;
        }
        }
        .goods-list{
            position: relative;
            width: 334px;
            height: 114px;
            margin: 0 auto;
            background-color: #F9F9F9;
            margin-top: 18px;
            overflow: hidden;
            border-radius: 8px;
            span{
                display: block;
                width: 78px;
                height: 78px;
                background-color: orange;
                margin-top: 18px;
                margin-left: 30px;
            }
            p{
                position: absolute;
                top: 0;
                left: 130px;
                font-size: 14px;
                color: #494949;
                &:nth-child(1){
                    margin-top: 28px;
                }
                &:nth-child(2){
                    margin-top: 46px;
                    color: #1C4B47;
                }
                &:nth-child(3){
                    margin-top: 24px;
                }

            }
        }
        .note{
            position: relative;
            width: 90%;
            height: 50px;
            margin: 10px auto;
            p{
                color: #494949 ;
                font-size: 16px;
                width: 100%;
                box-shadow: 2px 1px 8px 1px #e5e5e5;
                border-radius: 6px;
            }
            span{
                display: block;
                position: absolute;
                top: 0;
                left: 50%;
                width: 50px;
                height: 100%;
                color: #494949;
                font-size: 14px;
                line-height: 60px;
            }
        }
        .totle{
            width: 90%;
            height: 86px;
            margin: 20px auto;
            border-bottom: 1px solid #e5e5e5;
            ul{
                width: 100%;
                height: 90px;
                li{
                    position: relative;
                    width: 100%;
                    height: 50%;
                    p{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 50%;
                        height: 100%;
                        font-size: 16px;
                        line-height: 43px;
                        color: #494949;
                        &:nth-child(2){
                            position: absolute;
                            left: 50%;
                            top: 0;
                            text-align: right;
                        }
                    }
                }
            }
        }
        .pay{
            position: relative;
            width: 100%;
            height: 95px;
            margin: 0 auto;
            line-height: 22px;
            font-size: 16px;
            border-bottom: 1px solid #e5e5e5;
            p{
                position: absolute;
                top: 0;
                right: 74px;
                color: #000;
                width: 64px;
                height: 100%;
            }
            span{
                position: absolute;
                top: 10px;
                right: 10px;
                display: block;
                width: 50px;
                height: 100%;
                color: #1C4B47; 
                line-height: 40px;
            }
        }
        .pay-say{
            width: 335px;
            height: 124px;
            border: 1px solid #f5f5f5;
            border-radius: 8px;
            margin: 20px auto;
            ul{
                width: 100%;
                height: 100%;
                li{ 
                    position: relative;
                    width: 100%;
                    height: 62px;
                    border-bottom: 1px solid #f5f5f5;
                    span{
                        position: absolute;
                        top: 50%;
                        margin-top: -11px;
                        left: 20px;
                        display: block;
                        width: 22px;
                        height: 22px;
                    }
                    p{
                       position: absolute;
                       top: 10px;
                       left: 60px;
                       width: 84px;
                       height: 20px; 
                       /* background-color: lightblue; */
                       font-size: 14px;
                       color: #010E0D;
                       text-align: left;
                       line-height: 20px;
                       &.p2{
                           margin-top: 20px;
                           font-size: 12px;
                           color: #999;
                       }
                    }
                    .true{
                        position: absolute;
                        top: 50%;
                        margin-top: -9px;
                        right: 15px;
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        border: 1px solid #e5e5e5;
                    }
                }
            }
        }
                 .btn-pay{
                     position: relative;
                        width: 185px;
                        height: 44px;
                        background-color: #1C4B47 ;
                        margin: 20px auto;
                        margin-top: 60px;
                        border-radius: 8px;
                        p{  
                            position: absolute;
                            top: 0;
                            left: 0;
                            color: #fff;
                            font-size: 16px;
                            width: 58%;
                            height: 100%;
                            line-height: 44px;
                            &:nth-child(1){
                                text-align: right;
                            }
                            &:nth-child(2){
                                position: absolute;
                                top: 0;
                                left: 110px;;
                                font-size: 24px;
                                width: 40%;
                            }
                        }
                    }
    }
}
</style>


