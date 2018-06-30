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
    <el-row class="test" v-for="index in 20" :key="index"></el-row>
  </div>
</template>

<script>
import Shuffling from '@/components/Shuffling'
import ImgModule from '@/components/ImgModule'
export default {
  name: 'Content',
  components: {
    Shuffling,
    ImgModule
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
  .shuffling-panel {
    width: 420px;
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
