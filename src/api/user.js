import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/vue-admin-template/user/login',
        method: 'POST',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/vue-admin-template/user/info',
        method: 'GET',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'POST'
    })
}