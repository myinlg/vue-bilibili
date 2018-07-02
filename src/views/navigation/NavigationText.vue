<template>
  <div class="text-colorful">
    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="65%">{{title}}</text>
      </symbol>
      <g class = "g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'NavigationText',
  props: {
    title: {
      type: String,
      default: 'Sailor'
    }
  }
}
</script>
<style lang="less" scoped>
.text-colorful {
  width: 100%;
  height: 100%;
  > svg {
    display: block;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 12em 'Montserrat';
  }

  .text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
  }

  .text-copy:nth-child(1) {
    stroke: #4d163d;
    animation-delay: -1;
  }

  .text-copy:nth-child(2) {
    stroke: #840037;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3) {
    stroke: #bd0034;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4) {
    stroke: #bd0034;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5) {
    stroke: #fdb731;
    animation-delay: -5s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
}
</style>
