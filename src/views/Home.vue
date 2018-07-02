<template>
  <div class="bilibili">
    <Header>
      <Navigation :showHead="showHead"></Navigation>
    </Header>
    <Content class="sailor-wrapper">
      <router-view class="router-view"></router-view>
    </Content>
  </div>
</template>
<script>
import Navigation from '@/views/navigation/Navigation'
export default {
  name: 'Index',
  components: {
    Navigation // 导航
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
