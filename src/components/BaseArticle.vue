<!--文章-->
<template>
  <article style="transform: none">
    <!--无图样式-->
    <div class="post_not">
      <h1 class="post_not_title">我在干嘛</h1>
      <div class="post_not_info">
        <span><a href="https://fasxx.com/category/xinqing/">心情</a></span
        ><i class="iconfont icon-xiegangxian"></i
        ><span
          ><time datetime="2021-06-20T23:22:00+08:00">2021-06-20</time
          ><i class="iconfont icon-xiegangxian"></i><span>56 字</span>
        </span></div
      >
    </div>

    <div class="post_bar" style="transform: none">
      <base-left-bar />
      <div id="toc_container" style="transform: none">
        <div
          class="toc_container"
          style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px"
        >
          <div
            class="theiaStickySidebar"
            style="padding-top: 0px; padding-bottom: 0px; position: static; transform: none"
          >
            <div id="TOC-text" class="TOC-text toc"></div>
          </div>
        </div>
      </div>
      <div
        class="post_conter"
        style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px"
      >
        <div
          class="theiaStickySidebar"
          style="padding-top: 0px; padding-bottom: 0px; position: static; transform: none"
        >
          <div class="song post">
            <p>最近工作比较忙</p>
            <p>也很久没打理博客了</p>
            <p>今天呢闲着没事</p>
            <p>把之前的文章都删了</p>
            <p>反正就是写了又删 删了又写</p>
            <p>生命的乐趣不就在于折腾吗</p></div
          >
        </div>
      </div>
    </div>
    <div class="post_tags"></div>
    <base-tool />
  </article>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import BaseLeftBar from './BaseLeftBar.vue';
  import BaseTool from './BaseTool.vue';
  export default defineComponent({
    name: 'BaseArticle',
    components: {
      BaseLeftBar,
      BaseTool,
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
