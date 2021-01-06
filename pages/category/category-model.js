import {Base} from '../../utils/base.js';
class CategoryList extends Base{
  constructor(){
    super();
  }
  getCategoryList(id,callBack){
    var obj = {
      url:'getCategoryList?parentId=' + id,
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {CategoryList}