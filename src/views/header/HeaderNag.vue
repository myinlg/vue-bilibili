<template>
  <div class="header" :class="[showHead ? 'slide-down':'slide-up']">
    <el-row class="bg-animate">
      <el-col class="title" :span="6">
        <TextColorful></TextColorful>
      </el-col>
      <el-col class="input" :span="18">
        <el-input
            size="small"
            :placeholder="showHead"
            suffix-icon="el-icon-search"
            >
        </el-input>
      </el-col>
    </el-row>
    <el-row class="menu-items">
      <MenuItems></MenuItems>
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
  props: {
    showHead: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
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
}
/*平滑效果*/
@animate-style: top 0.5s cubic-bezier(0.17, 0.04, 0.03, 0.94);
.slide-up {
  -webkit-transition: @animate-style;
  transition: @animate-style;
  top: -150px !important;
}
.slide-down {
  -webkit-transition: @animate-style;
  transition: @animate-style;
}
</style>
