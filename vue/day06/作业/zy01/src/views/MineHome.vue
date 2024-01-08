<template>
  <div class="mine">
    <div class="img"></div>

    <div class="log-in">
        <div class="box">
        <div class="outside">
            <div class="inside"></div>
        </div>
        <p>游客</p>
        <div class="go-log-in"><a href="#">去登陆</a></div>
        </div>
    </div>

    <div class="grid-square">
        <a href="#">
            <span class="iconfont icon-xingxing"></span>
            <p>我的收藏</p>
        </a>
           <a href="#">
            <span class="iconfont icon-xingxing"></span>
            <p>我的收藏</p>
        </a>
           <a href="#">
            <span class="iconfont icon-xingxing"></span>
            <p>我的收藏</p>
        </a>
           <a href="#">
            <span class="iconfont icon-xingxing"></span>
            <p>我的收藏</p>
        </a>
           <a href="#">
            <span class="iconfont icon-xingxing"></span>
            <p>我的收藏</p>
        </a>
           <a href="#">
            <span class="iconfont icon-xingxing"></span>
            <p>我的收藏</p>
        </a>
    </div>


    <div class="picture">
        <img src="../assets/join.png" alt="">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mine {
    .img {
        width: 100%;
        height: 191px;
        background-image: url('../assets/bg.png');
        background-size: 100% 100%;
    }

    .log-in {
        position:absolute;
        left: 28px;
        top: 140px;
        width: 319px;
        height: 165px;
        margin: 0 auto;
        box-shadow: 0px 0px 10px 3px #ddd;
        background-color: #fff;
        .box {
            position: absolute;
            left: 125px;
            top: -30px;

       
        .outside {
            display: flex;
            justify-content: center;
            align-items: center;
    
            margin: 0 auto;
            margin-bottom: 20px;
            width: 70px;
            height: 70px;
            background-color: #fff;
            border-radius: 50%;

            .inside {
                
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-image: url('../assets/avatar.png');
                background-size: 100% 100%;
                
            }
        }

        p {
    
            margin-bottom: 20px;

            text-align: center;
            font-size: 13px;
        }

        .go-log-in {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;

            width: 69px;
            height: 30px;
            border-radius: 5px;
            background-color: #21b97a;

            a {
                color: #fff;
                font-size: 13px;
            }
        }

        }

    }

    .grid-square {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 116px;
        margin-bottom: 10px;
        width: 100%;
        height: 190px;
        background-color: #fff;

        a {
            text-align: center;
            width: 33.3%;

            .iconfont {
                font-size: 20px;

            }

            p {
                font-size: 13px;
                margin-top: 10px;
            }

        }
    }

    .picture {
        margin: 0 auto;
        width: 345px;
        height: 85px;

        img {
            width: 100%;
            height: 100%;
        }
    }

}

</style>