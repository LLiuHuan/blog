<template>
  <BaseHeader/>
  <BaseNavigation v-model="current" :data="data" :info="info" />
  <router-view></router-view>
  <BaseFooter></BaseFooter>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, watch} from 'vue'

import BaseHeader from '../components/BaseHeader.vue'
import BaseNavigation from "../components/BaseNavigation.vue";
import BaseFooter from "../components/BaseFooter.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "",
  components: {
    BaseHeader,
    BaseNavigation,
    BaseFooter
  },
  setup() {
    const state = reactive({
      current: 'home',
      data: [{
        key: 'home',
        value: '首页',
        url: '/'
      }, {
        key: 'dynamic',
        value: '动态',
        url: '/dynamic'
      }, {
        key: 'archives',
        value: '归档',
        url: '/archives'
      }, {
        key: 'links',
        value: '友链',
        url: '/links'
      }, {
        key: 'about',
        value: '关于',
        url: '/about'
      }],
      info: {
        title: '象笔记',
        image: 'https://img-1255836911.cos.ap-guangzhou.myqcloud.com/i.png'
      }
    })

    const router = useRouter()

    watch(() => state.current, (val) => {
      router.push({name: val})
    })

    return {
      ...toRefs(state),
    }
  }
})
</script>

<style scoped>

</style>