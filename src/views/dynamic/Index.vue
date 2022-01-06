<template>
  <base-comments />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BaseComments from '@/components/BaseComments.vue';
  export default defineComponent({
    name: 'Dynamic',
    components: {
      BaseComments,
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
