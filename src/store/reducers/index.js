import {combineReducers} from "redux"
import home from "./home"
//默认导出一个合并后的reducer(如下所示)
/*{
    home:{
        currentLesson:0
    }
}*/
export default combineReducers({
    home
})