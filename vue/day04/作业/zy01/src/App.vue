<template>
  <div>
    <!-- <ZyList @show="showFn" @input="input" :value="list"></ZyList> -->
    <ZyList @show="showFn" :list="records"></ZyList>
    <ZyDetails @show="show" :obj="obj"></ZyDetails>
  </div>
</template>

<script>
import ZyList from "./components/ZyList.vue"
import ZyDetails from "./components/ZyDetails.vue"
export default {
  components: {
    ZyList,
    ZyDetails,
  },
  data() {
    return {
      records: [
        {
          date: "2022-01-01",
          doctor: "张三",
          diagnosis: "感冒",
          prescription: "感冒药",
        },
        {
          date: "2022-02-01",
          doctor: "李四",
          diagnosis: "头疼",
          prescription: "止疼药",
        },
        {
          date: "2022-03-01",
          doctor: "王五",
          diagnosis: "腰痛",
          prescription: "止痛贴",
        },
      ],
      obj: {
        flag: false,
      },
    }
  },
  methods: {
    showFn(obj) {
      console.log(this.obj)
      this.obj.name = obj.name
      this.obj.list = obj.arr.find(item=>item.doctor===obj.name)
      this.obj.flag = !this.obj.flag
    },
    show() {
      console.log(this.obj)
      this.obj.flag = !this.obj.flag
    },
  },
  mounted() {
    this.obj.list = this.records
    console.log(this.obj)
  },
}
</script>

<style></style>
