function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
          return
        }

        reject(new Error(`HTTP ${res.statusCode}`))
      },
      fail: reject
    })
  })
}

module.exports = {
  request
}
