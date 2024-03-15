import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import taskSlice from "./taskSlice";
import showFormSlice from "./showFormSlice";
import editTaskWithIdSlice from "./editTaskWithIdSlice";

const appStore = configureStore(
    {
        reducer  :{
            user : userSlice,
            tasks : taskSlice,
            showForm : showFormSlice,
            taskId : editTaskWithIdSlice, 
        }
    }
)


export default appStore;