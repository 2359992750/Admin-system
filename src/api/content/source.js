import request from '@/api/request'

//删除素材文件
// /lejuAdmin/material/delMaterial/{id}
function delMaterial(id) {
    return request({
        url: `/lejuAdmin/material/delMaterial/${id}`,
        method: 'DELETE'
    })
}

//查询素材列表
///lejuAdmin/material/findMaterialByPage/{start}/{limit}
function findMaterialByPage(start, limit) {
    return request({
        url: `lejuAdmin/material/findMaterialByPage/${start}/${limit}`,
        method: 'GET'
    })
}



export default {
    delMaterial,
    findMaterialByPage
}