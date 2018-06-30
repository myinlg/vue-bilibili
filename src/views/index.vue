<template>
  <div class="bilibili">
    <Header>
      <HeaderNag :showHead="showHead"></HeaderNag>
    </Header>
    <Content class="sailor-wrapper">
      <router-view class="router-view"></router-view>
    </Content>
  </div>
</template>
<script>
import HeaderNag from '@/views/header/HeaderNag'
export default {
  name: 'Index',
  components: {
    HeaderNag // 导航
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
      this.showHead = scrolled < 150
    }
  }
}
</script>
<style lang="less" scoped>
@import url(~assets/css/index.less);
.bilibili {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    background-image: url(~assets/images/head_logo.png);
  }
  content {
    position: absolute;
    top: 200px;
    margin: 0 auto;
  }
}
</style>
