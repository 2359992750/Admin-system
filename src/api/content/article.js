import request from '@/api/request'
// 获取文章列表
function getArticleList(start, limit, data) {
    return request({
        url: `/lejuAdmin/productArticle/findArticles/${start}/${limit}`,
        method: 'POST',
        data
    })
}
// 删除文章
function delArticle(id) {
    return request({
        url: `/lejuAdmin/productArticle/del/${id}`,
        method: 'DELETE'
    })
}

//更新文章
function updateArticle(data) {
    return request({
        url: '/lejuAdmin/productArticle/updateArticle',
        method: 'POST',
        data
    })
}

//新增文章
function addArticle(data) {
    return request({
        url: '/lejuAdmin/productArticle/addArticle',
        method: 'POST',
        data
    })
}

//更新文章显示状态
function changeShowStatus(data) {
    return request({
        url: '/lejuAdmin/productArticle/changeShowStatus',
        method: 'POST',
        data
    })
}

//文章明细
function productArticle(id) {
    return request({
        url: `/lejuAdmin/productArticle/productArticle/${id}`,
        method: 'GET'
    })
}



export default {
    getArticleList,
    delArticle,
    updateArticle,
    addArticle,
    changeShowStatus,
    productArticle
}