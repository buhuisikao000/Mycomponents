import Magnifier from './components/Magnifier'
import Stars from './components/Stars'
import Modal from './components/Modal'
import Carousel from './components/Carousel/Carousel'
import Caritem from './components/Carousel/Caritem'
import Treemenu from './components/TreeMenu/Treemenu'
import Menuitem from './components/TreeMenu/Menuitem'
import Submenu from './components/TreeMenu/Submenu'
import Resubmenu from './components/TreeMenu/Resubmenu'
import Tab from './components/Tab/Tab'

let PersonalUI={}

PersonalUI.install=function (Vue){
    Vue.component(Magnifier.name,Magnifier);
    Vue.component(Stars.name,Stars)
    Vue.component(Modal.name,Modal)
    
    Vue.component(Carousel.name,Carousel)
    Vue.component(Caritem.name,Caritem)

    Vue.component(Treemenu.name,Treemenu)
    Vue.component(Menuitem.name,Menuitem)
    Vue.component(Submenu.name,Submenu)
    Vue.component(Resubmenu.name,Resubmenu)

    Vue.component(Tab.name,Tab)
}

export default PersonalUI