<template>
  <div class="dir-wrapper" v-if='hasdirector'>
      <div class="prev" @click="prevClick('prev')">
          <p>&lt;</p>
      </div>
      <div class="next" @click="nextClick('next')">
          <p>&gt;</p>
      </div>
      
  </div>
</template>

<script>
export default {
    name:'Director',
    props:{
        hasdirector:Boolean,
    },
    setup(props,ctx){
        const prevClick = (data)=>{
            ctx.emit('dirclick',data)
        }
        const nextClick = (data)=>{
            ctx.emit('dirclick',data)
        }

        return{
            prevClick,
            nextClick
        }
    }
}
</script>

<style lang='scss' scoped>
.dir-wrapper{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    .prev,.next{
        width: 25px;
        height: 25px;
        background: rgba($color: #fff, $alpha: 0.1);
        text-align: center;
        line-height: 25px;
        font-size: 25px;
    }
    .prev{
        float: left;
    
    }
    .next{
        float: right;
    }
}
</style>