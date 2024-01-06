<template>
  <div class="container">
    <MyHeader title="外卖订单求助中心"></MyHeader>
    <MyOrderList v-model="orderList"></MyOrderList>
    <MyDialog v-model="showDialog" @isOK="doAccept" title="确认帮忙处理次订单吗？"></MyDialog>
    <MyTip ref="myTip"></MyTip>
  </div>
</template>

<script>
import { orderList } from './mock/index.js'
import MyHeader from "./components/MyHeader.vue";
import MyOrderList from "./components/MyOrderList.vue";
import MyDialog from "./components/MyDialog.vue";
import Bus from './utils/EventBus'
export default {
  data() {
    return {
      showDialog: false,
      acceptId: null,
      orderList:orderList
    };
  },
  created(){
      Bus.$on('acceptOrder',(id)=>{
          this.acceptId = id
          this.showDialog = true
      })
  },
  components: {
    MyHeader,
    MyOrderList,
    MyDialog
  },
  methods: {
    doAccept() {
      this.orderList =this.orderList.filter(item=>item.orderId!==this.acceptId);
      this.showDialog = false;
      this.$refs.myTip.show('转接成功，请尽快送达')
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>