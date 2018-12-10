import { fork, all } from 'redux-saga/effects'

import auth from './auth/sagas'

export function* sagas(): any {
    yield all([
        fork(auth)
    ])
}
