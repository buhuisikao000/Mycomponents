<template>
  <div class="nav-wrapper">
      <div class='nav-item'
        v-for="(item,index) in navdata"
        :key='index'
        @click="selectClick(index)"
        :style="{
          background: curIdx===index?navcolor:''
        }"
      >{{item}}</div>
  </div>
</template>

<script>
export default {
    name:'Navbar',
    props:{
      navdata:Array,
      navcolor:String,
      curIdx:String
    },
    setup(props,ctx){
    
      const selectClick = (index)=>{
        ctx.emit('indexChange',index)
      }

      return {
        selectClick,
      }
    }
}
</script>

<style lang='scss' scoped>
.nav-wrapper{
  width: 100%;
  height:15%;
  display: flex;
  .nav-item{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: #ccc;
   
    // &.active{
    //   background-color: orange;
    // }
  }
}
</style>