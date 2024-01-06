<template>
  <div>
    <div class="main">
      <div class="head">
        <TaBoot>
          <template v-slot:head>
            <p>本周热搜 TOP5</p>
          </template>
        </TaBoot>
      </div>

      <ul>
        <TaBoot>
          <template v-slot:body>
            <li>#区块链<span>96</span></li>

            <li>#数据挖掘<span>96</span></li>

            <li>#无人机<span>96</span></li>

            <li>#生命科学<span>96</span></li>

            <li>#传感器<span>96</span></li>
          </template>
        </TaBoot>
      </ul>
    </div>

    <div class="listmain">
      <div class="head">
        <TaBoot>
          <template v-slot:head>
            <p>可能感兴趣的人</p>
          </template>
        </TaBoot>
      </div>

      <ul>
        <TaBoot>
          <template v-slot:body>
            <li>
              <div>
                <span>程殷</span>
                <div>研究领域：人工智能</div>

                <div>哈尔滨工业大学 副教授</div>
              </div>
            </li>

            <li>
              <div>
                <span>程殷</span>
                <div>研究领域：人工智能</div>

                <div>哈尔滨工业大学 副教授</div>
              </div>
            </li>
          </template>
        </TaBoot>
      </ul>
    </div>
  </div>
</template>

<script>
import TaBoot from "./components/TaBoot"
export default {
  components: {
    TaBoot,
  },
  methods: {},
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #e5e7e8;
}
.main {
  width: 300px;
  height: 400px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  .head {
    width: 300px;
    border-radius: 15px;
    height: 50px;
    background-color: #00a1ff;
    p {
      margin-left: 15px;
      text-align: left;
      line-height: 50px;
      font-size: 19px;
      font-weight: 700;
      color: white;
    }
  }
}

.main ul li > div {
  height: 100px;
}
.main ul {
  padding: 0 20px;
  li {
    display: flex;
    justify-content: space-between;
    width: 230px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #c6c6c6;
    color: rgb(51, 51, 51);
  }
}

.listmain {
  width: 300px;
  height: 400px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;

  .head {
    width: 300px;
    border-radius: 15px;
    height: 50px;
    background-color: #00a1ff;
    p {
      margin-left: 15px;
      text-align: left;
      line-height: 50px;
      font-size: 19px;
      font-weight: 700;
      color: white;
    }
  }

  ul {
    padding: 0 20px;
    li {
      display: flex;
      padding: 10px 0 5px 0;
      width: 230px;
      // line-height: 60px;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid #c6c6c6;
      color: rgb(51, 51, 51);
      span{
        // float: right;
        font-size: 20px;
        font-weight: bold;
      }
      div {
        // float: left;
        padding: 5px 0;
      }
    }
  }
}
</style>
