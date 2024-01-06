// 接口地址：http://cba.itlike.com/public/index.php?s=/api/page/detail
// 请求方式：get

const app = new Vue({
  el: "#app",
  data: {
    swiperList: [], // 轮播数据
    navList: [], // 导航数据
    goodsList: [], // 商品数据
  },
  async created() {
    const res = await axios.get("http://cba.itlike.com/public/index.php?s=/api/page/detail")
    const data = res.data.data.pageData.items
    console.log(data);
    this.swiperList=data.find(item => item.name === '图片轮播').data
    this.navList = data.find((item) => item.name === "导航组").data
    this.goodsList = data.find((item) => item.name === "商品组").data
  },
  mounted() {
    // swiper初始化代码（思考：在Vue中应该在哪里初始化）
    const mySwiper = new Swiper(".swiper", {
      speed: 1000,
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      centeredSlides: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      observerUpdate: true,
    })
  },
})
