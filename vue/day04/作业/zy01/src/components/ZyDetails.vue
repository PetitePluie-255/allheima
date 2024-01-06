<template>
  <div class="modal-mask" v-show="obj.flag">
    <div class="modal-container">
      <div class="modal-header">
        <h3>就诊记录详情</h3>
        <span class="close-btn" @click="$emit('show')">X</span>
      </div>
      <div class="modal-body">
        <p><strong>就诊日期：</strong>{{obj.list.date}}</p>
        <p><strong>医生姓名：</strong>{{obj.list.doctor}}</p>
        <p><strong>诊断结果：</strong>{{obj.list.diagnosis}}</p>
        <p><strong>处方信息：</strong>{{obj.list.prescription}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: this.obj.list,
    }
  },
  props: ["obj"],
  watch: {
    obj: {
      deep: true,
      handler(val) {
        console.log(val);
        this.flag = val
      },
    },
  },
}
</script>

<style scoped>
.hidden {
  display: none !important;
}
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  cursor: pointer;
}
</style>
