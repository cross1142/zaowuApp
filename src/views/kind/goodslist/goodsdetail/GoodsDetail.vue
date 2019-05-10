<template>
    <div class="goods-detail">
            <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">商品详情</a></div>
                <ul class="mesage">
                <li><a class="mesg" href="#"></a></li>
                <!-- <li><a class="car" href="#"></a></li> -->
                <router-link class="detail link" tag = "li" to = "/kind/:id/goodsList/car"><a class="car" href="#"></a></router-link>
                </ul>
            </div>
               <div class="goods-page">
                <router-link class="detail link" to = "/kind/:id/goodsList/:id/goodsdetail/detail">详情</router-link>
                <router-link class="evaluation link" to = "/kind/:id/goodsList/:id/goodsdetail/evaluation">评价</router-link>
               </div>
            <router-view></router-view>
    <div class="add-car">
        <span class="hert"></span>
        <span class="contect"></span>
        <span @click = "showModal"  :class="{active:isactive}">加入购物车</span>
        <span @click = "payShowModal"  :class="{active:!isactive}">立即购买</span>
    </div>
     <!-- 模态窗口 -->
    <div v-show = "open[0].isShow" class="my-modal">
        <div @click = "close" class="close"></div>
        <div class="goods-pic"></div>
        <span class="cname">ESSENCE</span>
        <span class="text">女士Cozy圆领吊带性感睡衣</span>
        <span class="price">¥219</span>
        <span class="count">仅剩{{count}}件</span>
        <div class="color">
            <p>颜色</p>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="size">
            <p>规格</p>
            <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
            </ul>
        </div>
        <div class="number">
            <p>数量</p>
            <ul>
                <li @click = "subNum">-</li>
                <li>{{number}}</li>
                <li @click = "addNum">+</li>
            </ul>
        </div>
        <router-link class="btn"  tag = "div" to = "/kind/:id/goodsList/car">确定</router-link>
        <!-- <div  @click = "close" class="btn">确定</div> -->
    </div>
         <!-- 模态窗口 -->
    <div v-show = "open[0].payShow"  class="my-pay-modal">
        <div @click = "closePay" class="close"></div>
        <div class="goods-pic"></div>
        <span class="cname">ESSENCE</span>
        <span class="text">女士Cozy圆领吊带性感睡衣</span>
        <span class="price">¥219</span>
        <span class="count">仅剩{{count}}件</span>
        <div class="color">
            <p>颜色</p>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="size">
            <p>规格</p>
            <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
            </ul>
        </div>
        <div class="number">
            <p>数量</p>
            <ul>
                <li @click = "subNum">-</li>
                <li>{{number}}</li>
                <li @click = "addNum">+</li>
            </ul>
        </div>
        <router-link :to="{name: 'Buy', params:{id: id}}" class="btn" tag = "div">立即支付</router-link>
        <!-- <div  @click = "close" class="btn">确定</div> -->
    </div>
    </div>
