<template>
  <div>
    <el-row class="test" v-for="index in 20" :key="index"></el-row>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
@color: #aed123;
.test {
  margin: 10px;
  height: 200px;
  background-color: @color;
}
</style>
