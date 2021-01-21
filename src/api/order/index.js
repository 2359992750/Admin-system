import request from '@/api/request'


//订单列表
function findOrdersByPage(start, limit, data) {
    return request({
        url: `/lejuAdmin/order/findOrdersByPage/${start}/${limit}`,
        method: 'POST',
        data
    })
}

//关闭订单
function finishOrder(orderId) {
    return request({
        url: `/lejuAdmin/order/finishOrder/${orderId}`,
        method: 'POST'
    })
}

//查看订单明细
function orderDetail(orderId) {
    return request({
        url: `/lejuAdmin/order/orderDetail/${orderId}`,
        method: 'GET'
    })
}

//强制确认收货
function receiveProductsForce(orderId) {
    return request({
        url: `/lejuAdmin/order/receiveProductsForce/${orderId}`,
        method: 'POST'
    })
}

//确认发货
function sendDone(data) {
    return request({
        url: '/lejuAdmin/order/sendDone',
        method: 'POST',
        data
    })
}

//同意退货
function agreeApply(id, data) {
    return request({
        url: `/lejuAdmin/orderReturn/agreeApply/${id}`,
        method: 'POST',
        data
    })
}

//拒绝退货
function rejectApply(id, data) {
    return request({
        url: `/lejuAdmin/orderReturn/rejectApply/${id}`,
        method: 'POST',
        data
    })
}

//查看退单列表
function findReturnApply(start, limit, data) {
    return request({
        url: `/lejuAdmin/orderReturn/findReturnApply/${start}/${limit}`,
        method: 'POST',
        data
    })
}

//收到退货
function sendDoreceiveProductne(id, data) {
    return request({
        url: `/lejuAdmin/orderReturn/receiveProduct/${id}`,
        method: 'POST',
        data
    })
}

//退单明细
function orderReturn(id) {
    return request({
        url: `/lejuAdmin/orderReturn/${id}`,
        method: 'GET'
    })
}

//地址列表
function addressList() {
    return request({
        url: '/lejuAdmin/companyAddress/addressList',
        method: 'GET'
    })
}

//新增地址
function saveadress(data) {
    return request({
        url: '/lejuAdmin/companyAddress/save',
        method: 'POST',
        data
    })
}

//设置收货地址
function setReceiveOne(data) {
    return request({
        url: '/lejuAdmin/companyAddress/setReceiveOne',
        method: 'POST',
        data
    })
}

//设置发货地址
function setSendOne(data) {
    return request({
        url: '/lejuAdmin/companyAddress/setSendOne',
        method: 'POST',
        data
    })
}

//更新地址
function update(data) {
    return request({
        url: '/lejuAdmin/companyAddress/update',
        method: 'POST',
        data
    })
}

//删除地址
function decompanyAddress(id) {
    return request({
        url: `/lejuAdmin/companyAddress/${id}`,
        method: 'DELETE',
    })
}

//地址明细
function companyAddress(id) {
    return request({
        url: `/lejuAdmin/companyAddress/${id}`,
        method: 'GET'
    })
}




export default {
    findOrdersByPage,
    finishOrder,
    orderDetail,
    receiveProductsForce,
    sendDone,
    agreeApply,
    findReturnApply,
    sendDoreceiveProductne,
    orderReturn,
    addressList,
    saveadress,
    setReceiveOne,
    setSendOne,
    update,
    decompanyAddress,
    companyAddress,
    rejectApply
}