import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      const data = response.data.map((rocket) => ({
        ...rocket,
        reserved: false,
      }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Oops, an error occurred while getting data',
      );
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    bookRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      }),
    }),
    cancelBooking: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      }),
    }),
    reservedRocket: (state) => ({
       ...state,
      rockets: state.rockets.filter((rocket) => rocket.reserved),
    }),
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },

    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    },

    [getRockets.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { bookRocket, cancelBooking, reservedRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
