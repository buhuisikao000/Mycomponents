<template>
  <div class="page-warpper">
      {{pagedata[curIdx]}}
  </div>
</template>

<script>
export default {
    name:'Page',
    props:{
      pagedata:Array,
      curIdx:Number
    }
}
</script>

<style lang='scss' scoped>
.page-warpper{
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  
}
</style>