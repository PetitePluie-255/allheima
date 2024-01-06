<template>
  <div class="right-container">
    <PageHeader></PageHeader>
    <PageContent></PageContent>
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageContent from "./PageContent.vue";
export default {
  components: {
    PageHeader,
    PageContent,
  },
};
</script>

<style scoped>
.right-container {
  width: calc(100% - 160px);
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>