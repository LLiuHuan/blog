<template>
  <div class="content content_top">
    <base-article />
    <base-about />
    <base-comment />
    <base-popular />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BaseArticle from '@/components/BaseArticle.vue';
  import BaseAbout from '@/components/BaseAboutAuthor.vue';
  import BaseComment from '@/components/BaseComment.vue';
  import BasePopular from '@/components/BasePopular.vue';

  export default defineComponent({
    name: 'Article',
    components: {
      BaseArticle,
      BaseAbout,
      BaseComment,
      BasePopular,
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
