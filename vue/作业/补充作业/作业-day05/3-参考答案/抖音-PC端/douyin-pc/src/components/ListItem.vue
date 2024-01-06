<template>
  <div class="list-item">
    <slot name="label"> </slot>
    <div class="content">
      <slot name="title"> </slot>
      <div class="info">
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.list-item {
  display: flex;
  padding: 12px 8px;
}
.content {
  display: flex;
  flex-direction: column;
  font-weight: 600;
}
.info{
  font-weight: 400;
}
</style>