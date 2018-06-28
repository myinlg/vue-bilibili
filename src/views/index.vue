<script>
import HeaderNag  from '@/views/header/HeaderNag'
export default {
  name: 'Index',
  components: {
    HeaderNag, //导航
  }
};
</script>
<template>
  <div>
    <Header>
      <HeaderNag></HeaderNag>
    </Header>
    <Content>
      <router-view class="router-view"></router-view>
    </Content>
  </div>
</template>
<style lang="less" scoped>
.k-layout-header {
  // height: 46px;
  // line-height: 46px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background: #e9eef4;
}

.k-layout-content {
  height: calc(~'100vh - 60px');
  .router-view {
    height: 100%;
  }
}
</style>
