<template>
  <div class="layout-page">
    <div><router-view></router-view></div>

    <div>
      <van-tabbar route>
        <van-tabbar-item to="/article" icon="notes-o">面经</van-tabbar-item>
        <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
        <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
        <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped></style>
