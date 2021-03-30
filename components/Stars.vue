<template>
  <div class="ui-stars">
    <span
      v-for="star in 5"
      :key="star"
      :class="['iconfont icon-Star', star <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
      @click='setStarNum(star)'
    ></span>
  </div>
</template>

<script>
import {useStars} from '../hooks/index.js'

export default {
  name: "Stars",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props,ctx) {
    const [starNum, setStarNum] = useStars(props.num,()=>{
        ctx.emit("getStarNum",starNum.value)
    })
    return {
        starNum,
        setStarNum
    }
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_2448848_t62lz001c1m.eot?t=1616823338328"); /* IE9 */
  src: url("//at.alicdn.com/t/font_2448848_t62lz001c1m.eot?t=1616823338328#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABpQAAAKXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBIIEpATYCJAMICwYABCAFhG0HLhvNBRHVk09kXx7wZKh575DWikajpmd42UHNs15/jn5CNKya4H4Onv/svu6rqv5T0z2CI3tBndyOAIRU9rOF03WQTjvGISwTfT4OppvergCW5WEDznST7Q4ccg5X/9oK0AqAzc3QNSpCsSTnwf/yHenYhPzyiXunvwUUyHxAOc65qAuoiwMp0D0w6vKACyT0hrELXuBtCOCSQRnS2T04CYvBXiSArFq+dD624MNgWNIiBBp2GuQwDlbtUYND0fflb41YUDgau2x0SdciWn9udNL0Zj+zAgI/CGi/A2igDDAgkxpjw2iE0TVuzJADxyoW+KnvBwbkqFqE/XV2YRgAaZD3THxP8KhJBfBYY6kB2ie9L0hNJ116+1CqZz+U/MaZs48Kvfex0pOP9j1I5vb7ei4/OH2qaNfepXP81v3XBX+494an0pnqVFmi1yxLGgqOjMqdcXVBxOXO2oaaVcd6KnqOha8r6Kq9vCBi2/A48Wgwqcui1xSVnVIZLt0xjVYA/Heaxi/8Db/OzY1svPUMAN/2ksjjvzMNc4A9kV3gh/EH9hhDaOuV0fiNg4qaG2lycQEf7Irhx1RV/N1ZBFsQTnCEkK5DY8kjGVoZHDzqEMDSApdSevZ7xLIBjZhQoIQdAEIUd6GI4Bk0UQRJhvYdDgn8R4Ao0XCZIrEnehSIFQSEktGA+kPQrVrXyCIuvqF7Z0l5YcR4IV0hCMs4l5MHVqQl1lwftzJbsNQK7OA+zLlBpxZR8+iZ+zZNtulJo25lEHQQSkYD6g9Bt2qD4Swqn7+he2dJHV117hfSFSaHZZwHkA5ZHdT1KI9cH7cyW7DUCuxgGubcoDdPi6h59BMifZucfnaobNxeUf7uCOBiq5U41RozkSUNAwA=")
      format("woff2"),
    url("//at.alicdn.com/t/font_2448848_t62lz001c1m.woff?t=1616823338328")
      format("woff"),
    url("//at.alicdn.com/t/font_2448848_t62lz001c1m.ttf?t=1616823338328")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_2448848_t62lz001c1m.svg?t=1616823338328#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;

  &.icon-star {
    transition: color 0.3s;
  }
  &.icon-Star:before {
    content: "\e77e";
  }
  &.active {
    color: #fbab06;
  }
}
</style>