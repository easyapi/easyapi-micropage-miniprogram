const {
  easyApiMicroPageUrl,
  request
} = require('../utils/request')

/**
 * 获取默认微页面
 */
export const getMicroPage = (params) => {
  params.accessToken = wx.getStorageSync('accessToken');
  return request(`${easyApiMicroPageUrl}/micro-page/default`, 'get', params);
}

/**
 * 获取微页面组件
 */
export const getPageComponents = (params, id) => {
  params.accessToken = wx.getStorageSync('accessToken');
  return request(`${easyApiMicroPageUrl}/micro-page/${id}/components`, 'get', params);
}

/**
 * 获取单个指定顺序微页面的组件信息
 * @param id 微页面
 * @param sequence 组件顺序，1表示微页面中的第一个组件
 */
export const getPageComponentBySequence = (params, id, sequence) => {
  params.accessToken = wx.getStorageSync('accessToken');
  return request(`${easyApiMicroPageUrl}/micro-page/${id}/component/${sequence}`, 'get', params);
}

/**
 * 获取微页面详情
 */
export const getMicroPageDetail = (params, id) => {
  params.accessToken = wx.getStorageSync('accessToken');
  return request(`${easyApiMicroPageUrl}/micro-page/${id}`, 'get', params);
}