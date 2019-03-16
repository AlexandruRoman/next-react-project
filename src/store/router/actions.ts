import { action } from 'typesafe-actions'
import { routeConstants } from './types'

export const gotoHome = () => action(routeConstants.ROUTE_HOME)
export const gotoAuth = () => action(routeConstants.ROUTE_AUTH)