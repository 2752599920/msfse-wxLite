import {Base} from '../../utils/base.js';
class Map extends Base{
  constructor(){
    super();
  }
  getNearbyBooth(data,callBack){
    var obj = {
      url:'getNearbyBooth',
      data:{
        ...data,
      },
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {Map}