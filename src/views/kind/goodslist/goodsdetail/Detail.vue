<template>
    <div class="detail">
    <div class="detail-text">
        <ul v-for = "g in goodsData" :key = "g.id">
            <li>{{g.title}}</li>
            <li>{{g.ctitle}}</li>
            <li>{{g.price}}
                <span></span>
            </li>
            <li>{{g.text1}}</li>
            <li>{{g.text2}}</li>
            <li>{{g.text1}}</li>
        </ul>
    </div>
    <div v-for = "d in goodsData" :key = "d.id" class="detail-pic">
        <img :src="d.img" alt="">
    </div>
    </div>
</template>
<script>
import GoodsDdetail from '@/api/GoodsDetail'
export default {
    name: 'Detail',
    data(){
        return{
            goodsData:[]
        }
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata(){
            GoodsDdetail.goodslist()
            .then(res=>{
                console.log(res);
                this.goodsData = res;
            })
        }
    }
}
</script>
<style lang = "scss">
.detail{
    overflow: hidden;
    .detail-text{
        margin-top: 18px;
        width: 100%;
        height: 222px;
        ul{
            width: 100%;
            height: 100%;
            li{
                color: #494949 ;
                font-size: 10px;
                line-height: 24px;
                width: 100%;
                &:nth-child(1){
                    color: #010E0D;
                    font-size: 20px;
                }
                &:nth-child(2){
                    color: #010E0D;
                    font-size: 16px;
                    margin-top: 6px;
                }
                &:nth-child(3){
                    color: #494949;
                    margin-top: 6px;
                    letter-spacing: 5px;
                    span{
                        display: block;
                        width: 108px;
                        height: 2px;
                        background-color: #999;
                        margin: 6px auto;
                    }
                }
                     &:nth-child(4){
                    margin-top: 6px;
                }
            }
        }
    }
    .detail-pic{
        width: 340px;
        margin: 0 auto;
        height: 354px;
    }
}

</style>


