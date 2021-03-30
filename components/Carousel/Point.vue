<template>
  <div class="doc-wrapper" v-if="hasdot">
      <div 
      v-for="item in itemLen" 
      :key='item' 
      class="pointer"
      :style="{ background: (item-1)===currentIndex?dotBgColor:'' }"
      @click='handleClick(item-1)'
      >
      </div>
  </div>
</template>

<script>
export default {
    name:'Dot',
    props:{
      itemLen:Number,
      hasdot:Boolean,
      currentIndex:Number,
      dotBgColor:{
        type:String,
        default:"#ff5000"
      }
    },
    setup(props,ctx){
      const handleClick = (index)=>{
        ctx.emit('dotClick',index)
      }

      return {
        handleClick
      }
    }
}
</script>

<style lang='scss' scoped>
.doc-wrapper{
  position: absolute;
  display: flex;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba($color: #fff, $alpha: 0.2);
  padding: 3px 0;
  border-radius: 8px;
  .pointer{
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    margin: 0 5px;
  }
}

</style>