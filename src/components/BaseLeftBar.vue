<template>
  <div
    class="post_leftbar"
    style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px"
  >
    <div
      class="theiaStickySidebar"
      style="padding-top: 0; padding-bottom: 0; position: static; transform: none"
    >
      <ul class="post_leftbar_ul">
        <li class="post_leftbar_li">
          <button class="post_leftbar_zan" onclick="reward()"
            ><i class="iconfont icon-qianbao"></i
          ></button>
        </li>
        <li class="post_leftbar_li">
          <button class="post_leftbar_dashang" onclick="weixin()"
            ><i class="iconfont icon-weixin"></i
          ></button>
        </li>
        <li class="post_leftbar_li"
          ><a href="#comments">
            <button class="post_leftbar_liuyan"><i class="iconfont icon-liuyan"></i></button> </a
        ></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'BaseLeftBar',
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
