﻿/**
 * @author AlanChen
 * @module 接口配置文件
 * @constant {Object} globalConfig 接口的全局配置
 * @constant {Object} apiConfig 具体接口的详细配置
 */
const serverOrigin = window.location.origin
const baseURL = serverOrigin

//接口的全局配置
const globalConfig = {
    baseURL,
    method: 'GET',
    withCredentials: true, //浏览器请求带上cookie，用于后台session验证
    timeout: 50000,
}

const ctx = require.context('./module', true, /[A-Z][a-z]+\.js$/)

const configModule = ctx.keys().map(path => {
    const fixedPath = path.slice(2)
    const name = './module/' + fixedPath
    const resource = require('./module/' + fixedPath).default
    const apiList = Object.keys(resource)
    return {name, resource, apiList}
})

const configList = configModule.reduce((total, item) => {
    return [...total, ...item.apiList]
}, [])

let isRepeat=false, repeatModuleName=[], repeatName=''
isRepeat = configList.some((item, i) => {
    const filter = configList.filter((a, j) => j!=i)
    if(filter.includes(item)) {
        repeatName = item
        configModule.forEach(api => {
            if(Object.keys(api.resource).includes(item)) {
                repeatModuleName.push(api.name)
            }
        })
    }
    return filter.includes(item)
})

//具体接口的详细配置
const apiConfig = configModule.reduce((total, item) => {
    if(isRepeat) {
        const errMessage = `
  接口名重复, 重复接口为: ${repeatName}
  重复位置在:  
    ${repeatModuleName.join(', ')}`
        throw new Error(errMessage)
    }
    else {
        return {...total, ...item.resource}
    }
}, {})

export {
    globalConfig,
    apiConfig
}