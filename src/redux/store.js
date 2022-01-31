import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isLoadingReducer } from './reducers/loadingReducer';
import { userDataReducer } from './reducers/userDataReducer';
import { isUserLoginReducer } from './reducers/loginReducer'
import { chatDataReducer } from './reducers/chatDataReducer';
import { notificationDataReducer } from './reducers/notificationReducer';
import { getProfileImageReducer } from './reducers/getProfileImageReducer';
import { messageIdReducer } from './reducers/messageIdReducer';
import { messageDataReducer } from './reducers/messageDataReducer';
const middleware = [thunk];

const rootReducer = combineReducers({
  loading: isLoadingReducer,
  userData: userDataReducer,
  login:isUserLoginReducer,
  chatData: chatDataReducer,
  notification: notificationDataReducer,
  profile_Image:getProfileImageReducer,
  message_Id:messageIdReducer,
  message_Data:messageDataReducer,
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
