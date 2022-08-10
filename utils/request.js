const easyApiMicroPageUrl = 'https://doc-api.easyapi.com';

module.exports.easyApiMicroPageUrl = easyApiMicroPageUrl

/**
 * 请求基础方法
 */
module.exports.request = async function (url, method, data, header) {
  let requestMethod = method.toUpperCase() || "GET";
  let requestData = data || {};
  let requestHeader = header || {
    'content-type': 'application/json'
  };
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: requestData,
      method: requestMethod,
      header: requestHeader,
      success: function (res) {
        wx.hideLoading()
        resolve(res)
      },
      fail: function (error) {
        wx.hideLoading()
        reject
      }
    })
  });
  return promise;
};