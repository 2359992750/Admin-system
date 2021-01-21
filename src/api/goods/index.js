import request from "@/api/request"
import { defaults } from "js-cookie"

//添加商品
function addProductAndSkus(data) {
    return request({
        url: '/lejuAdmin/product/addProductAndSkus',
        method: 'POST',
        data
    })
}

//添加sku数据
function addProductSkus(data) {
    return request({
        url: '/lejuAdmin/sku/addProductSkus',
        method: 'POST',
        data
    })
}

//删除库存信息
function delSku(skuId) {
    return request({
        url: `/lejuAdmin/sku/delSku/${skuId}`,
        method: 'DELETE',
    })
}


//获得商品sku数据
function getSkusByProductId(id) {
    return request({
        url: `lejuAdmin/sku/getSkusByProductId/${id}`,
        method: 'GET',
    })
}

//更新库存信息
function updateSkuInfo(data) {
    return request({
        url: `/lejuAdmin/sku/updateSkuInfo`,
        method: 'POST',
        data
    })
}


//删除商品信息
function del(productId) {
    return request({
        url: `/lejuAdmin/product/del/${productId}`,
        method: 'DELETE'
    })
}

//查询商品明细，用于编辑
function productSkusDetail(productId) {
    return request({
        url: `/lejuAdmin/product/productSkusDetail/${productId}`,
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

//更改是否最新
function switchNewStatus(data) {
    return request({
        url: '/lejuAdmin/product/switchNewStatus',
        method: 'POST',
        data
    })
}

//更改是否预告
function switchPreviewStatus(data) {
    return request({
        url: '/lejuAdmin/product/switchPreviewStatus',
        method: 'POST',
        data
    })
}

//更改发布状态
function switchPublishStatus(data) {
    return request({
        url: '/lejuAdmin/product/switchPublishStatus',
        method: 'POST',
        data
    })
}

//更改是否推荐
function switchRecommandStatus(data) {
    return request({
        url: '/lejuAdmin/product/switchRecommandStatus',
        method: 'POST',
        data
    })
}

//更改审核状态
function switchVerifyStatus(data) {
    return request({
        url: '/lejuAdmin/product/switchVerifyStatus',
        method: 'POST',
        data
    })
}

//更新商品信息
function updateProductAndSkus(data) {
    return request({
        url: '/lejuAdmin/product/updateProductAndSkus',
        method: 'POST',
        data
    })
}

//添加品牌
function addBrand(data) {
    return request({
        url: '/lejuAdmin/brand/addBrand',
        method: 'POST',
        data
    })
}

//删除品牌
function delBrand(id) {
    return request({
        url: `/lejuAdmin/brand/delBrand/${id}`,
        method: 'DELETE',
    })
}

//品牌列表
function findAllBrand() {
    return request({
        url: '/lejuAdmin/brand/findAllBrand',
        method: 'GET'
    })
}

//品牌列表分页
function findBrandByPage(start, limit) {
    return request({
        url: `/lejuAdmin/brand/findBrandByPage/${start}/${limit}`,
        method: 'GET'
    })
}

//显示隐藏
function switchShowStatus(data) {
    return request({
        url: '/lejuAdmin/brand/switchShowStatus',
        method: 'POST',
        data
    })
}

//更新品牌
function updateBrand(data) {
    return request({
        url: '/lejuAdmin/brand/updateBrand',
        method: 'POST',
        data
    })
}

//添加分类
function addCategory(data) {
    return request({
        url: '/lejuAdmin/category/addCategory',
        data,
        method: 'POST'
    })
}

//删除分类
function delCategory(id) {
    return request({
        url: `/lejuAdmin/category/delCategory/${id}`,
        method: 'DELETE'
    })
}

//查询所有一二级分类
function getAllCategory() {
    return request({
        url: '/lejuAdmin/category/getAllCategory',
        method: 'GET'
    })
}

//更新分类
function updateCategory(data) {
    return request({
        url: '/lejuAdmin/category/updateCategory',
        data,
        method: 'POST'
    })
}


export default {
    addProductAndSkus,
    del,
    productSkusDetail,
    productsByPage,
    switchNewStatus,
    switchPreviewStatus,
    switchPublishStatus,
    switchRecommandStatus,
    switchVerifyStatus,
    updateProductAndSkus,
    addBrand,
    delBrand,
    findAllBrand,
    findBrandByPage,
    switchShowStatus,
    updateBrand,
    addCategory,
    delCategory,
    getAllCategory,
    updateCategory,
    addProductSkus,
    getSkusByProductId,
    delSku,
    updateSkuInfo
}