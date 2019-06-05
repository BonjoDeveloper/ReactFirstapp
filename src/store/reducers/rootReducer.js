import authReducer from './authReducer'
import projectReducer from './projectReducer'
import rootReducer from './rootReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
// import { firestoreReducer } from 'redux-firestore'

// const rootReducer = combineReducers({
//     auth: authReducer,
//     project: projectReducer,
//     firestore: firestoreReducer
// });

// Add firebase to reducers
export default combineReducers({
    auth: authReducer,
    project: projectReducer,
    root: rootReducer,
    firebase: firebaseReducer
})

// export default rootReducer