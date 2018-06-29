<template>
  <ul class="menus-items">
    <li v-for="(item,index) in menusList" :key="index">
      <a :href="item.url">
        <div></div>
        <div>{{item.title}}</div>
      </a>
      <ul class="sub-nav">
        <li v-for="(subItem,sub_index) in item.children" :key="sub_index">
          <a :href="subItem.url">{{subItem.title}}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      menusList: [
        { title: '首页', img: '', url: 'http://www.baidu.com', children: [
           { title: 'MAD-AMV', url: '' },
           { title: 'MMD-3D', url: '' },
           { title: '短片', url: '' },
           { title: '手书', url: '' },
           { title: '配音', url: '' }
          ]
        },
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
@import url('../../assets/css/icon.less');
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
  > li {
    font-size: 12px;
    .menu-size;
    a {
      text-decoration: none;
      color: #232;
    }
    > a {
      .menu-size;
      display: block;
      padding: 7px;
      box-sizing: border-box;

      > div {
        width: 100%;
        height: 18px;
        line-height: 18px;
        text-align: center;
      }
    }
    /*悬停时显示隐藏子目录*/
    &:hover .sub-nav {
      display: block;
    }
    .sub-nav {
      display: none;
      list-style: none;
      width: 126px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 3px;
      box-shadow: 0px 0px 3px #888888;
      > li {
        position: relative;
        text-indent: 30px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: inline-flex;
        &:hover {
          background-color: #e5e9ef;
        }
        > a {
          flex: 1;
          &:before {
            .arrow-left; /*左箭头*/
            position: absolute;
            content: '';
            left: 15px;
            top: 10px;
            width: 8px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>
