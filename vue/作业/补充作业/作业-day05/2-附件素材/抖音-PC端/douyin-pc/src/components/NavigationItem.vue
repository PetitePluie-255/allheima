<template>
  <div class="navigation-item" :class="{active:active===index}" v-if="index!==undefined">
    <div class="icon" :style="{'backgroundPosition':0 -48*index-(active===index?24:0) +'px'}"></div>
    <span class="title"><slot></slot></span>
  </div>
  <div class="break" v-else></div>
</template>

<script>
export default {
    props:['index','active']
}
</script>

<style scoped>
    .navigation-item{
        width: 100%;
        height: 40px;
        margin-bottom: 1px;
        position: relative;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;
        font-family: "PingFang SC", DFPKingGothicGB-Regular, sans-serif;
        color:rgb(255,255,255,.5);
        transition: .3s;
    }
    .icon{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 8px;
        left:16px;
        background: url('../assets/nav_dark.png');
        background-size: 816px;
        opacity: .5;
    }
    .title{
        position: absolute;
        left:52px;
    }
    .navigation-item:hover,.active{
        background: #3f2c3c;
        border-radius: 12px;
        color: #fff;
    }
    .navigation-item:hover .icon,.active .icon{
        opacity: 1;
    }
    .break{
        border-top: 1px solid rgb(55,55,55,.8);
        margin:12px 0;
    }
</style>