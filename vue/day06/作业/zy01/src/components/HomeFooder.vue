<template>
    <div class="footer" >
        <router-link to="/HomePage" class="color">
            <span class=" iconfont icon-shouye-shouye "></span>
            <p>首页</p>
        </router-link> <router-link to="/FlatHunting">
            <span class=" iconfont icon-sousuo"></span>
            <p>找房</p>
        </router-link> <router-link to="/MyConsult">
            <span class=" iconfont icon-zixun"></span>
            <p>咨询</p>
        </router-link> <router-link to="/MineHome">
            <span class=" iconfont icon-31wode"></span>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.footer{
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #ccc;

  a {
    text-align: center;
    .iconfont {
      font-size: 20px;
    }
    p {
      margin-top: 5px;
      font-size: 12px;
    }

  }
  .color.router-link-active {
    color: rgb(33, 185, 122)
  }
}

</style>