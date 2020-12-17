Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:null,
    latitude:null,
    show:false,
    markers: [
      {
        id: 0,
        latitude: 22.437826,
        longitude: 113.385224,
        callout:{
          content: " 广东理工职业学院",
          padding:10,
          display:'ALWAYS',
          textAlign:'center',
        }
      },
      {
        id: 1,
        latitude: 22.51594,
        longitude: 113.3927,
        callout:{
          content: " 广东理工职业学院",
          padding:10,
          display:'ALWAYS',
          textAlign:'center',
        }
      },
    ]
  },
  onChangeAddress: function () {
    wx.chooseLocation({
      success: (res)=>{
        let {latitude,longitude,name}=res;
        let {markers}=this.data;
        markers[markers.length]={
          id: markers.length,
          latitude: latitude,
          longitude: longitude,
        },
        this.setData({
          latitude,
          longitude,
          markers
        })
      }
    });
  },
  showDetail:function(e){
    console.log(e.markerId);
    console.log(this.data.markers.find(item=>item.id=e.markerId));
    this.setData({
      show:true,
    })
  },
  hiddenDetail(){
    this.setData({
      show:false,
    })
  },
  clickcontrol(e) {
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      altitude: true,
      success:(res)=>{
        if (res.latitude && res.longitude) {
          let {latitude,longitude}=res;
          this.setData({
            latitude,
            longitude,
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})