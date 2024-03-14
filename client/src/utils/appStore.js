import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import taskSlice from "./taskSlice";
import showFormSlice from "./showFormSlice";

const appStore = configureStore(
    {
        reducer  :{
            user : userSlice,
            tasks : taskSlice,
            showForm : showFormSlice,
        }
    }
)


export default appStore;