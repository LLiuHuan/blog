<!--分页-->
<template>
  <div class="page-main">
    <!--    <div>共{{ total }}条</div>-->
    <!--    <button-->
    <!--        v-if="currentPage > 0"-->
    <!--        class="first"-->
    <!--        @click="First"-->
    <!--        v-bind:disabled="firstDisabled">-->
    <!--      <span v-if="firstText">{{ firstText }}</span>-->
    <!--      <i v-else class="iconfont icon-jiantou-shuangjiantouzuo-left"></i>-->
    <!--    </button>-->

    <button
        class="prev"
        @click="Prev"
        :disabled="prevDisabled"
        :aria-disabled="prevDisabled">
      <span v-if="prevText">{{ prevText }}</span>
      <i v-else class="iconfont icon-jiankuohaozuo"></i>
    </button>

    <ul>
      <!--      <li-->
      <!--          v-if="pageCount > 0"-->
      <!--          :class="{ active: currentPage === 1, disabled: true }"-->
      <!--          class="number"-->
      <!--          :aria-current="currentPage === 1"-->
      <!--          tabindex="0"-->
      <!--          @click="buttonPage(1)"-->
      <!--      >-->
      <!--        1-->
      <!--      </li>-->
      <!--      <li-->
      <!--          v-if="showPrevMore"-->
      <!--          style="padding-top: 6px;"-->
      <!--          class="iconfont more btn-quickprev"-->
      <!--          :class="[quickprevIconClass, { disabled: true }]"-->
      <!--          @mouseenter="onMouseenter('left')"-->
      <!--          @click="PrevMore"-->
      <!--      >-->
      <!--      </li>-->

      <li v-for="item in totalLis" @click="buttonPage(item)" :class="{active:currentPage===item}">{{ item }}</li>

      <!--      <li-->
      <!--          v-if="showNextMore"-->
      <!--          style="padding-top: 6px;"-->
      <!--          class="iconfont more btn-quicknext"-->
      <!--          :class="[quicknextIconClass, { disabled: true }]"-->
      <!--          @mouseenter="onMouseenter('right')"-->
      <!--          @click="NextMore"-->
      <!--      >-->
      <!--      </li>-->
      <!--      <li-->
      <!--          v-if="pageCount > 1"-->
      <!--          :class="{ active: currentPage === pageCount, disabled: true }"-->
      <!--          class="number"-->
      <!--          :aria-current="currentPage === pageCount"-->
      <!--          tabindex="0"-->
      <!--          @click="buttonPage(pageCount)"-->
      <!--      >-->
      <!--        {{ pageCount }}-->
      <!--      </li>-->
    </ul>

    <button
        class="next"
        @click="Next"
        :disabled="nextDisabled"
        :aria-disabled="nextDisabled">
      <span v-if="nextText">{{ nextText }}</span>
      <i v-else class="iconfont icon-jiankuohaoyou"></i>
    </button>

    <!--    <button-->
    <!--        v-if="currentPage < pageCount"-->
    <!--        class="last"-->
    <!--        @click="Last"-->
    <!--        :disabled="lastDisabled">-->
    <!--      <span v-if="lastText">{{ lastText }}</span>-->
    <!--      <i v-else class="iconfont icon-jiantou-shuangjiantouzuo-right"></i>-->
    <!--    </button>-->
    <!--    <input :value="value" @input="change"/>-->
    <!--    <button @click="just">跳转</button>-->
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, computed, ref, watchEffect} from 'vue'

