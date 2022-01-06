<!--导航条-->

<template>
  <div id="navigation" class="meun content content_ba">
    <div class="meun_nav">
      <div class="title">
        <router-link to="/">{{ info.title }}</router-link>
      </div>
      <div class="app_logo">
        <router-link to="/">
          <img :src="info.image" :alt="info.title" />
        </router-link>
      </div>
      <div class="meun_list">
        <ul class="meun_ul">
          <li
            v-for="val in data"
            class="meun_li"
            :class="{ current: modelValue === val.key }"
            :key="val.key"
          >
            <router-link v-if="val.url" :to="val.url" @click="setCurrent(val.key)">
              {{ val.value }}
            </router-link>
          </li>
        </ul>
        <div class="search_btn" @click="mobile_open = true"
          ><i class="iconfont icon-caidan"></i
        ></div>
        <!--          <div class="search_bnt" onclick="search_show()"><i class="iconfont icon-sousuo1"></i></div>-->
      </div>
    </div>
  </div>

  <div class="pjax_in">
    <div class="mobile" :class="{ mobile_open: mobile_open }">
      <div class="mobile_info">
        <div class="mobile_img">
          <img :src="info.image" :alt="info.title" />
        </div>
        <div class="mobile_name">{{ info.title }}</div>
      </div>

      <div class="mobile_meun">
        <ul class="mobile_ul">
          <li v-for="val in data" class="mobile_li" :key="val.key">
            <router-link :to="val.url" @click="setCurrent(val.key)">
              {{ val.value }}<span v-if="modelValue === val.key" class="h_spot"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--磨砂背景-->
    <div
      @click="mobile_open = false"
      class="sap_mask mobile_mask"
      :class="{ sap_open: mobile_open }"
    ></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue';

  export default defineComponent({
    name: 'BaseNavigation',
    props: {
      modelValue: {
        type: String,
        default: 'home',
      },
      data: {
        type: Array,
        default: () => [{ key: 'home', value: '首页' }],
      },
      info: {
        type: Object,
      },
    },
    emits: ['update:modelValue'],
    setup(_, context) {
      const setCurrent = (val: string) => {
        context.emit('update:modelValue', val);
        state.mobile_open = false;
      };

      const state = reactive({
        mobile_open: ref(false),
      });

      return {
        setCurrent,
        ...toRefs(state),
      };
    },
  });
</script>

<style scoped></style>
