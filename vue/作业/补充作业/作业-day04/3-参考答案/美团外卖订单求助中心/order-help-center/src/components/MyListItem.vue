<template>
  <div class="my-item">
    <div class="content">
      <div class="title">
        配送费：<span class="tip">￥{{ info.money }}</span>
      </div>
      <div class="info">
        <span class="shop">配送商家：</span>
        <div class="text">{{ info.shopName }}</div>
      </div>
      <div class="info">
        <span class="shop">配送地址：</span>
        <div class="text">{{ info.address }}</div>
      </div>
      <div class="info">
        <span class="tip">超时时间： {{ info.timeout }}</span>
      </div>
    </div>
    <img
      class="avtar"
      :src="info.avtar"
      alt=""
      @click="acceptOrder(info.orderId)"
    />
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  props: ["info"],
  methods:{
    acceptOrder(id){
      Bus.$emit('acceptOrder',id)
    }
  }
};
</script>

<style scoped>
.my-item {
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  background: #fff;
  border-radius: 8px;
}
.avtar {
  width: 80px;
  object-fit: contain;
}
.content {
  flex: 1;
  display: flex;
  width: 0;
  flex-direction: column;
}
.title {
  font-weight: bold;
  width: 100%;
  margin-bottom: 4px;
}
.info {
  font-size: 14px;
  padding: 0 4px;
  margin: 4px 0;
}
.shop {
  border-radius: 4px;
  padding: 4px;
  background-color: #d9d2ae4d;
  color: #c8a509;
  margin-bottom: 4px;
}
.text{
  margin-top: 8px;
}
.tip {
  padding: 2px 8px;
  border-radius: 4px;
  background-color: #f9cf004d;
  color: #f40;
}
</style>