import { Drawer, User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import drawerSliceReducer from "./states/drawer.state";
import userSliceReducer from "./states/user.state";

export interface AppStore {
    user: User
    drawer: Drawer
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer,
        drawer: drawerSliceReducer
    }
})