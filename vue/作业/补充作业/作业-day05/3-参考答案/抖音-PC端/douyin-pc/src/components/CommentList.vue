<template>
  <div class="comment-list">
    <div class="header">
      <span class="header-item">评论</span>
      <i class="close" @click="close">X</i>
    </div>
    <div class="total">全部评论({{ commentList.length }})</div>
    <div class="list-view">
      <ListItem v-for="item in commentList" :key="item.id">
        <template #label>
          <img class="avtar" :src="item.avtar" alt="" />
        </template>
        <template #title>
          <div class="title">{{ item.user }}</div>
        </template>
        <template>
          <p class="comment">{{ item.comment }}</p>
          <p class="tip">{{ item.time }}天前·{{ item.address }}</p>
          <p class="operate">
          <span class="opetate-item"
            ><img src="../assets/comment_s.png" alt="" /> 回复</span
          >
          <span class="opetate-item"
            ><img src="../assets/forword_s.png" alt="" /> 回复</span
          >
          <span class="opetate-item"
            ><img src="../assets/like_s.png" alt="" />
            {{ item.likeCount }}</span
          >
        </p>
        </template>
      </ListItem>
    </div>
  </div>
</template>

<script>
import { commentList } from "../mock";
export default {
  components: {
  },
  data() {
    return {
      commentList,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.comment-list {
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle, #2f2d29, #24211e);
}
.header {
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.header-item {
  height: 100%;
  border-bottom: 4px solid rgb(239, 52, 88);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 24px;
  color: #fff;
}
.close {
  position: absolute;
  right: 18px;
  top: 18px;
  color: #fff;
  font-style: normal;
  cursor: pointer;
}
.total {
  color: #fff;
  margin: 4px 8px;
  font-size: 14px;
}
.list-view {
  flex: 1;
  overflow: auto;
}
::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.16);
  border-radius: 4px;
  transition: all 1s;
  width: 16px;
}

.avtar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 12px;
}
.title {
  color: rgb(133, 133, 133);
  font-size: 12px;
  margin-bottom: 12px;
}
.comment {
  color: rgb(255, 255, 255, 0.9);
  font-size: 13px;
  font-weight: 400;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.tip {
  color: #707070;
  font-size: 12px;
  margin-top: 8px;
}
.operate {
  color: #707070;
  font-size: 12px;
  margin: 12px 0;
}
.opetate-item {
  margin-right: 12px;
}
.operate img {
  vertical-align: bottom;
}
</style>