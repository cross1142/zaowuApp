<template>
    <div class="main-home">
        <div class="header">
            <div class="search"></div>
            <div class="logo"><a href="#">ZAOWU 造物</a></div>
            <ul class="mesage">
                <li><a class="mesg" href="#"></a></li>
                <router-link class="detail link" tag = "li" to = "/kind/:id/goodsList/car"><a class="car" href="#"></a></router-link>
            </ul>
        </div>
        <div class="banner">
            <ul class="banner-nav">
                <li><a @click="bannerImgs = imgs1" href="javascript:;">推荐</a></li>
                <li><a @click="bannerImgs = imgs2" href="javascript:;">活霍霍霍霍动</a></li>
                <li><a @click="bannerImgs = imgs3" href="javascript:;">品牌</a></li>
                <li><a @click="bannerImgs = imgs4" href="javascript:;">定制</a></li>
            </ul>
            <swiper class="swiper-container" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <swiper-slide v-for="m in bannerImgs" :key="m.id">
                    <img :src="m.img" alt="">
                </swiper-slide>
            </swiper>
            <gloable-title></gloable-title>
            <div class="banner-center">
            <div class="banner-pic"></div>
                <ul class="banner-pic-list">
                    <li v-for = "pic in bannerpic" :key = "pic.id">
                        <img :src="pic.img" alt="">
                        <span class="name">{{pic.name}}</span>
                        <p class="price">{{pic.price}}</p>
                    </li>
                </ul>
            </div>
            <div class="monday">
        <div class="gloable-nav">
            <span class="english-title">-TUE 9.18-</span>
            <p class="chinese-title">周二品质生活专题</p>
        </div>
            </div>
            <div class="new-shop">
                <ul class="new-shop-list">
                    <li v-for = "img in newshop" :key = "img.id">
                        <img :src="img.img" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import GloableTitle from '@/components/gloableTitle.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { request } from 'http';
export default {
    name: 'Home',
    components:{
        swiper,
    swiperSlide,
    GloableTitle
    },
    data(){
        return{
            bannerImgs:[],
            imgs1:[
                {
                    id: Math.random(),
                    url: '',
                    // 在vue的js中 不能通过相对路径引入图片 必须用模块化形式引入
                    // img: '../../assets/img/home/m1.png'
                    // require  commonjs规范 这里必须用require 因为是vue-cli在打包  
                    // import  es6模块化规范
                    img: require('@/assets/img/home/m1.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m2.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m3.png')
                }


            ],
            imgs2:[
                   {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m1.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m3.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m2.png')
                }
            ],
              imgs3:[
                   {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m3.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m1.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m2.png')
                }
            ],
              imgs4:[
                   {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m2.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m1.png')
                },
                {
                    id: Math.random(),
                    url: '',
                    img: require('@/assets/img/home/m3.png')
                }
            ],
            bannerpic:[
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/bg5.png'),
                    name: '精油香氛',
                    price: '$344'
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/bg4.png'),
                    name: '山居猎奇',
                    price: '$344'
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/bg2.png'),
                    name: '北欧国度',
                    price: '$344'
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/bg3.png'),
                    name: '卡洛卡陶瓷碗盘',
                    price: '$344'
                }
            ],
            newshop:[
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture1.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture2.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture3.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture4.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture5.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture6.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture7.png')
                },
                {
                    id: Math.random(),
                    img: require('@/assets/img/home/picture8.png')
                }
            ],
            swiperOption: {
                slidesPerView: 1.2,
                centeredSlides: true,
                loop: true,
                direction : 'horizontal'
            }
        }
},
    created(){
        //初始化bannerImgs
        this.bannerImgs = this.imgs1;
    },
    methods:{
        callback(){
            console.log('ff')
        }
    }
}
</script>
<style lang = "scss">
.main-home{
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
        background: url(../../assets/img/home/search.png) no-repeat center;
    }
    .logo{
        position: absolute;
        top: 0;
        left: 120px;
        width: 120px;
        height: 100%;
        a{
            display: block;
            width: 100%;
            height: 100%;
            font-size: 20px;
            line-height: 28px;
            color: #000;
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
.banner{
    width: 100%;
    margin-top: 20px;
    .banner-nav{
        height: 21px;
        width: 215px;
        margin: 0 auto;
        li{
            width: 46px;
            height: 100%;
            border-right: 1px solid #ebebeb;
            float: left;
            margin-left: 6px;
            line-height: 21px;
            &:last-child{
                border: none;
            }
            a{
                display: block;
                width: 100%;
                height: 100%;
                color: #010E0D ;
            }
        }
    }
 .swiper-container{
            width: 100%;
            height: 394px;  
            margin-top: 24px;
        }
        .banner-pic{
            width: 341px;
            height: 202px;
            margin-left: 17px;
            background-color: lightblue;
            background: url(../../assets/img/home/bg1.png) no-repeat center;
        }
        .banner-center{
            width: 341px;
            height: 190px;
            margin: 0 auto;
            .banner-pic-list{
                width: 100%;
                height: 100%;
                margin-top: 20px;
                li{
                    width: 25%;
                    height: 60%;
                    float: left;
                    span{
                        display: block;
                        width: 100%;
                        color: #494949;
                        font-size: 10px;
                        text-align: center;
                        margin-top: 7px;
                    }
                    .price{
                        color: #999;
                    }
                }
            }
        }
        .new-shop{
            width: 341px;
            height: 169px;
            margin: 0 auto;
            margin-bottom: 100px;
            .new-shop-list{
                width: 100%;
                height: 100%;
                li{
                    width: 79px;
                    height: 79px;
                    float: left;
                    margin-left: 8px;
                    margin-top: 8px;
                    &:nth-child(1),
                     &:nth-child(5)
                    {
                        margin-left: 0px;
                    }
                }
            }
        }
        .monday{
            width: 100%;
            height: 72px;
            margin-top: 180px;
        .gloable-nav{
                width: 100%;
                height: 72px;
                border-top: 5px solid #f9f9f9;
                .english-title{
                    display: block;
                    width: 100%;
                    height: 28px;
                    margin-top: 25px;
                    color: #010E0D;
                    font-size: 20px;
                }
                .chinese-title{
                    color: #999;
                    font-size: 12px;

        }
    }
        }
}
}
</style>



