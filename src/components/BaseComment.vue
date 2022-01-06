<!--评论-->
<template>
  <div class="pinglun">
    <div id="comments" class="gen">
      <div class="comments_off">评论已关闭</div>

      <div class="comments_lie">
        <div class="comments_number"
          ><span class="comments_number_box"
            ><span>评论 <small>( 4 )</small></span></span
          ></div
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseComment',
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
