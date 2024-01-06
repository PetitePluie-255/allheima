<template>
  <div>
    <div>尺寸</div>
    <EvaluationScore v-model="value1" size="small"></EvaluationScore>
    <EvaluationScore v-model="value2" size="medium"></EvaluationScore>
    <EvaluationScore v-model="value3" size="large"></EvaluationScore>
    <div>数量</div>
    <EvaluationScore v-model="value4" :max="10"></EvaluationScore>
    <EvaluationScore v-model="value5" :max="6"></EvaluationScore>
    <EvaluationScore v-model="value6" :max="5"></EvaluationScore>
  </div>
</template>

<script>
import EvaluationScore from "./components/EvaluationScore.vue";
export default {
  components: {
    EvaluationScore,
  },
  data(){
    return {
      value1:1,
      value2:1,
      value3:1,
      value4:10,
      value5:6,
      value6:5,
    }
  }
};
</script>

<style>
</style>