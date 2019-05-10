import productApi from '@/api/productApi'
var product = {
    namespaced: true,
    state: {
        //用于存储所有的商品列表信息
        all: []
    },
    mutations: {
        SET_PRODUCT_LIST(state, obj) {
            state.all = obj;
        },

    },
    actions: {
        getProductList(content) {
            productApi.getProductList()
                .then(res => {
                    content.commit('SET_PRODUCT_LIST', res);
                    console.log('res', res);
                })
        },
    },
    getters: {

    }
}


export default product;