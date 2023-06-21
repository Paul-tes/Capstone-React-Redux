import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducers from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducers,
  },
});

export default store;
