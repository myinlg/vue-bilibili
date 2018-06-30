<template>
  <div class="img-module">
      <div class="img" v-for="(item,index) in imgList" :key="index" :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>
  </div>
</template>

<script>
export default {
  name: 'ImgModule',
  data () {
    return {
      imgList: [
        {title: '【该细还得细】Fate/EXTRA世界线的前世今生(前)', descript: '', imgUrl: '/static/images/content/recommend-module0.jpg'},
        {title: '【星火行动】谁杀死了知更鸟【言和】【神华社x踏云社】', descript: '', imgUrl: '/static/images/content/recommend-module1.jpg'},
        {title: '【新番吐个爽】只要胆子大，标题不取也罢', descript: '', imgUrl: '/static/images/content/recommend-module2.jpg'},
        {title: '【赤ティン】如果能成为谁的心脏的话【高音】', descript: '', imgUrl: '/static/images/content/recommend-module3.jpg'},
        {title: '彩♂虹六号', descript: '', imgUrl: '/static/images/content/recommend-module4.jpg'},
        {title: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', descript: '', imgUrl: '/static/images/content/recommend-module5.jpg'},
        {title: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', descript: '', imgUrl: '/static/images/content/recommend-module6.jpg'},
        {title: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', descript: '', imgUrl: '/static/images/content/recommend-module7.jpg'}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.img-module {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: 'column';
  align-items: 'center';
  justify-content: space-between;
  // align-content: stretch;
  .img {
    width: 160px;
    height: 100px;
    background-size: 100% 100%;
    border-radius: 5px;
  }
}
</style>
