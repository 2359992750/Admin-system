import request from '@/api/request'

//添加限时活动
function addRecommend(data) {
    return request({
        url: '/lejuAdmin/homeRecommend/addRecommend',
        method: 'POST',
        data
    })
}

//活动列表
function findAllRecommends() {
    return request({
        url: '/lejuAdmin/homeRecommend/findAllRecommends',
        method: 'GET'
    })
}

//删除广告
function delRecommend(recommendId) {
    return request({
        url: `/lejuAdmin/homeRecommend/delRecommend/${recommendId}`,
        method: 'DELETE'
    })
}

//修改限时活动
function updateRecommend(data) {
    return request({
        url: '/lejuAdmin/homeRecommend/updateRecommend',
        method: 'POST',
        data
    })
}

//活动明细
function homeRecommend(recommendId) {
    return request({
        url: `/lejuAdmin/homeRecommend/${recommendId}`,
        method: 'GET'
    })
}


//分页查询商品列表
function productsByPage(start, limit, data) {
    return request({
        url: `/lejuAdmin/product/productsByPage/${start}/${limit}`,
        method: 'POST',
        data
    })
}

//品牌列表
function findAllBrand() {
    return request({
        url: '/lejuAdmin/brand/findAllBrand',
        method: 'GET'
    })
}

//查询商品明细，用于编辑
function productSkusDetail(productId) {
    return request({
        url: `/lejuAdmin/product/productSkusDetail/${productId}`,
        method: 'GET'
    })
}



export default {
    addRecommend,
    findAllRecommends,
    delRecommend,
    updateRecommend,
    homeRecommend,
    productsByPage,
    findAllBrand,
    productSkusDetail
}