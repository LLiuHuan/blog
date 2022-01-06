<template>
  <div class="p-7">12</div>
  <div class="content content_top">
    <div class="main">
      <!--文章列表-->
      <!--小图-->
      <article class="main_sm_list">
        <div class="main_sm_right">
          <h2 class="main_sm_title">
            <router-link :to="{ name: 'article', query: { id: 123 } }"
              ><span class="index_top">置顶</span>我在干嘛</router-link
            >
          </h2>
          <div class="main_sm_time"
            >In <span><a href="https://fasxx.com/category/xinqing/">心情</a></span> at
            <time datetime="2021-06-20T23:22:00+08:00">2021-06-20</time>
          </div>
          <div class="main_sm_excerpt">
            最近工作比较忙也很久没打理博客了今天呢闲着没事把之前的文章都删了反正就是写了又删
            删了又写生命的乐趣不就在于折腾吗
          </div>

          <div class="main_sm_foot">
            <span class="more"
              ><a href="https://fasxx.com/405/.html">Read more</a>
              <i class="iconfont icon-arrdown"></i
            ></span>
            <span class="liuyan"><i class="iconfont icon-comment"></i> 4</span>
          </div>
        </div>
      </article>
      <!--大图-->
      <article v-for="i in t1" class="main_bg_list" :key="i">
        <div class="main_bg_info">
          <div class="main_bg_time">
            <div class="main_bg_day">20</div>
            <div class="main_bg_mon">Jul</div>
          </div>

          <div class="main_bg_post">
            <h2 class="main_bg_title"
              ><a href="https://fasxx.com/415/.html">如果你懂我的奇奇怪怪</a></h2
            >

            <div class="main_bg_excerpt"> 那你一定可可爱爱 </div>

            <div class="main_bg_foot">
              <span class="more"
                ><a href="https://fasxx.com/415/.html">Read more</a>
                <i class="iconfont icon-arrdown"></i
              ></span>
              <span class="liuyan"><i class="iconfont icon-comment"></i> 0</span>
            </div>
          </div>
        </div>
      </article>
      <!--      <span>加载中。。</span>-->
      <!--文章列表结束-->
    </div>

    <!--    <base-pagination :total="total" :pagerCount="t"></base-pagination>-->
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    name: 'Dashboard',
    components: {},
    setup() {
      const state = reactive({
        total: 100,
        t: 2,
        t1: 10,
        available: 1,
      });

      const handleScroll = () => {
        // 获取滚轮位置
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let height1 = scrollTop;
        // 文档高度
        let height2 = document.body.scrollHeight;
        // 可视区域
        let height3 =
          document.compatMode == 'CSS1Compat'
            ? document.documentElement.clientHeight
            : document.body.clientHeight;

        console.log(scrollTop, height1, height2, height3);
        // 如果滚动到最低（这里设置离最底还有100距离才触发函数）
        // available条件是为了防止触底时一直不断地请求。因此，请求一次后available设为0，直到滚动到离底部超过100距离（即数据加载玩后）才设为1
        if (height3 + height1 >= height2 - 100 && state.available) {
          //请求下一页
          console.log('翻页');
          state.available = 0;
          state.t1 = state.t1 + 10;
        } else if (height3 + height1 < height2 - 100) {
          state.available = 1;
        }
      };

      // 用来监听滚轮
      window.addEventListener('scroll', handleScroll);

      return {
        ...toRefs(state),
      };
    },
  });
</script>

<style scoped></style>
