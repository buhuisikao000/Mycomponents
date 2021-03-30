<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a
      :href="link"
      class="mag-wrap"
      :target="blank ? '_blank' : ''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px',
      }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px',
        }"
      />
    </a>
    <a :href="link" class="img-lk">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
import { magnifier } from "../directives";
export default {
  name: "Magnifier",
  directives: {
    magnifier,
  },
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 500,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    link: String,
    imgUrl: String,
    imgUrl: String,
  },
};
</script>

<style lang="scss" scoped>
.img-wrap {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
  
  .static-img {
    width: 100%;
    height: 100%;
  }

  .mag-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.4);
    cursor: move;
    overflow: hidden;
    display: none;

    &.show {
      display: block;
      transform: scale(1.5);
    }

    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>