# MyComponents 

# 介绍

这是一个Vue3.0组件库,主要用来熟悉Vue3.x的composition API,以及提升自己组件化开发能力

# 使用方法

使用该库内部组件,需要将该文件作为第三方插件引入项目:(由于该库仅用于自己练习,所以没有上传到npm)

1.首先需要将该文件放入项目中lib文件夹下

2.在main.js中使用import导入该文件, 在app实例创建之前 .use(PersonalUI) :　

```javascript
import PersonalUI from './libs/personalui'
createApp(App).use(PersonalUI).mount('#app')

```

# 现有组件列表
Vue3.x实现 树状菜单 -- TreeMenu

Vue3.x实现 标签栏 -- TabBar

Vue3.x实现 无缝轮播 -- Carousel

Vue3.x实现 放大镜 -- Magnifier

Vue3.x实现 模态框 -- Modal

Vue3.x实现 五星好评 --Stars


# 实现代码
Vue3.x实现 树状菜单 -- TreeMenu
```html
<treemenu>
    <template v-for='item of menuData'>
      <menuitem  :key=item.id v-if="!item.children">
        {{item.title}}
      </menuitem>
      <resubmenu
      :key="item.id"
      :data=item
      v-else
      ></resubmenu>
    </template>
  </treemenu>
<!-- 
menuData是菜单结构的数据,需要有title,id,child成员,如下
[{title:'菜单1',id:1},
{title:'菜单2',id:2, child:[{title:'菜单21',id:21}]},]
-->
```



Vue3.x实现 标签栏 -- TabBar

```html
<tab
    :navdata='NavData'     
    :pagedata='PageData'   
    navcolor='orange'      
    :wrapwidth='500'	   
    :wrapheight='300'      
></tab>
<!-- 
NavData  标签名称列表
PageData 标签内容列表
navcolor 自定义标签颜色
wrapwidth 自定义标签栏宽度
wrapheight 自定义标签栏高度
-->
```

Vue3.x实现 无缝轮播 -- Carousel

```html
<carousel
          :autoplay='true'		
          :duration='3000'      
          :initial='0'			
          :hasdot='true'		
          :hasdirector="true"	
          dotBgColor="black"	
          >
    <caritem
             v-for="(item,index) in info"
             :key="index"
             >
        <img :src="item.imgUrl">
    </caritem>
</carousel>
<!--
autoplay 是否自动播放
duration 切换间隔事件
initial 	轮播首张图片下标
hasdot 		是否有小圆点导航
hasdirector 是否有左右切换按钮
dotBgColor 自定义小圆点颜色
-->
```

Vue3.x实现 放大镜 -- Magnifier

```html
<magnifier
      :link='link'				
      :blank="blank"			
      :imgUrl="imgUrl"			
      :imgWidth="imgWidth"		
      :imgHeight="imgHeight" 	
      :imgAlt="imgAlt"			
      :magWidth="magWidth"		
      :magHeight="magHeight"	
    ></magnifier>
<!--
link 导航地址
blank 是否在新窗口打开链接
imgUrl 	图片链接
imgWidth 图片宽度
imgHeight 图片高度
imgAlt 图片alt内容
magWidth 放大镜区域宽度
magHeight 放大镜区域高度
-->
```

Vue3.x实现 模态框 -- Modal

```html
<modal
      :show="true"   			
      :width="550"				
      :borderRadius="10"		
      headerColor="#007bff" 	
      headerText="this is a SUPPER MODAL"	
      headerTextColor="#fff"				
      contentText="this is a MESSAGE"		
      contentTextColor="#333"				
      position="center"						
      :btnGroupShow="true"					
      confirmText="Yes"						
      cancelText="No"						
      @confirm="modalConfirm"				
      @close="modalClose"					
    />
<!--
show 是否默认显示
width 自定义宽度
borderRadius 自定义圆角边框
headerColor 自定义顶部背景颜色
headerText 顶部显示内容
headerTextColor 顶部文字颜色
contentText 内容区显示内容
contentTextColor 内容文字颜色
position 出现位置,(目前只有top和center)
btnGroupShow 底部按钮块是否显示
confirmText 确定按钮显示内容
cancelText 取消按钮显示内容
@confirm 返回'confirm'
@close 返回'cancel'
-->
```

Vue3.x实现 五星好评 --Stars

```html
<stars
    :num="3"        默认点亮星星数
    :size="16"		自定义星星大小
    @getStarNum="getStarNum"   返回选择星星的数
    >
    </stars>
<!--
num 默认点亮星星数
size 自定义星星大小
getStarNum 返回选择星星的颗数
-->
```

