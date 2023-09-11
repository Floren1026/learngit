import {createStore} from 'vuex'
import Test from './modules/Test'//引用模块地址

export default createStore({
    modules: {
        a:Test//a为Test模块取别名
    }
})
