<template>
  <div class="operate-item">
      <slot>
      </slot>
      <span class="count">{{value}}万</span>
  </div>
</template>

<script>
export default {
    props:['value']
}
</script>

<style scoped>
    .operate-item{
        height: 70px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
    .count{
        color:#fff;
        font-size:12px;
    }
</style>