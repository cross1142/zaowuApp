<template>
    <div class="kind-item-main">
            <div class="shop-list">
            <div @click = "show(goods.id)" class="goods-mesg" >
                 <img :src="goods.img" alt="">
                    <p class="p1">{{goods.title}}</p>
                    <p class="p2">{{goods.ctitle}}</p>
                    <ul v-show = "showItem == goods.id" class="goods-tap">
                         <router-link :to="{name:'kindGoodsList',params:{id:subkind.id}}" tag="li" class="sub-kind-item" v-for="subkind in goods.subKindList" :key="subkind.id">
                        {{subkind.ctitle}}
                        <span></span>
                         </router-link>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'KindItemMain',
      props:{
        goods:Object,
        showItem: String   
    },
    data(){
        return{

        }
    },
    methods:{
        show(id){
            //通知父类组件 修改显示状态
            // 如果父类showItem == id  则当前sublist显示
            this.$emit('change-show',id);
        }
    }
}
</script>
<style lang ="scss">
.kind-item-main{
    .shop-list{
    width: 100%;
    /* height: 628px; */
    margin-top: 18px;
    .goods-mesg{
        position: relative;
        width: 94%;
        margin: 0 auto;
        margin-top: 18px;
        background-color: #f4f4f4;
        border-radius: 6px;
        /* background-color: lightblue; */
        img{
        margin-left: 200px;  
        padding: 20px; 
        }
        p{
            position: absolute;
            top: 40px;
            left: 50px;
            font-size: 20px;
            color: #010E0D ;
            line-height: 28px;
            &:nth-child(2){
                margin-top: 24px;
                font-size: 14px;
                color: #ACA7A9 ;
                line-height: 20px;
            }
        }
        &:nth-child(2n){
            img{
                margin-left: -60%;
            }
            p{
                margin-left: 58%;
            }
        }
        .goods-tap{
            width: 100%;
            /* height: 250px; */
            /* background-color: orange; */
            .sub-kind-item{
                position: relative;
                left: 2%;
                text-align: left;
                font-size: 16px;
                line-height: 40px;
                border-top: 1px solid #a7a3a3;
                width: 96%;
                height: 40px;
                span{
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: block;
                    width: 20px;
                    height: 100%;
                    background: url(../../../assets/img/kind/gonext.png) no-repeat center;
                }
            }
        }
    }
}
    
}

</style>


