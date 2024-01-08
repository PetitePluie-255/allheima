<template>
  <div class="home-page">
    <div class="carousel-map">
          <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <img src="../assets/微信图片_20230612205016.png" alt="">
                    </div> 
                     <div class="swiper-slide" >
                        <img src="../assets/微信图片_20230612205030.png" alt="">
                    </div> 
                     <div class="swiper-slide" >
                        <img src="../assets/微信图片_20230612205036.png" alt="">
                    </div> 
                </div>
                <div class="swiper-pagination"></div>
            </div>
    </div>
        <!-- 搜素 -->
    <div class="search">
        <div class="search-box">
        <div class="location">
            <span>上海</span>
            <i class="iconfont icon-xiajiantou1"></i>
        </div>

        <div class="form">
            <i class="iconfont icon-chazhao"></i>
            <div class="span">请输入小区或地址</div>
        </div>
        </div>
        <i class="iconfont icon-ditu1"></i>
    </div>
 

    <div class="navigation">
        <a href="#">
            <img src="../assets/下载.png" alt="">
            <p>整租</p>
        </a>
         <a href="#">
            <img src="../assets/下载 (1).png" alt="">
            <p>合租</p>
        </a>
         <a href="#">
            <img src="../assets/下载 (2).png" alt="">
            <p>地图找房</p>
        </a>
         <a href="#">
            <img src="../assets/下载 (3).png" alt="">
            <p>去出租</p>
        </a>
    </div>

    <div class="group">
        <div class="group-title">
        <h3>租房小组</h3>
        <a href="#">更多</a>
        </div>

        <div class="group-grid">
            <div class="group-flexbox">
                <div class="left">
                <p>家住回龙观</p>
                <span>归属的感觉</span>
                </div>
                <div class="right">
                    <img src="../assets/1.png" alt="">
                </div>
            </div>
             <div class="group-flexbox">
                <div class="left">
                <p>宜居四五环</p>
                <span>大都市生活</span>
                </div>
                <div class="right">
                    <img src="../assets/2.png" alt="">
                </div>
            </div>
             <div class="group-flexbox">
                <div class="left">
                <p>喧嚣三里屯</p>
                <span>繁华的背后</span>
                </div>
                <div class="right">
                    <img src="../assets/3.png" alt="">
                </div>
            </div>
             <div class="group-flexbox">
                <div class="left">
                <p>比邻十号线</p>
                <span>地铁心连心</span>
                </div>
                <div class="right">
                    <img src="../assets/4.png" alt="">
                </div>
            </div>
        </div>
        
        
    </div>

    <div class="news">
        <h3>最新资讯</h3>
        <div class="am-wingblank">
            <div class="news-item">
                <img src="../assets/1 (1).png" alt="">
                <div class="right-news">
                    <h3>置业选择 | 安贞西里 三室一厅 河间的古雅别院</h3>
                    <div class="bottom">
                        <span>新华网</span>
                        <span>两天前</span>
                    </div>
                </div>

            </div>
        </div>
         <div class="am-wingblank">
            <div class="news-item">
                <img src="../assets/2 (1).png" alt="">
                <div class="right-news">
                    <h3>置业佳选 | 大理王宫 苍山洱海间的古雅别院</h3>
                    <div class="bottom">
                        <span>新华网</span>
                        <span>一周前</span>
                    </div>
                </div>

            </div>
        </div>
         <div class="am-wingblank">
            <div class="news-item">
                <img src="../assets/3 (1).png" alt="">
                <div class="right-news">
                    <h3>置业选择 | 安居小屋 花园洋房 清新别野</h3>
                    <div class="bottom">
                        <span>新华网</span>
                        <span>一周前</span>
                    </div>
                </div>

            </div>
        </div>



    </div>
    



  </div>
</template>

<script>
import Swiper from 'swiper'

import "swiper/dist/css/swiper.css"

export default {
    
    mounted(){
    this.swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 1500,
    autoplayDisableOnInteraction: false
    })
    }

}
</script>

<style lang="less" scoped>
.home-page {

    .carousel-map {
        width: 100%;
        height: 212px;

              .swiper-container {
            width: 100%;
            height: 100%;

            .swiper-slide {
                text-align: center;
                font-size: 4.8vw;
                background: #fff;
                
                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
            }

            .swiper-pagination-bullet {
                background-color: red;
            }
            
        }

    }

    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0;
        top: 25px;
        z-index: 999;
        width: 100%;
        height: 34px;
        padding-left: 20px;
        padding-right: 10px;

        .search-box {
            display: flex;
            align-items:center;
            background-color: #fff;
            padding-left: 10px;
         
            width: 310px;
            height: 100%;
            border-radius: 5px;

            .location {
                display: flex;
                align-items: center;
                width: 44px;
                margin-right: 10px;
                // background-color: skyblue;

                .icon-xiajiantou1 {
                    font-style: 12px;
                }
                span {
                    font-size: 14px;
                    line-height: 20px;
                }
            }


            .form {
                display: flex;
        
                border-left: 1px solid #ccc;
                padding-left: 10px;
                
                .icon-chazhao {
                    font-size: 15px;
                    color: #9c9fa1;
                }

                .span {
                    margin-left: 5px;
                    margin-top: 1px;
                    font-size: 13px;
                    color: #9c9fa1;

                }
            }
        }

        .icon-ditu1 {
            margin-left: 10px;
            font-size: 25px;
            color: #fff;
        }
    }


    .navigation {
        display: flex;
        align-items: center;
        width: 100%;
        height: 93px;
        background-color: #fff;
        a {
            width: 25%;
            text-align: center;

            img {
                width: 48px;
                height: 48px;

            }

            p {
                margin-top: 7px;
                font-size: 13px;
            }
        }
    }

    .group {
        width: 100%;
        height: 238px;
        background-color: #f6f5f6;

        .group-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            width: 100%;
            height: 50px;
   

            h3 {
                padding-left: 10px;
                font-size: 15px;
            }

            a {
                font-size: 14px;
                    color: #787d82;

            }

        }

        .group-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 10px;

            .group-flexbox {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 10px;
                width: 173px;
                height: 83px;
                background-color: #fff;

                .left {

                    p {
                        font-weight: 700;
                        font-size: 13px;
                        margin-bottom: 5px;
                        
                    }

                    span {
                        font-size: 12px;
                        color: #999;
                    }
                }

                .right {
                    img {
                        width: 55px;
                        height: 54px;
                    }
                }
            }
        }
    }

    .news {
        padding:15px;


        h3 {
            margin: 5px 0;
            font-size: 15px;
        }

        .news-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 120px;
            border-bottom: 1px solid #ccc;


            img {
                width: 120px;
                height: 90px;
            }

            .right-news {
                
                width: 197px;
                height: 90px;
                 
                 h3 {
                    font-size: 14px;
                    margin-bottom: 45px;
                 }

                 .bottom {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    span {
                        font-size: 12px;
                    }
                 }
            }

        }
    }


}

</style>