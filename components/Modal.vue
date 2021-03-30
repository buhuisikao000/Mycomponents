<template>
  <div 
  class="modal-mask" 
  v-show="modalShow"
  >
      <div 
      class="ui-modal"
      :style="{
          width:width + 'px',
          borderRadius: borderRadius + 'px',
          top: position==='center'? '50%':'50px',
          transform:`translate(-50%,${position==='center'?'-50%':'0'})`
      }"
      >
          <header 
          class="header"
          :style="{
              background:headerColor,
              color: headerTextColor
          }"
          >
              <h1>{{ headerText }}</h1>
              <a href="javascript:;" :style="{color:headerTextColor}"
                @click="cancel"
              >&times;</a>
          </header>
          <article class="content">
              <p :style="{color:contentTextColor}"
              >{{ contentText }}</p>
          </article>
          <footer class="btn-group" v-if="btnGroupShow">
              <button 
              class="btn btn-confirm"
              :style="{
                  backgroundColor:headerColor
              }"
              @click="confirm">{{ confirmText }}</button>
              <button 
              class="btn btn-cancel" 
              @click="cancel"
              >{{ cancelText }}</button>
          </footer>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    name:'Modal',
    props:{
        show:{
            type:Boolean,
            default:false
        },
        width:{
            type:Number,
            default:300
        },
        borderRadius:{
            type:Number,
            default:0
        },
        headerColor:{
            type:String,
            default:"#000"
        },
        headerText:{
            type:String,
            default:''
        },
        headerTextColor:{
            type:String,
            default:'#fff'
        },
        contentText:{
            type:String,
            default:''
        },
        contentTextColor:{
            type:String,
            default:'#000'
        },
        position:{
            type:String,
            default:'top'
        },
        btnGroupShow:{
            type:Boolean,
            default:true
        },
        confirmText:{
            type:String,
            default:'confirm'
        },
        cancelText:{
            type:String,
            default:'cancel'
        }, 
    },
    setup(props,ctx){
        const state=reactive({
            modalShow:props.show
        })

        const confirm=()=>{
            ctx.emit('confirm')
            state.modalShow=false
        }
        const cancel=()=>{
            ctx.emit('close')
            state.modalShow=false
        }

        return{
            confirm,
            cancel,
            ...toRefs(state)
        }
    }

    
}
</script>

<style lang='scss' scoped>
    .modal-mask{
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: .15);

        a{
            text-decoration: none;
            outline: none;
            color: #333;
        }

        h1,p{
            font-weight: normal;
            margin: 0;
        }

        button{
            outline: none;
            border: none;
        }

        .ui-modal{
            position:fixed;
            left: 50%;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.2);

            .header{
                height: 44px;
                padding: 0 15px;
                box-sizing: border-box ;

                h1{
                    display: inline-block;
                    font-size: 18px;
                    line-height: 44px;
                }

                a{
                    float: right;
                    font-size: 30px;
                    line-height: 44px;
                }
            }

            .content{
                box-sizing: border-box;
                padding: 20px;
            }

            .btn-group{
                height: 30px;
                padding: 10px 15px;
                border-top: 1px solid #ddd;

                .btn{
                    float: right;
                    min-width: 50px;
                    height: 30px;
                    border-radius: 3px;
                    cursor: pointer;

                    &.btn-confirm{
                        color:#fff;
                        margin-left: 15px;
                    }

                    &.btn-cancel{
                        background-color:#ddd;
                        color: #777;
                    }

                }
            }

        }
    }
</style>