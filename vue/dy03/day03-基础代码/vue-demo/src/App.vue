<template>
  <div class="App">
    <!-- 快捷链接  -->
    <XtxShortCut></XtxShortCut>

    <!-- 头部导航  -->
    <XtxHeaderNav></XtxHeaderNav>

    <!-- 轮播区域 -->
    <XtxBanner></XtxBanner>

    <!-- 新鲜好物 -->
    <div class="goods wrapper">
      <div class="title">
        <div class="left">
          <h3>新鲜好物</h3>
          <p>新鲜出炉 品质靠谱</p>
        </div>
        <div class="right">
          <a href="#" class="more"
            >查看全部<span class="iconfont icon-arrow-right-bold"></span
          ></a>
        </div>
      </div>
      <div class="bd">
        <ul>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods1.png" alt="" /></div>
              <div class="txt">
                <h4>KN95级莫兰迪色防护口罩</h4>
                <p>¥ <span>79</span></p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods2.png" alt="" /></div>
              <div class="txt">
                <h4>KN95级莫兰迪色防护口罩</h4>
                <p>¥ <span>566</span></p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods3.png" alt="" /></div>
              <div class="txt">
                <h4>法拉蒙高颜值记事本可定制</h4>
                <p>¥ <span>58</span></p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/images/goods4.png" alt="" /></div>
              <div class="txt">
                <h4>科技布布艺沙发</h4>
                <p>¥ <span>3759</span></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 热门品牌 -->
    <div class="hot">
      <div class="wrapper">
        <div class="title">
          <div class="left">
            <h3>热门品牌</h3>
            <p>国际经典 品质认证</p>
          </div>
          <div class="button">
            <a href="#"><i class="iconfont icon-arrow-left-bold"></i></a>
            <a href="#"><i class="iconfont icon-arrow-right-bold"></i></a>
          </div>
        </div>
        <div class="bd">
          <ul>
            <li>
              <a href="#">
                <img src="@/assets/images/hot1.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/hot2.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/hot3.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/hot4.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/hot5.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 最新专题 -->
    <div class="topic wrapper">
      <div class="title">
        <div class="left">
          <h3>最新专题</h3>
        </div>
        <div class="right">
          <a href="#" class="more"
            >查看全部<span class="iconfont icon-arrow-right-bold"></span
          ></a>
        </div>
      </div>
      <div class="topic_bd">
        <ul>
          <li>
            <a href="#">
              <div class="pic">
                <img src="@/assets/images/topic1.png" alt="" />
                <div class="info">
                  <div class="left">
                    <h5>吃这些美食才不算辜负自己</h5>
                    <p>餐厨起居洗护好物</p>
                  </div>
                  <div class="right">¥<span>29.9</span>起</div>
                </div>
              </div>
              <div class="txt">
                <div class="left">
                  <p>
                    <span class="iconfont icon-favorites-fill red"></span>
                    <i>1200</i>
                  </p>
                  <p>
                    <span class="iconfont icon-browse"></span>
                    <i>1800</i>
                  </p>
                </div>
                <div class="right">
                  <span class="iconfont icon-comment"></span>
                  <i>246</i>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic">
                <img src="@/assets/images/topic2.png" alt="" />
                <div class="info">
                  <div class="left">
                    <h5>吃这些美食才不算辜负自己</h5>
                    <p>餐厨起居洗护好物</p>
                  </div>
                  <div class="right">¥<span>29.9</span>起</div>
                </div>
              </div>
              <div class="txt">
                <div class="left">
                  <p>
                    <span class="iconfont icon-fabulous"></span>
                    <i>1200</i>
                  </p>
                  <p>
                    <span class="iconfont icon-browse"></span>
                    <i>1800</i>
                  </p>
                </div>
                <div class="right">
                  <span class="iconfont icon-comment"></span>
                  <i>246</i>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic">
                <img src="@/assets/images/topic3.png" alt="" />
                <div class="info">
                  <div class="left">
                    <h5>吃这些美食才不算辜负自己</h5>
                    <p>餐厨起居洗护好物</p>
                  </div>
                  <div class="right">¥<span>29.9</span>起</div>
                </div>
              </div>
              <div class="txt">
                <div class="left">
                  <p>
                    <span class="iconfont icon-fabulous"></span>
                    <i>1200</i>
                  </p>
                  <p>
                    <span class="iconfont icon-browse"></span>
                    <i>1800</i>
                  </p>
                </div>
                <div class="right">
                  <span class="iconfont icon-comment"></span>
                  <i>246</i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 版权底部 -->
   <XtxFooter></XtxFooter>
  </div>
</template>

<script>
import XtxHeaderNav from './components/XtxHeaderNav.vue';
import XtxBanner from "./components/XtxBanner.vue"
export default {
  components: {
    XtxHeaderNav,
    XtxBanner
  }
}
</script>

<style></style>
