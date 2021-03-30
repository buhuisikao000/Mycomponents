<template>
  <div class="tab-wrapper"
   :style="{
       width:wrapwidth +'px',
       height:wrapheight +'px',
   }" 
  >
     <navbar 
     :navdata='navdata' 
     :navcolor='navcolor' 
     @indexChange='indexChange'
     :curIdx='curIdx'
     >
     </navbar>
     <page :pagedata='pagedata' :curIdx='curIdx'></page>
  </div>
</template>

<script>
import { toRefs,reactive } from 'vue'
import Navbar from './Navbar.vue'
import Page from './Page.vue'

export default {
    name:'Tab',
    components: { Navbar, Page },
    props:{
        navdata:{
            type:Array,
            default:()=>{return ['选项1','选项2','选项3']}
        },
        pagedata:{
            type:Array,
            default:()=>{return ['detail 1','detail 2','detail 3']}
        },
        wrapwidth:{
            type:Number,
            default:300
        },
        wrapheight:{
            type:Number,
            default:300
        },
        navcolor:{
            type:String,
            default:'#ff5000'
        }
    },
    setup(){
        const state = reactive({
            curIdx:0
        })
        const indexChange = (index)=>{
            state.curIdx=index
        }
        return{
            indexChange,
            ...toRefs(state)
        }
    }
}
</script>

<style lang='scss' scoped>
.tab-wrapper{
    margin: 50px auto;
    border: 1px solid #000;
}

</style>