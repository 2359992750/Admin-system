import request from '@/api/request'

//查询注册用户列表
function findMembersByPage(start, limit) {
    return request({
        url: `/lejuAdmin/member/findMembersByPage/${start}/${limit}`,
        method: 'GET'
    })
}

export default {
    findMembersByPage
}