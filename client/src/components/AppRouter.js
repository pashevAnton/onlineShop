import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.component} exact/>
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.component} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;