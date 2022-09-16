import { PublicRoutes } from "@/models";
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const AuthGuard = () => {
    const userState = useSelector((state: AppStore) => state.user)
    return userState.id ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />
}