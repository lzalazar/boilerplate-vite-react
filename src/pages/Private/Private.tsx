import { Layout } from "@/components";
import { PrivateRoutes } from "@/models";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

const Private: React.FC = () => {
    return (<>
        <RoutesWithNotFound>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.EMPLOYEES} element={<>Employees</>} />
            </Route>
        </RoutesWithNotFound>
    </>)
}

export default Private;