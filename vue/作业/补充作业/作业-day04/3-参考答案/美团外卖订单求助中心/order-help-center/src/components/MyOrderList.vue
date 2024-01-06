<template>
  <div class="order-list">
    <div class="total">共{{ value.length }}条求助信息</div>
    <MyListItem
      v-for="item in value"
      :key="item.id"
      :info="item"
    ></MyListItem>
  </div>
</template>

<script>
import MyListItem from '../components/MyListItem.vue';
export default {
  props: ["value"],
  components: {
    MyListItem,
  },
};
</script>

<style scoped>
.order-list {
  width: 100%;
  height: calc(100% - 48px);
  background-color: #f1f1f5;
  box-sizing: border-box;
  padding: 16px;
  overflow-y: auto;
}
.total {
  text-align: center;
  color: #ccc;
  margin-bottom: 12px;
}
</style>