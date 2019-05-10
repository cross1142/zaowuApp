<template>
    <div class="shops">
        <ul>
            <router-link to = "/find/goodsdetail" v-for = "m in goops" :key = "m.id" tag = "li">
                <img :src="m.img" alt="">
                <span>{{m.etitle}} | {{m.ctitle}}</span>
                <p>{{m.text}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
   name: 'Shops',
   data(){
       return{
           goops:[
               {
                   id: Math.random(),
                    etitle: 'NEIWAI2019秋冬',
                    ctitle: '针织新品优惠',
                    text: '和Jennifer领略NEIWAI，感受自潮不熄',
                    img: require('@/assets/img/find/good1.png')
               },
               {
                   id: Math.random(),
                    etitle: 'NEIWAI2019秋冬',
                    ctitle: '针织新品优惠',
                    text: '和Jennifer领略NEIWAI，感受自潮不熄',
                    img: require('@/assets/img/find/good2.png')
               },
               {
                   id: Math.random(),
                    etitle: 'NEIWAI2019秋冬',
                    ctitle: '针织新品优惠',
                    text: '和Jennifer领略NEIWAI，感受自潮不熄',
                    img: require('@/assets/img/find/good3.png')
               }
           ]
       }
   } 
}
</script>
<style lang = "scss">
.shops{
    width: 100%;
    ul{
        width: 100%;
        height: 800px;
        margin-top: 18px;
        li{
            width: 100%;
            height: 236px;
            span{
                display: block;
                line-height: 22px;
                font-size: 16px;
                margin-top: 10px;
            }
            p{
                font-size: 12px;
                line-height: 17px;
                color: #999;
                margin-top: 6pz;
            }
        }
    }
}


</style>


