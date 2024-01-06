<template>
  <div class="app">
    <BaseCount 
    @changeCount="changeCountFn"
    @addCount="count=$event"
    :count="count"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components:{
    BaseCount
  },
  data(){
    return {
      count:100
    }
  },
  methods:{
    changeCountFn(num) {
      this.count = num
    }
  }
}
</script>

<style>

</style>