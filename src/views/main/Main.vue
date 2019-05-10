<template>
    <div class="main">
        <div class="banner-pic">
            <div class="logo"></div>
            <div class="resign">
                <span>注册</span>
                <span class="go-in">登陆</span>
            </div>
        </div>
    <div class="order">
        <p>我的订单
            <span></span>
        </p>
        <ul>
            <li>
                <span>
                    <img src="../../assets/img/main/money.png" alt="">
                </span>
                <p>待付款</p>
            </li>
            <li>
                <span>
                    <img src="../../assets/img/main/car.png" alt="">
                </span>
                <p>待收货</p>
            </li>
            <li>
                <span>
                    <img src="../../assets/img/main/done.png" alt="">
                </span>
                <p>已完成</p>
            </li>
            <li>
                <span>
                    <img src="../../assets/img/main/after.png" alt="">
                </span>
                <p>售后</p>
            </li>
        </ul>
    </div>
    <div class="collection">
        <p>我的收藏
            <span></span>
        </p>
        <ul>
            <li>
                <span>
                    <img src="../../assets/img/main/stone.png" alt="">
                </span>
                <p>物品</p>
            </li>
            <li>
                <span>
                    <img src="../../assets/img/main/pinpai.png" alt="">
                </span>
                <p>品牌</p>
            </li>
            <li>
                <span>
                    <img src="../../assets/img/main/art.png" alt="">
                </span>
                <p>文章</p>
            </li>
        </ul>
    </div>
    <div class="service">
        <ul>
            <li><span>
                <img src="../../assets/img/main/arrrdess.png" alt="">
                </span><p>收货地址</p>
                <div class="go-next"></div>
                </li>
            <li><span>
                <img src="../../assets/img/main/paper.png" alt="">
                </span><p>我的优惠券</p>
                <div class="go-next"></div>
                </li>
            <li><span>
                <img src="../../assets/img/main/safy.png" alt="">
                </span><p>账户与安全</p>
                <div class="go-next"></div>
                </li>
            <li><span>
                <img src="../../assets/img/main/query.png" alt="">
                </span><p>联系客服</p>
                <div class="go-next"></div>
                </li>
            <li><span>
                <img src="../../assets/img/main/art.png" alt="">
                </span><p>关于造物</p>
                <div class="go-next"></div>
                </li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Main',
    data(){
        return{
            
        }
    }
}
</script>
<style lang = "scss">
.main{
    .banner-pic{
        position: relative;
        width: 100%;
        height: 237px;
        background: url(../../assets/img/main/bg1.png) no-repeat center;
        .logo{
            position: absolute;
            top: 53px;
            left: 50%;
            margin-left: -37px;
            width: 74px;
            height: 74px;
            border-radius: 50%;
            background: url(../../assets/img/main/1.png) no-repeat center;
            background-size: cover;
        }
        .resign{
            position: absolute;
            top: 146px;
            left: 50%;
            margin-left: -47px;
            width: 94px;
            height: 34px;
            background-color: #fff;
            span{
                display: block;
                font-size: 14px;
                line-height: 34px;
                width: 46px;
                height: 100%;
                &.go-in{
                    position: absolute;
                    top: 0;
                    left: 46px;
                    border-left: 1px solid #CDCDCD;

                }
            }
        }
    }
    .order{
        position: relative;
        top: -41px;
        width: 336px;
        height: 120px;
        margin: 0 auto;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #fff;
        box-shadow: 1px 1px 8px 2px #e5e5e5;
        p{
            position: relative;
            width: 100%;
            height: 41px;
            border-bottom: 1px solid #e5e5e5;
            line-height: 41px;
            text-align: left;
            font-size: 16px;
            color: #010E0D;
            span{
                position: absolute;
                top: 11px;
                right: 20px;
                display: block;
                width: 20px;
                height: 20px;
                background: url(../../assets/img/kind/gonext.png) no-repeat center;
            }
        }
        ul{
            width: 100%;
            height: 79px;
            margin-top: 10px;
            overflow: hidden;
            li{
                position: relative;
                width: 25%;
                height: 100%;
                float: left;
                span{
                    position: absolute;
                    left: 50%;
                    margin-left: -14px;
                    display: block;
                    width: 28px;
                    height: 28px;
                }
                p{
                    margin-top: 28px;
                    text-align: center;
                }
            }
        }
    }
    .collection{
        position: relative;
        top: -28px;
        width: 336px;
        height: 120px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 1px 1px 8px 2px #e5e5e5;
        p{
            position: relative;
            width: 100%;
            height: 41px;
            border-bottom: 1px solid #e5e5e5;
            line-height: 41px;
            text-align: left;
            font-size: 16px;
            color: #010E0D;
            span{
                position: absolute;
                top: 11px;
                right: 20px;
                display: block;
                width: 20px;
                height: 20px;
                background: url(../../assets/img/kind/gonext.png) no-repeat center;
            }
        }
        ul{
            width: 100%;
            height: 79px;
            margin-top: 10px;
            overflow: hidden;
            li{
                position: relative;
                width: 33.3%;
                height: 100%;
                float: left;
                span{
                    position: absolute;
                    left: 50%;
                    margin-left: -14px;
                    display: block;
                    width: 28px;
                    height: 28px;
                }
                p{
                    margin-top: 28px;
                    text-align: center;
                }
            }
        }
    }
    .service{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 100px;
        ul{
            width: 100%;
            li{
                position: relative;
                width: 100%;
                height: 54px;
                margin-top: 1px;
                border-bottom: 1px solid #e5e5e5;
                span{
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    margin-top: -11px;
                    display: block;
                    width: 22px;
                    height: 22px;
                }
                p{
                    width: 85%;
                    height: 100%;
                    margin-left: 15%;
                    text-align: left;
                    font-size: 16px;
                    line-height: 54px;

                }
                .go-next{
                    position: absolute;
                    top: 17px;
                    right: 20px;
                    width: 20px;
                    height: 20px;
                    background: url(../../assets/img/kind/gonext.png) no-repeat center;
                }
            }
        }
    }
}

</style>

