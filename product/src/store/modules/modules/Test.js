export default {
    namespaced: true,//使其成为带命名空间的模块
    state: () => {
        //state:页面使用位置computed下...mapState
        return {
            testData: [1, 2, 3]//全局数据
        }
    }, getters: {
        //getters:页面使用位置computed下...mapGetters
        getDataTest: (state) => {
            console.log("getDataTest")
            return state.testData
        }
    }, mutations: {
        //mutations:页面使用位置methods下...mapMutations
        setTestData(state, data) {
            console.log("setTestData")
            console.log(data)
            state.testData = [3, 2, 1]

        }
    }, actions: {
        //actions: 页面使用位置methods下...mapActions
        actionSetTestData({commit}, data) {
            console.log("actionSetTestData")
            commit("setTestData", data)
        }
    }
}
