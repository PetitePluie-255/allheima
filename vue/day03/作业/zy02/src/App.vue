<template>
  <div class="wrap clearfix">
    <div class="location">当前位置：首页 <span>&nbsp;&gt;&nbsp;</span><b class="red"> 购物车</b></div>
    <table width="100%" class="cartTable" cellspacing="0" cellpadding="10px">
      <!-- 首行 -->
      <tr class="title">
        <td width="50"><input type="checkbox" name="" class="choose_all"></td>
        <td width="100" class=""><span style="margin-left: -10px;">全选</span></td>
        <td width="400">商品信息</td>
        <td width="150">单价（元）</td>
        <td width="150">数量</td>
        <td width="150">金额（元）</td>
        <td width="80">操作</td>
      </tr>

      <!-- 商品 -->
      <CartItem></CartItem>

      <tr class="count">
        <td colspan="7">
          <div class="jiesuan clearfix">
            <div class="left fl">
              <p><input type="checkbox" name="" class="choose_all"> 全选&nbsp;&nbsp;&nbsp;<a href="#"
                  class="del_check">删除选中商品</a></p>
            </div>
            <div class="right fr clearfix">
              <p>商品总计：￥465.00</p>
              <p>活动优惠：-￥0.00</p>
              <p>已选商品<span class="red t-number"> 0 </span>件 总价(不含运费、税费)：<span class="red t-price">￥0.00</span></p>
              <!-- <div><a href="#" class="btn pay">结算</a></div> -->
              <a href="#" class="btn pay fr">结算</a>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import CartItem from './components/CartItem.vue';
export default {
  components: {
    CartItem
  }
}
</script>

<style>
/* 公共样式 */
.clearfix {
  content: '';
  display: block;
  clear: both;
}

.red {
  color: #f30213;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

/* 清除默认样式 */
* {
  margin: 0px;
  padding: 0px;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: #333;
}

table {
  padding: 10px;
}

input {
  outline: none;
}

.wrap {
  width: 1180px;
  margin: 0 auto;
}

.wrap .location {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.title {
  height: 40px;
  line-height: 40px;
}

.cartTable {
  border: 1px solid #ccc;

}

.cartTable tr.title {
  background-color: rgb(241, 243, 244);
  font-weight: bold;
}

.cartTable tbody tr td {
  /* border: 1px solid rgb(245, 245, 245); */
  padding: 10px;
}

/* 原价 */
.cartTable tbody tr td .tdl {
  text-decoration: line-through;
  color: #999;
}

/* 商品数量 */
.cartTable tr .amount .unum {
  width: 70px;
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  float: left;
}

/* 数量加减按钮 */
.cartTable tr .amount a {
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.cartTable tr .amount a.Increase {
  border-right: none;
  float: left;
}

.cartTable tr .amount a.Reduce {
  border-left: none;
  float: left;
}

.cartTable tr.count .jiesuan .right {
  text-align: right;

}

.cartTable tr.count .jiesuan .right p {
  margin: 5px 0;
}

.cartTable tr.count .jiesuan .right .pay {
  display: block;
  width: 160px;
  height: 50px;
  line-height: 50px;
  background-color: #f30213;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
}

.row img {
  width: 100px;
  height: 100px;
}</style>