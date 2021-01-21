import request from '@/api/request'

//获取管理用户分页列表
function findUsersByPage(start, limit, data) {
    return request({
        url: `/admin/sysAuth/user/findUsersByPage/${start}/${limit}`,
        data,
        method: 'POST'
    })
}

//删除管理用户
function removeUser(id) {
    return request({
        url: `/admin/sysAuth/user/removeUser/${id}`,
        method: 'DELETE'
    })
}

//新增用户
function saveUserRoles(data) {
    return request({
        url: '/admin/sysAuth/user/saveUserRoles',
        method: 'POST',
        data
    })
}

//更新用户
function updateUserRoles(data) {
    return request({
        url: '/admin/sysAuth/user/updateUserRoles',
        method: 'PUT',
        data
    })
}

//获取用户明细
function user(id) {
    return request({
        url: `/admin/sysAuth/user/${id}`,
        method: 'GET',
    })
}

//查询所有角色
function findAllRoles() {
    return request({
        url: '/admin/sysAuth/role/findAllRoles',
        method: 'GET',
    })
}

//获取角色分页列表
function findRolesByPage(start, limit) {
    return request({
        url: `/admin/sysAuth/role/findRolesByPage/${start}/${limit}`,
        method: 'GET',
    })
}

//删除角色
function removeRole(id) {
    return request({
        url: `/admin/sysAuth/role/removeRole/${id}`,
        method: 'DELETE',
    })
}

//新增角色
function saveRolePermissions(data) {
    return request({
        url: '/admin/sysAuth/role/saveRolePermissions',
        method: 'POST',
        data
    })
}


//修改角色和权限
function updateRolePermissions(data) {
    return request({
        url: '/admin/sysAuth/role/updateRolePermissions',
        method: 'PUT',
        data
    })
}

//获取角色明细
function role(id) {
    return request({
        url: `/admin/sysAuth/role/${id}`,
        method: 'GET',
    })
}

//查询所有菜单
function findAllPermissions() {
    return request({
        url: '/admin/sysAuth/permission/findAllPermissions',
        method: 'GET',
    })
}



//删除菜单权限
function remove() {
    return request({
        url: `/admin/sysAuth/permission/remove/${id}`,
        method: 'POST',
    })
}

//新增菜单权限
function save(data) {
    return request({
        url: '/admin/sysAuth/permission/save',
        method: 'POST',
        data
    })
}

//初始化菜单权限
function saveInitMenus(data) {
    return request({
        url: '/admin/sysAuth/permission/saveInitMenus',
        method: 'POST',
        data
    })
}


export default {
    findUsersByPage,
    removeUser,
    saveUserRoles,
    updateUserRoles,
    user,
    findAllRoles,
    findRolesByPage,
    removeRole,
    saveRolePermissions,
    updateRolePermissions,
    role,
    findAllPermissions,
    remove,
    save,
    saveInitMenus,

}