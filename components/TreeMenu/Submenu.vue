<template>
  <div class="sub-menu" @mouseover="isShow=true" @mouseleave="isShow=false">
      <div class="title">
          <slot name='title'></slot>
          <i class="icon">&gt;</i>
      </div>
      <div class="sub-item" v-show="isShow">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'Submenu',
    setup(){
        const isShow = ref(false)
        return {
            isShow
        }
    }
}
</script>

<style lang='scss' scoped>
.sub-menu{
    position: relative;
    .title{
        position: relative;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #000;
        .icon{
            position: absolute;
            top: 0;
            right: 15px;
        }
    }

    .sub-item{
        position:absolute;
        left: 100%;
        top: 0;
        width: 100%; 
        background-color: #ccc;
    }
}

</style>