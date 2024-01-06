<template>
  <div class="page-content">
    <div class="video-content">
      <video
        width="100%"
        height="100%"
        ref="video"
        controls
        preload="auto"
        type="video/mp4"
      >
        <source src="../assets/douyin.mp4" />
      </video>
      <div class="introduce">
        <div class="user">@黑马程序员</div>
        <div class="title">1024程序员节到底加班不加班</div>
      </div>
      <div class="operate">
        <div class="avtar"></div>
        <OperateItem v-model="videoInfo.like">
            <img src="../assets/like.png" alt="">
        </OperateItem>
        <OperateItem v-model="videoInfo.comment" @click.native="showComment=true">
            <img src="../assets/comment.png" alt="">
        </OperateItem>
        <OperateItem v-model="videoInfo.collect">
            <img src="../assets/collect.png" alt="">
        </OperateItem>
        <OperateItem v-model="videoInfo.forword">
            <img src="../assets/forword.png" alt="">
        </OperateItem>
      </div>
    </div>
    <CommentList v-show="showComment" @close="showComment=false"></CommentList>
  </div>
</template>

<script>
import CommentList from "./CommentList.vue";
import OperateItem from "./OperateItem.vue";
export default {
  components: {
    CommentList,
    OperateItem,
  },
  data() {
    return {
      showComment: false,
      videoInfo:{
          like:117.2,
          comment:23.7,
          collect:31.5,
          forword:35.5
      }
    };
  },
  mounted() {
    setInterval(() => {
      if (this.$refs.video && !this.$refs.video.paused) {
        this.$refs.video.pause();
        this.$refs.video.play();
      }
    }, 1000);
  }
};
</script>

<style scoped>
.page-content {
  flex: 1;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  margin: 0px 48px 24px 24px;
  box-sizing: border-box;
  display: flex;
}
.video-content {
  flex: 1;
  position: relative;
}
.page-content video {
  background: radial-gradient(
    circle at center,
    white,
    rgba(255, 255, 255, 0.3)
  );
}
.introduce {
  color: #fff;
  width: 100%;
  height: auto;
  position: absolute;
  left: 16px;
  bottom: 60px;
  height: 48px;
}
.introduce .user {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
}
.introduce .title {
  font-size: 16px;
  width: 100%;
}
.operate {
  width: 50px;
  height: 400px;
  position: absolute;
  right: 20px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.avtar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("../assets/avtar.jpeg") no-repeat center/cover;
}
</style>