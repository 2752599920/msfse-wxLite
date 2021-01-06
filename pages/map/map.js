import {Map} from './map-model'
var map = new Map()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:null,
    latitude:null,
    markers: [],
  },
  //搜索地点
  onChangeAddress: function () {
    wx.chooseLocation({
      success: (res)=>{
        let {latitude,longitude,name}=res;
        let {markers}=this.data;
        map.getNearbyBooth({latitude:latitude,longitude:longitude},(result)=>{
          if(result.length){
            this.getMarkers(result);
            this.setData({
              latitude,
              longitude,
              markers
            })
          }else{
            wx.showToast({
              title: '该区域暂无摊位,请更换位置后搜索',
              icon:'none',
              duration:3000,
            })
          }
        })
      }
    });
  },
  //跳转shopinfo
  toShopinfo(e){
    wx.navigateTo({
      url: '../shopinfo/shopinfo?id='+e.detail.markerId,
    })
  },
  //回到用户定位位置
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
        // 将用户位置加入缓存
        wx.setStorageSync('latitude', latitude);
        wx.setStorageSync('longitude', longitude);
        //请求附近摊位
        map.getNearbyBooth({latitude:latitude,longitude:longitude},(result)=>{
          this.getMarkers(result);
        })
          this.setData({
            latitude,
            longitude,
          })
        }
      }
    })
  },
  getMarkers(result){
    let markers=[];
    result.forEach(item => {
      let {GPS,address,id}=item;
      let latitude = GPS.split(',')[0];
      let longitude = GPS.split(',')[1];
      markers.push({
        id:id,
        latitude:latitude,
        longitude:longitude,
        callout:{
          content: address,
          padding:10,
          display:'ALWAYS',
          textAlign:'center',
        }
      });
    });
    this.setData({
      markers
    })
    console.log(this.data.markers);
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