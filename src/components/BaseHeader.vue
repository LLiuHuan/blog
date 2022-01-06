<!--头部栏-->
<template>
  <header id="header">
    <div class="h_box">
      <div class="content content_ba">
        <div class="h_frame">
          <div class="h_logo">
            <router-link to="/">
              <img
                class="h_avatar h_radian"
                src="https://img-1255836911.cos.ap-guangzhou.myqcloud.com/i.png"
                alt=""
              />
            </router-link>
          </div>
          <div class="h_links">
            <a href="/" title="微博" target="_blank"><i class="iconfont icon-weibo1"></i></a>
            <a href="/" title="Github" target="_blank"><i class="iconfont icon-GitHub"></i></a>
            <a href="/" title="QQ" target="_blank"><i class="iconfont icon-qq"></i></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseHeader',
    setup() {
      // const state = reactive({});
      return {};
    },
  });
</script>

<style scoped></style>
