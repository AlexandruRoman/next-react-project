import { combineReducers } from 'redux'

import { ApplicationState } from './types'
import locationReducer from './router/reducer'
import modalsReducer from './modals/reducer'

const rootReducer = combineReducers<ApplicationState>({
  location: locationReducer,
  modals: modalsReducer
});

export default rootReducer;