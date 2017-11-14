/*每个页面对应于一个reducer*/
import * as types from "../action-types"
let initState={
    lesson:0,//当前课程的id
}
export  default function (state=initState,action) {
    //每个action必须把携带的数据放在payload里，而且必须是一个对象
    switch (action.type){
        case types.SET_LESSON:
            return{
                lesson:action.payload.id
            }
        default:
            return{
                state
            }

    }
}