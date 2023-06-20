import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (_, thunkAPI) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Ooops, error has occurred while getting data',
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

export default rocketsSlice.reducer;
