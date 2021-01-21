const TOKEN_NAME = 'token'
const USE_INFO_NAME = 'userInfo'

export function setToken(token) {
    window.localStorage.setItem(TOKEN_NAME, token)
}
// 存userInfo
export function setUserInfo(obj) {
    window.localStorage.setItem(USE_INFO_NAME, JSON.stringify(obj))
}
// 获取token
export function getToken() {
    return window.localStorage.getItem(TOKEN_NAME)
}
// 获取user_info
export function getUserInfo() {
    return JSON.parse(window.localStorage.getItem(USE_INFO_NAME))
}

// 删除token
export function removeToken() {
    return window.localStorage.removeItem(TOKEN_NAME)
}
// 删除用户
export function removeUserInfo() {
    return window.localStorage.removeItem(USE_INFO_NAME)
}
// 全部删除
export function clearAll() {
    removeToken()
    removeUserInfo()
}