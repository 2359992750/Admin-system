import Collapse from './Collapse/index'
import GoodsDialog from './GoodsDialog/index'

export default {
    install(Vue) {
        Vue.component('collapse', Collapse)
        Vue.component('goodsDialog', GoodsDialog)
    }
}