</template>
<script>
export default {
    name: 'GoodsDetail',
    data(){
        return{
            count: 10,
            number: 1,
            isactive: false,
            id: Math.random(),
            open: [
                {
                    isShow: false,
                    id : Math.random(),
                    payShow: false
                }
            ]
        }
    },
      created(){
        this.sendMesg();
    },
    methods:{
        close(){
            this.open.map(item=>{
                item.isShow = false;
            })
              $('.my-modal').css('transform','translateY(0)');
              $('.goods-detail').css('backgroundColor','rgba(255,255,255,0)')
        },
        closePay(){
            this.open.map(item=>{
                item.payShow = false;
            })
              $('.my-modal').css('transform','translateY(0)');
              $('.goods-detail').css('backgroundColor','rgba(255,255,255,0)')
        },
        subNum(){
            this.number --;  
            if(this.number < 0){
                this.number = 0;
            }  
        },
        addNum(){
            this.number ++; 
        },
        showModal($event){
            if(this.isactive == false){
                this.isactive = true;
            }else{
                 this.isactive = false;
            }
            this.open.map(item=>{
                item.isShow = true;
            })
        $('.goods-detail').css('backgroundColor','rgba(56,56,56,1)')
        },
        payShowModal($event){
            if(this.isactive == false){
                this.isactive = true;
            }else{
                 this.isactive = false;
            }
            this.open.map(item=>{
                item.payShow = true;
            })
        $('.goods-detail').css('backgroundColor','rgba(56,56,56,1)')
        },
        sendMesg(){
           this.$store.dispatch('product/getProductList');
        }
    },
    computed:{
        getGoodsList(){
            this.$store.state.product.all;
        }
    }
}
</script>
<style lang = "scss">
.goods-detail{
    position: relative;
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
        background: url(../../../../assets/img/kind/goback.png) no-repeat center;
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
                    background: url(../../../../assets/img/kind/enjoy.png) no-repeat center;
                }
                &.car{
                    background: url(../../../../assets/img/home/car.png) no-repeat center;
                }
            }
        }
    }
}
.goods-page{
    width: 100%;
    height: 24px;
    margin-top: 18px;
    .link{
        width: 50%;
        height: 100%;
        color: #999999 ;
        font-size: 17px;
        text-align: center;
        line-height: 24px;
        &.detail{
            margin-left: -30px;
        }
        &.evaluation{
            margin-left: 70px;
        }
        &.router-link-active{
            color: black;
        }
    }
}
    .add-car{
        width: 340px;
        margin: 0 auto;
        height: 40px;
        margin-top: 10px;
        padding-bottom: 0;
        z-index: 100;
        span{
            display: block;
            width: 25%;
            height: 100%;
            float: left;
            margin-left: 10px;
            font-size: 15px;
            color: #1C4B47;
            line-height: 40px;
            border-radius: 6px;
            &:nth-child(1)
            {
                width: 10%;
                margin-left: 10px;
                background: url(../../../../assets/img/kind/hert.png) no-repeat center;
            }
               &:nth-child(2)
            {
                width: 10%;
                margin-left: 25px;
                background: url(../../../../assets/img/kind/conect.png) no-repeat center;
            }
               &:nth-child(3)
            {
                margin-left: 50px;
                border: 1px solid #1C4B47;
            }
                &:nth-child(4)
            {
                border: 1px solid #1C4B47;
            }
            &.active{
                background-color: #1C4B47;
                color: #fff;
            }
        }
    }
    .my-modal{
        position: absolute;
        top: 120px;
        left: 21px;
        width: 333px;
        height: 540px;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;
        transition: all ease 2s;
        z-index: 100;
        .close{
            width: 17px;
            height: 17px;
            background: url(../../../../assets/img/kind/close.png) no-repeat center;
            margin-top: 15px;
            margin-right: 15px;
        }
        .goods-pic{
            width: 114px;
            height: 114px;
            border-radius: 8px;
            background-color: orange;
            margin-top: 15px;
            margin-left: 15px;
            background: url(../../../../assets/img/kind/cloth.png) no-repeat center;
        }
        span{
            position: absolute;
            top: 30px;
            left: 150px;
            display: block;
            color: #494949;
            font-size: 12px;
            width: 150px;
            height: 30px;
            text-align: left;
            &.text{
                margin-top: 25px;
            }
            &.price{
                margin-top: 50px;
                color: #010E0D;
                font-size: 16px;
            }
              &.count{
                margin-top: 75px;
            }
        }
        .color{
            width: 50%;
            height: 118px;
            margin-left: 15px;
            text-align: left;
            overflow: hidden;
            background: url(../../../../assets/img/kind/go-up.png) no-repeat;
            background-position: 28px 10px;
            p{
                margin-top: 18px;
                font-size: 14px;
            }
            ul{
                width: 100%;
                height: 35px;
                margin-top: 16px;
                li{
                    width: 35px;
                    height: 35px;
                    float: left;
                    margin-left: 32px;
                    border-radius: 50%;
                    &:nth-child(1){
                        background-color: #EBE7DC;
                        margin-left: 24px;
                    }
                     &:nth-child(2){
                        background-color: #101010;
                    }
                }
            }
        }
        .size{
            width: 80%;
            height: 118px;
            margin-left: 15px;
            text-align: left;
            overflow: hidden;
            background: url(../../../../assets/img/kind/go-up.png) no-repeat;
            background-position: 28px 10px;
            p{
                margin-top: 18px;
                font-size: 14px;
            }
            ul{
                width: 100%;
                height: 35px;
                margin-top: 16px;
                li{
                    width: 44px;
                    height: 39px;
                    float: left;
                    line-height: 44px;
                    font-size: 16px;
                    text-align: center;
                    margin-left: 24px;
                    box-shadow: 1px 1px 8px 1px #e5e5e5;
                }
            }
        }
        .number{
            width: 50%;
            height: 118px;
            margin-left: 15px;
            text-align: left;
            overflow: hidden;
            background: url(../../../../assets/img/kind/go-up.png) no-repeat;
            background-position: 28px 10px;
            p{
                margin-top: 18px;
                font-size: 14px;
            }
            ul{
                width: 100%;
                height: 20px;
                margin-top: 16px;
                li{
                    width: 22px;
                    height: 24px;
                    float: left;
                    font-size: 14px;
                    margin-left: 4px;
                    box-shadow: 1px 1px 8px 1px #e5e5e5;
                    line-height: 24px;
                    text-align: center;
                    &:nth-child(2){
                        width: 33px;
                    }
                }
            }
        }
        .btn{
            width: 177px;
            height: 40px;
            margin: 0 auto;
            background-color: #1C4B47;
            font-size: 15px;
            line-height: 14px;
            text-align: center;
        }
    }
    .my-pay-modal{
        position: absolute;
        top: 120px;
        left: 21px;
        width: 333px;
        height: 540px;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;
        transition: all ease 2s;
        z-index: 100;
        .close{
            width: 17px;
            height: 17px;
            background: url(../../../../assets/img/kind/close.png) no-repeat center;
            margin-top: 15px;
            margin-right: 15px;
        }
        .goods-pic{
            width: 114px;
            height: 114px;
            border-radius: 8px;
            background-color: orange;
            margin-top: 15px;
            margin-left: 15px;
            background: url(../../../../assets/img/kind/cloth.png) no-repeat center;
        }
        span{
            position: absolute;
            top: 30px;
            left: 150px;
            display: block;
            color: #494949;
            font-size: 12px;
            width: 150px;
            height: 30px;
            text-align: left;
            &.text{
                margin-top: 25px;
            }
            &.price{
                margin-top: 50px;
                color: #010E0D;
                font-size: 16px;
            }
              &.count{
                margin-top: 75px;
            }
        }
        .color{
            width: 50%;
            height: 118px;
            margin-left: 15px;
            text-align: left;
            overflow: hidden;
            background: url(../../../../assets/img/kind/go-up.png) no-repeat;
            background-position: 28px 10px;
            p{
                margin-top: 18px;
                font-size: 14px;
            }
            ul{
                width: 100%;
                height: 35px;
                margin-top: 16px;
                li{
                    width: 35px;
                    height: 35px;
                    float: left;
                    margin-left: 32px;
                    border-radius: 50%;
                    &:nth-child(1){
                        background-color: #EBE7DC;
                        margin-left: 24px;
                    }
                     &:nth-child(2){
                        background-color: #101010;
                    }
                }
            }
        }
        .size{
            width: 80%;
            height: 118px;
            margin-left: 15px;
            text-align: left;
            overflow: hidden;
            background: url(../../../../assets/img/kind/go-up.png) no-repeat;
            background-position: 28px 10px;
            p{
                margin-top: 18px;
                font-size: 14px;
            }
            ul{
                width: 100%;
                height: 35px;
                margin-top: 16px;
                li{
                    width: 44px;
                    height: 39px;
                    float: left;
                    line-height: 44px;
                    font-size: 16px;
                    text-align: center;
                    margin-left: 24px;
                    box-shadow: 1px 1px 8px 1px #e5e5e5;
                }
            }
        }
        .number{
            width: 50%;
            height: 118px;
            margin-left: 15px;
            text-align: left;
            overflow: hidden;
            background: url(../../../../assets/img/kind/go-up.png) no-repeat;
            background-position: 28px 10px;
            p{
                margin-top: 18px;
                font-size: 14px;
            }
            ul{
                width: 100%;
                height: 20px;
                margin-top: 16px;
                li{
                    width: 22px;
                    height: 24px;
                    float: left;
                    font-size: 14px;
                    margin-left: 4px;
                    box-shadow: 1px 1px 8px 1px #e5e5e5;
                    line-height: 24px;
                    text-align: center;
                    &:nth-child(2){
                        width: 33px;
                    }
                }
            }
        }
        .btn{
            width: 177px;
            height: 40px;
            margin: 0 auto;
            background-color: #1C4B47;
            font-size: 15px;
            line-height: 14px;
            text-align: center;
        }
    }
}
</style>

