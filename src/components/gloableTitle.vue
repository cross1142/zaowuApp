<template>
    <div class="gloable-title">
        <div class="gloable-nav">
            <span class="english-title">-TUE 9.18-</span>
            <p class="chinese-title">周二品质生活专题</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GloableTitle',
    data(){
        return{

        }
    }
}
</script>
<style lang = "scss">
.gloable-title{
    .gloable-nav{
        width: 100%;
        height: 72px;
        border-top: 5px solid #f9f9f9;
        .english-title{
            display: block;
            width: 100%;
            height: 28px;
            margin-top: 20px;
            color: #010E0D;
            font-size: 20px;
        }
        .chinese-title{
            color: #999;
            font-size: 12px;

        }
    }
}

</style>


