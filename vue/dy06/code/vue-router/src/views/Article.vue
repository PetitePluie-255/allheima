<template>
  <div class="article-page">
    <div class="article-item" v-for="item in list" :key="item.id">
      <div class="head">
        <img :src="item.creatorAvatar" alt="" />
        <div class="con">
          <p class="title">{{item.stem}}</p>
          <p class="other">{{item.creatorName}} | {{item.createdAt}}</p>
        </div>
      </div>
      <div class="body" @click="$router.push(`/detail/${item.id}`)">
        {{item.content}}
      </div>
      <div class="foot">点赞 {{item.likeCount}} | 浏览 {{item.views}}</div>
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
import axios from "axios"
export default {
  name: "ArticlePage",
  data() {
    return {
      list: [],
    }
  },
  methods: {
    async getList() {
      const res = await axios("https://mock.boxuegu.com/mock/3083/articles")
      console.log(res.data)
      this.list = res.data.result.rows
    },
  },
  created() {
    this.getList()
  },
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
