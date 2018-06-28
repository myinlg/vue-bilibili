<template>
  <div class="Header">
     <el-row class="bg-animate">
        <el-col class="title" :span="6">
          <TextColorful></TextColorful>
        </el-col>
        <el-col class="input" :span="18">
          <el-input
              size="small"
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              v-model="input21">
          </el-input>
        </el-col>
     </el-row>
     <el-row class="menu-items">
       <MenuItems></MenuItems>
     </el-row>
     <el-row class="main-content">

     </el-row>
  </div>
</template>
<script>
import TextColorful from '@/views/header/TextColorful'
import MenuItems from '@/views/header/MenuItems'
export default {
  name: 'Header',
  components: {
    TextColorful,
    MenuItems
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.bg-animate {
  height: 150px;
  width: 100%;
  background-color: #dddddd;
  .title {
    height: 100%;
  }
  .input {
    height: 100%;
    .el-input {
      position: absolute;
      width: 300px;
      right: 200px;
      bottom: 20px;
      /deep/ .el-input__suffix {
        color: #00aed6;
        font-size: 18px;
      }
    }
  }
}
.menu-items {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: aqua;
}
</style>
