<template>
  <ul class="menus-items">
    <li v-for="(item,index) in menusList" :key="index">
      <a :href="item.url" :key="index">
        <div></div>
        <div>{{item.title}}</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      menusList: [
        { title: '首页', img: '', url: 'http://www.baidu.com' },
        { title: '动画', img: '', url: 'http://www.baidu.com' },
        { title: '番剧', img: '', url: 'http://www.baidu.com' },
        { title: '国创', img: '', url: 'http://www.baidu.com' },
        { title: '音乐', img: '', url: 'http://www.baidu.com' },
        { title: '舞蹈', img: '', url: 'http://www.baidu.com' },
        { title: '科技', img: '', url: 'http://www.baidu.com' },
        { title: '生活', img: '', url: '' },
        { title: '鬼畜', img: '', url: '' },
        { title: '首页', img: '', url: '' },
        { title: '动画', img: '', url: '' },
        { title: '番剧', img: '', url: '' },
        { title: '国创', img: '', url: '' },
        { title: '音乐', img: '', url: '' },
        { title: '舞蹈', img: '', url: '' },
        { title: '科技', img: '', url: '' },
        { title: '生活', img: '', url: '' },
        { title: '鬼畜', img: '', url: '' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.menus-items {
  height: 100%;
  width: 90%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  .menu-size {
    height: 100%;
    width: 50px;
  }
  li {
    .menu-size;
    a {
      .menu-size;
      text-decoration: none;
      color: #232;
      font-size: 12px;
      display: block;
      padding: 7px;
      box-sizing: border-box;
      div {
        width: 100%;
        height: 18px;
        line-height: 18px;
        text-align: center;
      }
    }
  }
}
</style>
