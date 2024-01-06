<template>
  <div class="box">
    <slot name="title"></slot>
    <ul>
      <slot name="body" :data="data"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
</style>