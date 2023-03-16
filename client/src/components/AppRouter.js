import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.component} exact/>
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.component} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} exact/>} />
        </Routes>
    );
};

export default AppRouter;