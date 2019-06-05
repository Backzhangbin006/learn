const app = getApp()

Page({
  data:{
    files:[]
  },
  chooseImage(e) {
    let that = this
    wx.chooseImage({
      // 图片大小，是原图还是压缩图
      sizeType:['original', 'compressed'],
      // 图片来源是相册还是相机
      sourceType:['album', 'camera'],
      success(res) {
        console.log(res)
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        // -----------
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          const filePath = res.tempFilePaths[i]
          // 获取图片名称   indexOf用于从前到后找某一指定值的位置，lastIndexOf用于从后到前找一指定的值
          let a = filePath.lastIndexOf('.')  //从路径后开始查找第一个.的位置
          let b = filePath.lastIndexOf('.', filePath.length-6)//当路径长度-6后，从后往前查找第一个点的位置
          let c = filePath.substring(b+1,a)  //b为倒数第二个点的位置，所以图片名字从b+1开始到a
          // match检测某一个指定的值
          const cloudPath = c + filePath.match(/\.[^.]+?$/)
          wx.cloud.uploadFile({
            cloudPath,  //相当于cloudPath:cloudPath
            filePath, // 文件路径
            success: res => {
              // get resource ID
              console.log('上传成功', res)
            },
            fail: err => {
              // handle error
            }
          })
        }
      }
    })
  },
  previewImage(e) {
    console.log(e);
    wx.previewImage({
      current:e.currentTarget.id,
      urls:this.data.files
    })
  }
})