<template>
  <div>
    <NavigationItem
      v-for="item in navList"
      :key="item.index"
      :index="item.index"
      :active="active"
    >
      {{ item.name }}
    </NavigationItem>
  </div>
</template>

<script>
import NavigationItem from "./NavigationItem.vue";
export default {
  components: {
    NavigationItem,
  },
  data() {
    return {
      navList: [
        {
          name: "首页",
          index: 0,
        },
        {
          name: "推荐",
          index: 1,
        },
        {
          name: "关注",
          index: 2,
        },
        {
          name: "朋友",
          index: 3,
        },
        {
          name: "我的",
          index: 15,
        },
        {
          name: "",
        },
        {
          name: "直播",
          index: 4,
        },
        {
          name: "放映厅",
          index: 5,
        },
        {
          name: "知识",
          index: 8,
        },
        {
          name: "热点",
          index: 6,
        },
        {
          name: "游戏",
          index: 10,
        },
        {
          name: "娱乐",
          index: 7,
        },
        {
          name: "二次元",
          index: 9,
        },
        {
          name: "音乐",
          index: 14,
        },
        {
          name: "美食",
          index: 11,
        },
        {
          name: "体育",
          index: 12,
        },
        {
          name: "时尚",
          index: 13,
        },
        {
          name: "",
        },
        {
          name: "业务合作",
          index: 16,
        },
      ],
      active:1
    };
  },
};
</script>

<style>
</style>