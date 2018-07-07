<template>
  <div class="nav-side">
    <div class="nav-list">
      <div class="item" v-for="(item,index) in menusList" :key="index">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavSide',
  data () {
    return {
      menusList: [
        { title: '动画', img: '', num: '999+', url: 'http://www.baidu.com' },
        { title: '番剧', img: '', num: '99', url: 'http://www.baidu.com' },
        { title: '国创', img: '', num: '122', url: 'http://www.baidu.com' },
        { title: '音乐', img: '', num: '144', url: 'http://www.baidu.com' },
        { title: '舞蹈', img: '', num: '123', url: 'http://www.baidu.com' },
        { title: '科技', img: '', num: '123', url: 'http://www.baidu.com' },
        { title: '生活', img: '', num: '534', url: '' },
        { title: '鬼畜', img: '', num: '154', url: '' },
        { title: '时尚', img: '', num: '52', url: '' },
        { title: '广告', img: '', num: '124', url: '' },
        { title: '娱乐', img: '', num: '72', url: '' },
        { title: '影视', img: '', num: '621', url: '' },
        { title: '放映厅', img: '', num: '213', url: '' },
        { title: '专栏', img: 'icon-column', url: '' },
        { title: '广场', img: 'icon-square', url: '' },
        { title: '直播', img: 'icon-live ', url: '' },
        { title: '小黑屋', img: 'icon-blackroom', url: '' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.nav-list {
  width: 50px;
  height: auto;
  font-size: 12px;
  background-color: #f6f9fa;
  border: 1px solid #e5e9ef;
  overflow: hidden;
  border-radius: 4px;
  > .item {
    height: 32px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #00aed6;
    }
  }
}
</style>
