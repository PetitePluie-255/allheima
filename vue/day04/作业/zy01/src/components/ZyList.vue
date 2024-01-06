<template>
  <div>
    <input @change="search" placeholder="输入关键字搜索" v-model="username">
    <table class="my-table">
      <thead>
        <tr>
          <th>就诊日期</th>
          <th>医生姓名</th>
          <th>诊断结果</th>
          <th>处方信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in arr" :key="index">
          <td>{{item.date}}</td>
          <td>{{item.doctor}}</td>
          <td>{{item.diagnosis}}</td>
          <td>{{item.prescription}}</td>
          <td :style="{cursor:'pointer'}" @click="show(item.doctor)">详情</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default{
  data(){
    return {
      arr:this.list,
      username:''
    }
  },
  props:['list'],
  methods:{
    show(name){
      this.$emit('show',{name,arr:this.arr})
    },
    search(){
      if(this.username){
        this.arr=this.list.filter(item=>item.doctor===this.username)
      } else {
        this.arr=this.list
      }
    }
  }
}
</script>

<style scoped>
  .my-table {
    border-collapse: collapse;
    width: 100%;
  }

  .my-table td, .my-table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .my-table th {
    background-color: #f2f2f2;
  }
</style>
