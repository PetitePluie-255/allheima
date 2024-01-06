<template>
  <div class="container">
    <MyHeader title="外卖订单求助中心"></MyHeader>
    <MyOrderList v-model="orderList"></MyOrderList>
  </div>
</template>

<script>

import { orderList } from './mock/index.js'
import MyHeader from "./components/MyHeader.vue";
import MyOrderList from "./components/MyOrderList.vue";
export default {
  data() {
    return {
      showDialog: false,
      acceptId: null,
      orderList:orderList
    };
  },
  components: {
    MyHeader,
    MyOrderList,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>