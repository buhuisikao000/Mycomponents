<template>
  <div class="carousel">
      <div class="inner"
      @mouseenter='mouseenter'
      @mouseleave="mouseleave"
      >
          <slot></slot>
          <dot 
          :itemLen="itemLen" 
          :hasdot="hasdot"
          :currentIndex='currentIndex'
          :dotBgColor='dotBgColor'
          @dotClick='dotClick'
          ></dot>
          <director :hasdirector='hasdirector'
            @dirclick="setIndex"
          >
          </director>
      </div>
  </div>
</template>

<script>
import { getCurrentInstance, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import Dot from './Point.vue'
import Director from './Director.vue'
export default {
  components: { Dot, Director },
    name:'Carousel',
    props:{
        autoplay:{
            type:Boolean,
            default:true
        },
        duration:{
            type:Number,
            default:3000
        },
        initial:{
            type:Number,
            default:0
        },
        hasdot:{
            type:Boolean,
            default:true
        },
        hasdirector:{
            type:Boolean,
            default:true
        },
        dotBgColor:String,
        
    },
    setup(props){
        const instance = getCurrentInstance() 
        const state=reactive({
            currentIndex:props.initial,
            itemLen:0
        })
        let time=null

        const dotClick = (index)=>{
            state.currentIndex=index
        }

        

        //自动轮播
        const autoPlay = ()=>{
            if (props.autoplay){
                time=setInterval(()=>{
                    setIndex('next')
                },props.duration)
            }
        } 

        //切换显示图片index
        const setIndex= (dir)=>{
            switch (dir){
                case 'next' : state.currentIndex+=1
                if (state.currentIndex===state.itemLen){
                    state.currentIndex=0
                }
                break;
                case 'prev' : state.currentIndex-=1
                if (state.currentIndex===-1){
                    state.currentIndex=state.itemLen-1
                }
                break;
                default: break;
             }
        }

        const mouseenter = ()=>{
            clearInterval(time)
            time=null
        }

        const mouseleave = ()=>{
            autoPlay()
        }

        onMounted(()=>{
            state.itemLen=instance.slots.default()[0].children.length
            autoPlay()
        })

        onBeforeUnmount(()=>{
            clearInterval(time)
            time=null
        })
        

        return{
            ...toRefs(state),
            dotClick,
            mouseenter,
            mouseleave,
            setIndex
        }
    }
}
</script>

<style lang='scss' scoped>
    .carousel{
        width:100%;
        height:100%;
        .inner{
            position: relative;
            width:100%;
            height:100%;
        
            overflow: hidden;
        } 
    }
     
    

</style>