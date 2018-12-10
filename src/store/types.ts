import { LocationState } from 'redux-first-router'
import { ModalsState } from './modals/types'

export interface ApplicationState {
    readonly location: LocationState<string, any>
    readonly modals: ModalsState
}