export default defineComponent({
  name: "",
  props: {
    page: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    pagerCount: {
      type: Number,
      default: 7,
    },
    prevText: {
      type: String,
    },
    nextText: {
      type: String,
    },
    firstText: {
      type: String,
    },
    lastText: {
      type: String,
    }
  },
  setup(props) {
    const state = reactive({
      showPrevMore: ref(false), //
      showNextMore: ref(false), //
      // quicknextIconClass: ref('icon-shenglvehao'),
      // quickprevIconClass: ref('icon-shenglvehao'),
      currentPage: 1,//当前页
      pageCount: Math.ceil(props.total / props.pageSize),
    })

    // let showPrevMore = false
    // let showNextMore = false

    const buttonPage = (val: number) => {
      state.currentPage = val
    }

    const totalLis = computed(() => {
      const pagerCount = props.pagerCount
      // const halfPagerCount = (pagerCount - 1) / 2
      // const currentPage = Number(state.currentPage)
      const pageCount = Number(state.pageCount)
      //
      // let showPrevMore = false
      // let showNextMore = false
      // if (pageCount > pagerCount) {
      //   if (currentPage > pagerCount - halfPagerCount) {
      //     showPrevMore = true
      //   }
      //   if (currentPage < pageCount - halfPagerCount) {
      //     showNextMore = true
      //   }
      // }
      const array = []
      // if (showPrevMore && !showNextMore) {
      //   const startPage = pageCount - (pagerCount)
      //   for (let i = startPage; i < pageCount; i++) {
      //     array.push(i)
      //   }
      // } else if (!showPrevMore && showNextMore) {
      //   for (let i = 2; i < pagerCount; i++) {
      //     array.push(i)
      //   }
      // } else if (showPrevMore && showNextMore) {
      //   const offset = Math.floor(pagerCount / 2) - 1
      //   for (let i = currentPage - offset; i <= currentPage + offset; i++) {
      //     array.push(i)
      //   }
      // } else {
      //   for (let i = 2; i < pageCount; i++) {
      //     array.push(i)
      //   }
      // }
      // console.log(array)
      if (state.currentPage + pagerCount < pageCount) {
        console.log(1)
        for (let i = state.currentPage - 1; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (pagerCount - state.currentPage > pageCount) {
        console.log(11)
        for (let i = state.currentPage - 1; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (state.currentPage + pagerCount > pageCount) {
        console.log(2)

        for (let i = pageCount - pagerCount; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (pagerCount - state.currentPage < pagerCount) {
        console.log(3)

        for (let i = 1; i < pageCount; i++) {
          array.push(i)
        }
      } else {
        console.log(4)

        for (let i = 1; i < pageCount; i++) {
          array.push(i)
        }
      }

      return array
    })
    // 上一页
    const Next = () => {
      if (state.currentPage < state.pageCount) {
        buttonPage(state.currentPage + 1)
      }
    }
    const nextDisabled = computed(() => state.currentPage === state.pageCount
        || state.pageCount === 0,
    )

    // 下一页
    const Prev = () => {
      console.log(state.currentPage)

      if (state.currentPage > 1) {
        buttonPage(state.currentPage - 1)
      }
    }
    const prevDisabled = computed(() => state.currentPage === 1
        || state.pageCount === 0,
    )

    // 首页
    const First = () => {
      buttonPage(1)
    }
    const firstDisabled = computed(() => state.pageCount === 0)

    // 尾页
    const Last = () => {
      buttonPage(state.pageCount)
    }
    const lastDisabled = computed(() => state.pageCount === 0)

    const PrevMore = () => {
      if (state.currentPage - props.pagerCount < 1) {
        buttonPage(1)
      } else {
        buttonPage(state.currentPage - props.pagerCount)
      }
    }
    const NextMore = () => {
      console.log(state.currentPage + props.pagerCount, state.pageCount)
      console.log(state.currentPage + props.pagerCount > state.pageCount)
      if (state.currentPage + props.pagerCount > state.pageCount) {
        buttonPage(state.pageCount)
      } else {
        buttonPage(state.currentPage + props.pagerCount)
      }
    }

    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2

      state.showPrevMore = false
      state.showNextMore = false

      if (state.pageCount > props.pagerCount) {
        if (state.currentPage > props.pagerCount - halfPagerCount) {
          state.showPrevMore = true
        }
        if (state.currentPage < state.pageCount - halfPagerCount) {
          state.showNextMore = true
        }
      }
    })

    // watchEffect(() => {
    //   if (!state.showPrevMore) state.quickprevIconClass = 'icon-shenglvehao'
    // })
    // watchEffect(() => {
    //   if (!state.showNextMore) state.quicknextIconClass = 'icon-shenglvehao'
    // })

    // const onMouseenter = (direction: 'left' | 'right') => {
    //   if (direction === 'left') {
    //     state.quickprevIconClass = 'icon-jiantou-shuangjiantouzuo-left-copy'
    //   } else {
    //     state.quicknextIconClass = 'icon-jiantou-shuangjiantouzuo-right-copy'
    //   }
    // }

    // https://www.cnblogs.com/styleFeng/p/13322726.html
    return {
      ...toRefs(state),
      buttonPage,

      totalLis,
      Next,
      nextDisabled,
      Prev,
      prevDisabled,
      First,
      firstDisabled,
      Last,
      lastDisabled,

      PrevMore,
      NextMore,

      // onMouseenter,
    }
  }
})
</script>

<style scoped>
.page-main {
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 13px;
  font-weight: 700;
}

.page-main input {
  outline: none;
  padding: 0;
  margin: 0;
  border: 0;
  width: 40px;
  text-align: center;
  /*padding: 6px 10px;*/
  /*margin-left: 10px;*/
}

.page-main button {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background: transparent;
}

.page-main button:hover {
  color: #f12349;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  list-style: none;
  padding: 3px 15px;
  margin: 0 5px;
}

li:hover {
  color: #f12349;
}

.active {
  color: #f12349;
}

/*.icon-jiantou-shuangjiantouzuo-left-copy {*/
/*  color: #f12349;*/
/*}*/

/*.icon-jiantou-shuangjiantouzuo-right-copy {*/
/*  color: #f12349;*/
/*}*/
</style>