import {Base} from '../../utils/base.js';
class ShopList extends Base{
  constructor(){
    super();
  }
  getShopList(type,callBack){
    var obj = {
      url:'getBoothList?type=' + type,
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {ShopList}