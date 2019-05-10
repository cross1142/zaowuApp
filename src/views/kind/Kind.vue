<template>
    <div class="kind">
        <!-- <img style="width: 100%" src="../../assets/img/kind/page1.png" alt=""> -->
        <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">ZAOWU 造物</a></div>
                <ul class="mesage">
                <li><a class="mesg" href="#"></a></li>
                <router-link class="detail link" tag = "li" to = "/kind/:id/goodsList/car"><a class="car" href="#"></a></router-link>
                </ul>
        </div>
        <div class="kind-list-wrapper">
        <kind-item class="kind-item" @change-show="handleChangeShow" v-for="g in goodsKindList" :key="g.id" :goods="g" :showItem="isShow"></kind-item>
        </div>
    </div>
</template>
<script>
import ProductApi from '@/api/productApi'
import KindItem from './components/KindItem'
export default {
    name: 'kind',
    components:{
        KindItem
    },
    data(){
        return{
       goodsKindList:[],
       isShow: ''
        }
    },
    created(){
        this.getGoods();
    },
       methods: {
            getGoods(){
                ProductApi.getProductList()
                .then(res=>{
                    this.goodsKindList = res;
                    console.log(res);
                })
            },
            show(id){
                if(this.isShow == id){
                    this.isShow = '';
                }
                else{
                    this.isShow = id;
                }
            },
            handleChangeShow(id){
           console.log(id)
           if(this.isShow == id){
               this.isShow = ''
           }else{
                this.isShow = id;
           }
           
       }
        }
}
</script>
<style lang = "scss" scoped>
.kind{
    .kind-list-wrapper{
        width: 100%;
        margin-bottom: 100px;
        .kind-item:nth-child(2n) ::v-deep .goods-mesg{
            img{
                margin-left:-240px;
            }
            p{
                margin-left: 220px;
            }
        }
    }
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
        background: url(../../assets/img/kind/goback.png) no-repeat center;
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
                    background: url(../../assets/img/home/mesg.png) no-repeat center;
                }
                &.car{
                    background: url(../../assets/img/home/car.png) no-repeat center;
                     }
                 }
             }
         }
    }
}
</style>


