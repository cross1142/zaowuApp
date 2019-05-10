<template>
    <div class="evaluation">
        <ul>
            <li v-for = "e in evaluation" :key = "e.id">
                <span class="pic"><img :src="e.img" alt=""></span>
                <span class="name">{{e.title}}</span>
                <span class="data">{{e.data}}</span>
                <span class="text">{{e.text}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Evaluation from  '@/api/GetEvaluation'
export default {
    name: 'Evaluation',
    data(){
        return{
            evaluation: ''
        }
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata(){
            Evaluation.getevaluation()
            .then(res=>{
                this.evaluation = res;
            })
        },
    }
}
</script>
<style lang = "scss">
    .evaluation{
        ul{
            width: 100%;
            margin-top: 28px;
            li{
                position: relative;
                width: 324px;
                height: 130px;
                margin: 0 auto;
                margin-top: 15px;
                .pic{
                    position: absolute;
                    top: 10px;
                    left: 0;
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                }
                    .name{
                        position: absolute;
                        top: 15px;
                        left: 60px;
                        display: block;
                        width: 40%;
                        text-align: left;
                        font-size: 14px;
                        color: #000;
                    }
                    .data{
                        position: absolute;
                        top: 35px;
                        left: 60px;
                        display: block;
                        width: 40%;
                        text-align: left;
                        color: #999999;
                    }
                    .text{
                        position: absolute;
                        top: 58px;
                        left: 60px;
                        text-align: left;
                        color: #999;
                        line-height: 16px;
                        letter-spacing: 2px;
                    }
            }
        }
    }

</style>


