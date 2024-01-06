<template>
  <div class="my-modal" v-if="value">
    <div class="modal-content">
      <p>{{title}}</p>
      <div class="btn-wrap">
      <MyButton value='确定' type='primary' @click="isOK"></MyButton>
      <MyButton value='取消' @click="closeDialog"></MyButton>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:Boolean,
      default:false
    },
    title:{
      type:String,
      default:'确认关闭吗？'
    }
  },
  methods:{
    isOK(){
      this.$emit('isOK')
    },
    closeDialog(){
      this.$emit('input',false)
    }
  }
};
</script>

<style scoped>
.my-modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 8px;
}

.btn-wrap{
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>