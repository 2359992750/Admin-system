import request from '@/api/request'

//新增广告
function addAds(data) {
    return request({
        url: '/lejuAdmin/advertise/addAds',
        method: 'POST',
        data
    })
}

//查看广告列表
function adlist() {
    return request({
        url: '/lejuAdmin/advertise/adsList',
        method: 'GET'
    })
}

//删除广告
function delAds(adsId) {
    return request({
        url: `/lejuAdmin/advertise/delAds/${adsId}`,
        method: 'DELETE'
    })
}

//更新广告
function updateAds(data) {
    return request({
        url: '/lejuAdmin/advertise/updateAds',
        method: 'POST',
        data
    })
}

export default {
    addAds,
    adlist,
    delAds,
    updateAds
}