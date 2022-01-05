<!--关于作者-->
<template>
  <div class="about_author">
    <div class="about_img">
      <img src="https://q.qlogo.cn/g?b=qq&amp;nk=792444739&amp;s=100">
    </div>
    <div class="about_info">
      <div class="about_name">凡涛</div>

      <div class="about_excerpt">
        如果你懂我的奇奇怪怪
      </div>

    </div>
    <div class="about_shang">
      <span onclick="reward()" class="shang_btn"><i class="iconfont icon-qianbao"></i>赞赏</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseAbout",
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>