class Base{
  constructor(){
    this.baseUrl = 'http://localhost/msfse/api/v1/'
  }

    requset(params){
      var url = this.baseUrl + params.url

      if(!params.type){
        params.type = 'GET';
      }
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url: url,
        data:params.data,
        header:{
          'content-type':'application/json',
          'token':wx.getStorageSync('token')
        },
        method:params.type,
        dataType:'json',
        responseType:'text',
        success:function(res){
          params.sCallback && params.sCallback(res.data);
        },
        fail:function(res){
          console.log(res);
        },
        complete:function(res){
          wx.hideLoading();
        },
      })
    }
}
export {Base};