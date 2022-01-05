<!--文章底部分享-->
<template>
  <div class="post_tool">
    <div class="post_tool_zan">
      <button class="zan_btn " type="button" id="agree-btn" data-cid="405" data-url="https://fasxx.com/405/.html">
        Enjoy<i class="agree-num">13</i></button>
    </div>

    <div class="post_share">
      <a class="weibo"
         href="//service.weibo.com/share/share.php?url=https://fasxx.com/405/.html&amp;type=button&amp;language=zh_cn&amp;title=我在干嘛"
         target="_blank"><i class="iconfont icon-weibo1"></i></a>
      <a class="ttww" href="https://twitter.com/intent/tweet?url=https://fasxx.com/405/.html" target="_blank"><i
          class="iconfont icon-GitHub"></i></a>
      <a class="kongjiang"
         href="https://connect.qq.com/widget/shareqq/index.html?url=https://fasxx.com/405/.html&amp;title=我在干嘛"
         target="_blank"><i class="iconfont icon-qq"></i></a>
      <a class="weixin" onclick="weixin()" href="javascript:;"><i class="iconfont icon-weixin"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "BaseTool",
  setup() {
    return {

    }
  }
})
</script>

<style scoped>

</style>