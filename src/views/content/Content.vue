<template>
  <div class="content">
    <el-row class="content-top">
      <div class="shuffling-panel">
        <Shuffling></Shuffling>
      </div>
      <div class="recommend-module">
        <ImgModule></ImgModule>
      </div>
    </el-row>
    <el-row class="home-page">
      <ContentPopularize></ContentPopularize>
    </el-row>
  </div>
</template>

<script>
import Shuffling from '@/components/shuffling/Shuffling'
import ImgModule from '@/components/ImgModule'
import ContentPopularize from './ContentPopularize'
export default {
  name: 'Content',
  components: {
    Shuffling,
    ImgModule,
    ContentPopularize
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.content-top {
  width: 100%;
  height: 220px;
  display: flex;
  margin-bottom: 30px;
  .shuffling-panel {
    width: 440px;
    height: 100%;
    margin-right: 20px;
    border-radius: 5px;
    overflow: hidden;
  }
  .recommend-module {
    flex: 1;
    height: 100%;
  }
}
</style>
