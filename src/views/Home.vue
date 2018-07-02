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
      let scrolled = window.pageYOffset||document.documentElement.scrollTop; //兼容IE8
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
  display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
  display: -moz-box; /* Firefox 17- */
  display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
  display: -moz-flex; /* Firefox 18+ */
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;
    background-image: url(~assets/images/head_logo.png);
  }
  content {
    position: relative;
    margin: 200px auto 0;
    height: auto;
  }
}
</style>
