<template>
  <div class="app">
    <!-- 首页 -->
    <!-- <HomePage>
      <MySearch></MySearch>
      </HomePage> -->

    <!-- 找房 -->
    <!-- <FlatHunting>
      <MySearch></MySearch>
    </FlatHunting> -->

    <!-- 咨询
    <MyConsult></MyConsult> -->

    <!-- 我的 -->
    <!-- <MineHome></MineHome> -->

    <router-view></router-view>



    <HomeFooder></HomeFooder>
  </div>
</template>

<script>
 import HomeFooder from './components/HomeFooder.vue'
//  import MySearch from './components/MySearch.vue'

//  import HomePage from './views/HomePage.vue'  //首页
//  import FlatHunting from './views/FlatHunting.vue' //找房
//  import MyConsult from './views/MyConsult.vue' //咨询
//  import MineHome from './views/MineHome.vue' //我的

export default {
 components:{
  HomeFooder,
  // MySearch, //搜索
  // HomePage, //首页
  // FlatHunting, //找房
  // MyConsult, //咨询
  // MineHome //我的
 }

}
</script>

<style lang="less" scoped>
.app {
padding-bottom: 50px;
}


</style>