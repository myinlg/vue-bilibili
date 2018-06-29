<template>
  <div>
    <Header>
      <!-- <transition name="slide-fade"> -->
        <!-- <p v-if="show">hello</p> -->
        <HeaderNag :showHead="showHead"></HeaderNag>
      <!-- </transition> -->
    </Header>
    <Content>
      <router-view class="router-view"></router-view>
    </Content>
  </div>
</template>
<script>
import HeaderNag  from '@/views/header/HeaderNag'
export default {
  name: 'Index',
  components: {
    HeaderNag , //导航
  },
  data () {
    return {
      showHead: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      let scrolled = window.scrollY
      this.showHead = scrolled < 150 ? true : false;
    }
  }
};
</script>
<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: auto;
}
content {
  position: absolute;
  top: 200px;
  width: 100%;
  height: 100%;
}
</style>
