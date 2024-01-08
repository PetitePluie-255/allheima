<template>
  <div class="flat-hunting">
       <div class="search">
        <i class="iconfont icon-xiangzuojiantou"></i>
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

    <div class="filter-flexbox">
        <div class="query-area">
            <span >区域</span>
            <i class="iconfont icon-xiajiantou1"></i>
        </div>
         <div class="query-area">
            <span >方式</span>
            <i class="iconfont icon-xiajiantou1"></i>
        </div>
         <div class="query-area">
            <span >租金</span>
            <i class="iconfont icon-xiajiantou1"></i>
        </div>
         <div class="query-area">
            <span >筛选</span>
            <i class="iconfont icon-xiajiantou1"></i>
        </div>
    </div>

    <div class="housing-resource">
        <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>

        </div>
          <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
          <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
         <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
         <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
         <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
         <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
         <div class="housing-resource-list">
            <img src="../assets/微信图片_20230612205016.png" alt="">
            <div class="message">
                <h3>123456789</h3>
                <p>三室/123/东/徐汇一品苑</p>
                <div class="disposition">近地铁</div>
                <span>12345 </span>
                <i> 元/月</i>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.flat-hunting {
    padding-top: 45px;

    .search {
           display: flex;
           justify-content: space-between;
           align-items: center;
           position: absolute;
           left: 0;
           top: 0;
           z-index: 999;
           width: 100%;
           height: 45px;
           padding-left: 10px;
           padding-right: 10px;
           background-color: #f6f5f6;
   
           .search-box {
               display: flex;
               align-items:center;
               background-color: #fff;
               padding-left: 10px;
            
               width: 294px;
               height: 30px;
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
   
           .icon-xiangzuojiantou {
               margin-right: 10px;
               font-size: 16px;
               color: #999;
               font-weight: 700;
           }
   
           .icon-ditu1 {
               margin-left: 10px;
               font-size: 25px;
               color: #00ae66;
           }
       }

       
   .filter-flexbox {
    display: flex;
    border-bottom: 1px solid #ccc;
  
       width: 100%;
       height: 40px;


       .query-area {

            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
           span {
            margin-right: 5px;
            font-size: 17px;
         
           }
    
           .icon-xiajiantou1 {
            margin-top: 2px;
            color: #bbb;
            font-size: 12px;
           }
     
       }


       
   
   }
   .housing-resource {
        padding: 0 15px;
    .housing-resource-list {
        display: flex;  
           align-items: center;
            width: 100%;
            height: 120px;
            border-bottom: 1px solid #ccc;

        img {
            width: 106px;
            height: 80px;
        }
        .message {
            margin-left: 12px;
            h3 {
            font-size: 15px;
            color: #394043;
            margin-bottom: 7px;
            }
            p {
             font-size: 12px;
            color: #afb2b3;
            margin-bottom: 5px;

            }

            .disposition {
                text-align: center;
                line-height: 20px;
                width: 46px;
                height: 20px;
                font-size: 12px;
                color: #39becd;
                background: #e1f5f8;
            margin-bottom: 5px;

            }
            span {
                font-size: 16px;
                color: red;
            }
            i {
                font-size: 12px;
                color: #fa5741;
                            
            }
        }
    }

   }
}

</style>