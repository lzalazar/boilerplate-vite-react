import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: User = {
    id: "",
    name: "",
    email: "",
    token: ""
}

export const persistLocalStorageUser = (user: User) => localStorage.setItem('user', JSON.stringify({ ...user }))
export const clearLocalStorageUser = () => localStorage.removeItem('user');

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorageUser(action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const updatedUserState = { ...state, ...action.payload };
            persistLocalStorageUser(updatedUserState);
            return updatedUserState
        },
        resetUser: () => {
            clearLocalStorageUser();
            return EmptyUserState;
        }
    }

})

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;