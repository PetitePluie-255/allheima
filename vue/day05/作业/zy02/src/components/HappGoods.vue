<template>
    <div>
      <h2>商品相关信息</h2>
      <div>
        <div>商品id: <strong><slot name="SunFen"> SF12345678912312</slot></strong></div>
        <div>商品名称: <strong><slot name="name" >三体</slot> </strong></div>
        <div>商品描述: <slot name="desc"> <slot name="dec"> 这是一本好书</slot></slot></div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>