import * as types from '../action-types';
/**每个页面对应于一个reducer*/
let initState = {
  lesson:0, //当前课程的ID
  sliders:[],//存着轮播图数据,存在这里的话就不需要重新获取了
  lessons:{//存放课程的列表
      loading:"",//加载状态，默认是加载中
      hasMore:true,//后面是否有更多
      list:[],//存放的课程的数组
      offset:0,//偏移量
      limit:5 //每页的条数
  }
}
export default function(state=initState,action){
  //每个action必须把携带的数据放在payload里，而且必须是一个对象。
  switch (action.type){//判断动作的类型
    case types.SET_LESSON:
      return {
        ...state,
        lesson:action.payload.id
      }
    case types.FETCH_SLIDERS://当轮播图数据取回来后
      return {
        ...state,
        sliders:action.payload.sliders
      }
      case types.FETCH_LESSON:
        return{
            ...state,
            lessons:{
                ...state.lessons,
                loading:"加载中"
            }
        }
      case types.FETCH_LESSON_FINISH:
        return{
            ...state,
            lessons:{
                ...state.lessons,
                loading:"",
                hasMore:action.payload.hasMore,
                //课程列表是不停的累加的，要取到元数组，然后和新数组合并
                list:[...state.lessons.list,...action.payload.list],
                offset:state.lessons.offset+action.payload.list.length,
                limit:action.payload.offset
            }
        }
    default:
      return state;
  }
}