<template>
    <div class="my-car">
            <div class="header">
                <div @click = "$router.go(-1)" class="search"></div>
                <div class="logo"><a href="#">购物车</a></div>
                <ul class="mesage">
                <li @click = "edit"><a class="car" href="#">编辑</a></li>
                </ul>
            </div>
            <ul class="car-list">
                <li v-for = "(g,index) in goodsKindList" :key = "g.id">
                    <span @click = "changeshow(g.id)" class="dotts">
                        <img v-show = "g.isShow" src="../../../../assets/img/kind/true.png" alt="">
                    </span>
                    <span class="pic">
                        <img :src="g.img" alt="">
                    </span>
                    <p>{{g.title}}</p>
                    <p>{{g.text}}</p>
                    <p>¥{{g.price}}</p>
                    <div @click = "del(index)" v-show = "isEdit" class="delete">删除</div>
                   <div class="count">
                        <div @click = "sub(g.id)" class="sub">-</div>
                        <div class="num">{{g.count}}</div>
                        <div @click = "add(g.id)" class="add">+</div>
                   </div>
                </li>
            </ul>
            <div class="like">
                <p>你可能还会喜欢</p>
                <ul class="like-goods">
                    <li>
                        <p class="p1">TRIUMPU</p>
                        <p class="p2">文胸内裤套装</p>
                    </li>
                    <li>
                        <p>TRIUMPU</p>
                         <p>文胸内裤套装</p>
                    </li>
                </ul>
            </div>
            <div class="foot">
                <ul class="buy">
                    <li @click ="allGoods"><span>
                        <img v-show = "allChoose" src="../../../../assets/img/kind/true.png" alt="">
                        </span></li>
                    <li @click ="allGoods">全选</li>
                    <li>总计</li>
                    <li>${{totlePrice}}</li>
                    <router-link :to="{name: 'Buy', params:{id: goodsKindList.id}}" class="buy" tag = "li">立即购买</router-link>
                    <!-- <li>立即购买</li> -->
                </ul>
            </div>
    </div>
</template>
<script>
import MyCar from '@/api/MyCar'
export default {
    name: 'MyCar',
    data(){
        return{
        goodsKindList: [],
        isEdit: false
        }
    },
        created(){
        this.getGoods();
    },
    computed:{
        totlePrice(){
            var totle = 0;
            // var num = 0;
             var choosed = this.goodsKindList.filter(item =>{
                 return item.isShow == true;
             })
             choosed.forEach(item=>{
                 totle += item.price*item.count;
             })
            return totle;
        },
        allChoose(){
        var flag = false;
        var num = 0;
           this.goodsKindList.forEach(item =>{
                if(item.isShow == true){
                    num += 1;
                }
                if(num == this.goodsKindList.length){
                    flag = true;
                }
            })
            return flag;
        }
    },
    methods:{
        getGoods(){
                MyCar.getevaluation()
                .then(res=>{
                    this.goodsKindList = res;
                })
            },
        changeshow(id){
            this.goodsKindList.map(item=>{
                    if(item.id == id){
                        if(item.isShow == false){
                            item.isShow = true;
                        }else{
                            item.isShow = false;
                        }
                    }
            })
            },
        allGoods(){
            this.goodsKindList.map(item=>{
                item.isShow = true;
            })
            },
        edit(){
            if(this.isEdit == false){
                this.isEdit = true;
            }else{
                this.isEdit = false;
            }
            },
        add(id){
            this.goodsKindList.map(item =>{
                if(item.id == id){
                    item.count++;
                }
            })
        },
        sub(id){
            this.goodsKindList.map(item =>{
                if(item.id == id){
                    item.count--;
                }
                if(item.count< 1){
                item.count = 1;
                }
            })
        },
        del(index){
                this.goodsKindList.splice(index,1);
        }
    }
}
</script>
<style lang = "scss">
.my-car{
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
            width: 32px;
            height: 22px;
            margin-top: 3px;
            margin-left: 18px;
            font-size: 16px;
            line-height: 22px;
            a{
                display: block;
                width: 100%;
                height: 100%;
                color: #010E0D;
            }

        }
    }
}
.car-list{
    width: 100%;
    background-color: #F4F4F4;
    margin-top: 18px;
    overflow: hidden;
    li{
        position: relative;
        width: 333px;
        height: 114px;
        margin: 0 auto;
        background-color: #fff;
        margin-top: 20px;
        .delete{
            position: absolute;
            top: 20px;
            right: 35px;
        }
        .dotts{
            position: absolute;
            top: 50%;
            left: 6px;
            margin-top: -9px;
            display: block;
            width: 18px;
            height: 18px;
            background-color: #fff;
            border-radius: 50%;
            border: 1px solid #e5e5e5;
        }
        .pic{
            position: absolute;
            top: 50%;
            left: 30px;
            margin-top: -38px;
            display: block;
            width: 76px;
            height: 76px;
        }
        p{
            position: absolute;
            top: 29px;
            left: 120px;
            width: 70%;
            text-align: left;
            font-size: 12px;
            color: #494949;
            &:nth-child(3){
                margin-top: 20px;
            }
            &:nth-child(4){
                margin-top: 40px;
                font-size: 12px;
                color: #494949;
            }
        }
        .count{
            position: absolute; 
            bottom: 10px; 
            right: 15px; 
            float: left;
            margin-right: 15px;
            div{
                float: left;
                font-size: 14px;
                margin-right: 6px;
            }
        }
    }
}
.like{
    width: 100%;
    background-color: #f4f4f4;
    p{
        width: 100%;
        height: 80px;
        line-height: 60px;
        font-size: 14px;
        color: #010E0D;
    }
    .like-goods{
        width: 100%;
        height: 168px;
        li{
            width: 130px;
            height: 100%;
            float: left;
            background-color: orange;
            margin-left: 80px;
            background: url(../../../../assets/img/kind/cloth.png) no-repeat center;
            background-position: 0 0;
            &:nth-child(1){
                margin-left: 34px;
            }
            p{
                margin-top: 60px;
                &:nth-child(1){
                    margin-top: 100px;
                }
                &:nth-child(2){
                    margin-top: -60px;
                }
            }
        }
    }
}
.foot{
    width: 100%;
    height: 60px;
    .buy{
        width: 100%;
        height: 100%;
        li{
            width: 20%;
            height: 100%;
            line-height: 60px;
            float: left;
            &:nth-child(1){
                width: 20px;
                height: 100%;
                margin-left: 20px;
                span{
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 20px;
                    background-color: #fff;
                    margin-top: 20px;
                    border-radius: 50%;
                    border: 1px solid #e5e5e5;
                    img{
                        position: absolute;
                        top: 1px;
                        left: 1px;
                    }
                }
            }
            &:nth-child(2){
                width: 36px;
                height: 100%;
                font-size: 18px;
                color: #010E0D;
                margin-left: 10px;
            }
            &:nth-child(3){
                width: 28px;
                height: 100%;
                font-size: 14px;
                color: #010E0D;
                margin-left: 66px;
            }
            &:nth-child(4){
                width: 38px;
                height: 100%;
                font-size: 16px;
                color: #1C4B47;
                margin-left: 20px;
            }
            &:nth-child(5){
                width: 113px;
                height: 40px;
                font-size: 16px;
                color: #fff;
                margin-left: 20px;
                background-color: #1C4B47;
                margin-top: 10px;
                line-height: 40px;
                border-radius: 6px;
            }
        }
    }
}
}

</style>

