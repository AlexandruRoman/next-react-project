import { LocationState } from "redux-first-router";
import { gotoHome, gotoUser } from "../store/router/actions";


export interface OwnProps {
}

export interface StateProps {
    route: LocationState
}

export interface DispatchProps {
    gotoHome: typeof gotoHome,
    gotoUser: typeof gotoUser
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
