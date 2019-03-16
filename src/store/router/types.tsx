import React from 'react'
import { NOT_FOUND } from 'redux-first-router';
import HomeScene from '../../scenes/HomeScene';
import AuthScene from '../../scenes/AuthScene';

export const routeConstants = {
    ROUTE_HOME: 'route/ROUTE_HOME',
    ROUTE_AUTH: 'route/ROUTE_AUTH',
}

export const appRoutes = {
    [routeConstants.ROUTE_HOME]: '/',
    [routeConstants.ROUTE_AUTH]: '/auth',
}


export const scenesMapping = {
    [routeConstants.ROUTE_HOME]: <HomeScene />,
    [routeConstants.ROUTE_AUTH]: <AuthScene />,
    [NOT_FOUND]: <HomeScene />
}